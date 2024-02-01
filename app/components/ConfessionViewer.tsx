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
import { useEffect, useState } from "react";

function ConfessionViewer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState<boolean>(false);
  const [currentConfession, setCurrentConfession] = useState<any>({});

  function sendCommment(event: any): void {
    console.log("comment sent");
  }
 
  useEffect(() => {
    setLoading(true)

    fetch("http://localhost:8080/getConfession", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentConfession(data)
      }).catch(() => {
        setLoading(false)
        setCurrentConfession({confession: "Impossible de récuperer une confession. Merci de réessayer."})
      })
  }, []);

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
            background={"white"}
            color={"black"}
            width={"400px"}
            height={"200px"}
          >
            {currentConfession.confession ? currentConfession.confession : "Chargement de la confession...."}
          </Text>
          <Flex
            ml={"6rem"}
            mt={"3rem"}
            className="confess-options"
            width={"60rem"}
            justifyContent={"space-around"}
          >
            <Tooltip label={"Envoyer du soutien sans laisser de commentaire"}>
              <Button colorScheme="red">Envoyer un coeur</Button>
            </Tooltip>
            <Tooltip
              label={
                "Laisser un commentaire qui sera envoyé anonymement a la personne concerné"
              }
            >
              <Button colorScheme="blue" onClick={onOpen}>
                Envoyer un commentaire
              </Button>
            </Tooltip>
            <Tooltip label={"Ignorer et passer a la confession suivante"}>
              <Button>Passez à la confession suivante</Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default ConfessionViewer;
