import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import errorImage from "../assets/404.jpg";
export default function ErrorPage() {
  return (
    <Flex
      background={"white"}
      w={"100vw"}
      h="100vh"
      flexDirection={"column"}
      gap="3"
      justifyContent={"center"}
      alignItems="center"
    >
      <Image w={"50vw"} h="60vh" src={errorImage}></Image>
      <Text
        color="purple.600"
        fontSize={{ lg: "xl", base: "lg" }}
        fontWeight="700"
      >
        Go Home! No Quiz here.
      </Text>
    </Flex>
  );
}
