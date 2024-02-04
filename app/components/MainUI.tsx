"use client"

import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import ConfessionViewer from '../components/ConfessionViewer'
import ConfessionWriter from '../components/ConfessionWriter'

function MainUI({originalConfession}: any) {
  return (
    <main>
    <Flex textAlign={"center"} width={"100vw"} h={"100vh"} className='main-container' color={"white"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <section className='main-content'>
        <Flex className='main-content-container' flexDirection={"column"}>
          <Box className='main-title'>
            <Heading id='main-title' fontSize={"6rem"}>La Confession</Heading>
            <br />
            <Text fontWeight={"bolder"}>Confessez-vous et ouvrez-vous anonymement</Text>
          </Box>
          <ConfessionViewer originalConfession={originalConfession}></ConfessionViewer>
          <ConfessionWriter></ConfessionWriter>
        </Flex>
      </section>
    </Flex>
  </main>
  )
}

export default MainUI