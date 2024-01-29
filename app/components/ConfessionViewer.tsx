"use client";

import {
  Box,
  Button,
  Flex,
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

function ConfessionViewer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              facere quibusdam obcaecati mollitia!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
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
            dfsdf
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
              <Button colorScheme="blue" onClick={onOpen}>Envoyer un commentaire</Button>
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
