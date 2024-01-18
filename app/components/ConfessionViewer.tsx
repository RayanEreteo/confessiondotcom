"use client";

import { Box, Button, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";

function ConfessionViewer() {
  return (
    <Box>
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
        <Flex ml={"6rem"} mt={"3rem"} className="confess-options" width={"60rem"} justifyContent={"space-around"}>
          <Tooltip label={"Envoyer du soutien sans laisser de commentaire"}>
            <Button colorScheme="red">Envoyer un coeur</Button>
          </Tooltip>
          <Tooltip label={"Laisser un commentaire qui sera envoyé anonymement a la personne concerné"}>
            <Button colorScheme="blue">Envoyer un commentaire</Button>
          </Tooltip>
          <Tooltip label={"Ignorer et passer a la confession suivante"}>
            <Button>Passez à la confession suivante</Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ConfessionViewer;
