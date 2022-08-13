import React from "react";
import { useState } from "react";
import { Box, Flex, Image, Text, Divider, Link } from "@chakra-ui/react";
import brandLogo from "../assets/logo.png";
import SignUp from "../components/forms/SignUp";
import banner from "../assets/MainSideBanner.jpg";
import Login from "../components/forms/Login";
export default function TwoBoxLayout() {
  const [selectedForm, setSelectedForm] = useState(true);
  const handleClick = () => {
    setSelectedForm(!selectedForm);
  };
  return (
    <Flex height={"100vh"}>
      <Box flex={1} w="100%">
        <Flex
          height={"100%"}
          justifyContent="center"
          alignItems={"center"}
          w="100%"
          p={4}
          flexDirection="column"
          gap={5}
        >
          <Image height={"5rem"} w="5rem" src={brandLogo}></Image>
          <Text
            fontSize={{ base: "xl", lg: "3xl", md: "xl", sm: "xl" }}
            fontWeight="600"
          >
            Welcome to Quizania!
          </Text>

          <Text
            fontSize={{ base: "xs", lg: "md", md: "sm", sm: "sm" }}
            color={"purple.600"}
          >
            Make quizzes for your classroom quickly.
          </Text>
          {/* Conditionally rendering Login and signup Component */}
          {selectedForm ? <SignUp></SignUp> : <Login></Login>}

          {selectedForm ? (
            <Text fontSize={"sm"}>
              Already have an account ?{" "}
              <Link onClick={handleClick} color={"purple.600"} fontWeight="600">
                Log In
              </Link>{" "}
            </Text>
          ) : (
            <Text fontSize={"sm"}>
              Dont have an account ?{" "}
              <Link onClick={handleClick} color={"purple.600"} fontWeight="600">
                Sign Up
              </Link>{" "}
            </Text>
          )}
        </Flex>
      </Box>
      <Box
        backgroundImage={banner}
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        flex={2}
        display={{
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
          base: "none",
        }}
        w="100%"
      ></Box>
    </Flex>
  );
}
