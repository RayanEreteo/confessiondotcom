"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";

import { useState } from "react";

function ConfessionWriter() {
  const [loading, setLoading] = useState<boolean>(false);

  function sendConfession(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      confession: e.target.confession.value,
    };

    const dataToSend = JSON.stringify(data);
  }

  return (
    <Box className="confession-writer" mt={"5rem"}>
      <form onSubmit={sendConfession}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"left"}
        >
          <Textarea
            name="confession"
            placeholder="Ecriver votre confession...."
            mb={"3rem"}
            border={"solid 3px black"}
            borderRadius={"10px"}
            color={"black"}
            background={"white"}
            resize={"none"}
            maxLength={300}
            width={"400px"}
            height={"10px"}
            required
          ></Textarea>
          <Input
            type="email"
            placeholder="Votre Email..."
            mb={"3rem"}
            border={"solid 3px black"}
            borderRadius={"10px"}
            color={"black"}
            background={"white"}
            resize={"none"}
            maxLength={300}
            width={"400px"}
            textAlign={"center"}
            required
          ></Input>
          <Button colorScheme="blue" type="submit" isLoading={loading}>
            Envoyer la confession
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export default ConfessionWriter;
