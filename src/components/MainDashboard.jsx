import { Flex, Box, Container, Text } from "@chakra-ui/react";
import UserPill from "./dashboard/UserPill";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import Leaderboard from "./dashboard/Leaderboard";
import { useEffect, useState } from "react";
import {
  PhoneIcon,
  HamburgerIcon,
  AtSignIcon,
  RepeatClockIcon,
  LockIcon,
} from "@chakra-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { getLatestLeaderboard } from "../reducers/quizReducers";
import Cookies from "js-cookie";
export default function MainDashboard() {
  const dispatch = useDispatch();
  const userData = [
    {
      pillTitle: "Username",
      pillValue: "Abhay Chauhan",
      icon: (
        <AtSignIcon
          color={"#9a419a"}
          fontSize={{ lg: "xl", base: "lg" }}
        ></AtSignIcon>
      ),
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
  const [LeaderBoard, setLeaderBoard] = useState([]);
  useEffect(() => {
    const payload = {
      userId: Cookies.get("userId"),
    };
    dispatch(getLatestLeaderboard(payload)).then((res) => {
      setLeaderBoard(res.payload.data.data.leaderBoard);
      console.log(LeaderBoard);
    });
  }, []);

  return (
    <Flex h={"100%"} gap="3" direction="column" w="100%">
      <Flex
        w={"100%"}
        justifyContent="space-between"
        mt="4"
        flexWrap={"wrap"}
        gap={"5"}
      >
        {userData.map((ele) => {
          return <UserPill user={ele}></UserPill>;
        })}
      </Flex>
      <Leaderboard leaderBoard={LeaderBoard}></Leaderboard>
    </Flex>
  );
}
