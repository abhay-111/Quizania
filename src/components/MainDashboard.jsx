import { Flex, Box, Container, Text } from "@chakra-ui/react";
import UserPill from "./dashboard/UserPill";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import Leaderboard from "./dashboard/Leaderboard";
import {
  PhoneIcon,
  HamburgerIcon,
  AtSignIcon,
  RepeatClockIcon,
  LockIcon,
} from "@chakra-ui/icons";
import React from "react";

export default function MainDashboard() {
  const userData = [
    {
      pillTitle: "Username",
      pillValue: "Abhay Chauhan",
      icon: <AtSignIcon color={"#9a419a"} fontSize={"xl"}></AtSignIcon>,
    },
    {
      pillTitle: "Running Quizzes",
      pillValue: "13",
      icon: (
        <RepeatClockIcon color={"#9a419a"} fontSize={"xl"}></RepeatClockIcon>
      ),
    },
    {
      pillTitle: "Total Quizzes",
      pillValue: "37",
      icon: <LockIcon color={"#9a419a"} fontSize={"xl"}></LockIcon>,
    },
  ];
  return (
    <Box h={"100%"} w="80vw" p={10}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Main Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize="3xl" fontWeight={"700"}>
        Main Dashboard
      </Text>
      <Flex h={"100%"} gap="3" direction="column" w="100%">
        <Flex w={"100%"} mt="4" gap={"5"}>
          {userData.map((ele) => {
            return <UserPill user={ele}></UserPill>;
          })}
        </Flex>
        <Flex w={"100%"} mt="4" gap={"5"}>
          {userData.map((ele) => {
            return <UserPill user={ele}></UserPill>;
          })}
        </Flex>
        <Leaderboard></Leaderboard>
      </Flex>
    </Box>
  );
}
