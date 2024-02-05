"use client";

import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function ConfessionViewer({ originalConfession }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState<boolean>(false);

  const [currentConfession, setCurrentConfession] =
    useState<any>(originalConfession);

  async function sendCommment() {
    setLoading(true);

    const targetEmail = { targetEmail: currentConfession.confession.authorEmail };
    const dataToSend = JSON.stringify(targetEmail);

    const response = await fetch("http://localhost:8080/sendLove", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: dataToSend,
    });

    const data = await response.json()
  }

  function fetchConfession(): void {
    setCurrentConfession({ success: true });
    setLoading(true);

    fetch("http://localhost:8080/getConfession", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentConfession(data);
      })
      .catch(() => {
        setCurrentConfession({
          success: false,
          confession: {
            confession:
              "Impossible de récupérer une confession. Merci de réessayer.",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Envoyer un commentaire</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Text>
                Envoyer anonymement un commentaire à l'email de l'auteur de la
                confession.
              </Text>
              <br />
              <Input
                placeholder="votre commentaire"
                maxLength={40}
                required
              ></Input>
              <br />
              <br />
              <Button type="submit" colorScheme="blue" mr={3}>
                Envoyer
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box className="confession-viewer" mt={"3rem"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"left"}
          flexDirection={"column"}
        >
          <Text
            border={"solid 3px black"}
            borderRadius={"10px"}
            borderColor={currentConfession.success ? "black" : "red"}
            background={"white"}
            color={"black"}
            width={"400px"}
            height={"200px"}
            padding={"6px"}
          >
            {currentConfession.confession?.confession
              ? currentConfession.confession?.confession
              : "Chargement de la confession...."}
          </Text>
          <Flex
            ml={"6rem"}
            mt={"3rem"}
            className="confess-options"
            width={"60rem"}
            justifyContent={"space-around"}
          >
            <Tooltip label={"Envoyer du soutien sans laisser de commentaire"}>
              <Button
                onClick={sendCommment}
                colorScheme="red"
                isLoading={loading}
              >
                Envoyer un coeur
              </Button>
            </Tooltip>
            <Tooltip
              label={
                "Laisser un commentaire qui sera envoyé anonymement a la personne concerné"
              }
            >
              <Button colorScheme="blue" onClick={onOpen} isLoading={loading}>
                Envoyer un commentaire
              </Button>
            </Tooltip>
            <Tooltip label={"Ignorer et passer a la confession suivante"}>
              <Button onClick={fetchConfession} isLoading={loading}>
                Passez à la confession suivante
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default ConfessionViewer;
