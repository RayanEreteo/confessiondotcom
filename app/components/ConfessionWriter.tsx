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

import { useRef, useState } from "react";

function ConfessionWriter() {
  const [loading, setLoading] = useState<boolean>(false);
  const [serverResponse, setserverResponse] = useState<any>({});

  const confinputRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  async function sendConfession(e: any) {
    e.preventDefault();
    setserverResponse({})
    setLoading(true);

    const data = {
      confession: e.target.confession.value,
      email: e.target.email.value,
    };

    const dataToSend = JSON.stringify(data);

    try {
      const response = await fetch("http://localhost:8080/insertConfession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataToSend,
      });
    
      const data = await response.json();
      setserverResponse(data);
      console.log(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setserverResponse({
        success: false,
        message: "Le serveur ne répond pas, merci de réessayer ultérieurement.",
      });
    } finally {
      confinputRef.current!.value = "";
      emailRef.current!.value = "";
    }    
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
            ref={confinputRef}
            name="confession"
            placeholder="Ecriver votre confession...."
            mb={"3rem"}
            border={"solid 3px black"}
            borderRadius={"10px"}
            color={"black"}
            background={"white"}
            resize={"none"}
            maxLength={300}
            minLength={10}
            width={"400px"}
            height={"10px"}
            required
          ></Textarea>
          <Input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Votre Email..."
            mb={"1rem"}
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
          <Text
            mb={"1rem"}
            id="server-response"
            style={
              serverResponse && serverResponse.success == false
                ? { color: "red" }
                : { color: "green" }
            }
          >
            {serverResponse && serverResponse.message}
          </Text>
          <Button colorScheme="blue" type="submit" isLoading={loading}>
            Envoyer la confession
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export default ConfessionWriter;
