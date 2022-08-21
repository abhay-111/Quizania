import { Flex, Box, Container, Text, Spinner } from "@chakra-ui/react";
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
import { useDispatch, useSelector } from "react-redux";
import { getLatestLeaderboard } from "../reducers/quizReducers";
import Cookies from "js-cookie";
import { getAllQuiz } from "../reducers/profileReducers";
import { unwrapResult } from "@reduxjs/toolkit";
export default function MainDashboard() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.profile.allQuiz);
  const isLoaded = useSelector((state) => state.profile.isLoaded);
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
      pillValue: quizzes.length,
      icon: (
        <RepeatClockIcon color={"#9a419a"} fontSize={"xl"}></RepeatClockIcon>
      ),
    },
    {
      pillTitle: "Total Quizzes",
      pillValue: quizzes.length,
      icon: <LockIcon color={"#9a419a"} fontSize={"xl"}></LockIcon>,
    },
    {
      pillTitle: "Username",
      pillValue: "Abhay Chauhan",
      icon: <AtSignIcon color={"#9a419a"} fontSize={"xl"}></AtSignIcon>,
    },
    {
      pillTitle: "Running Quizzes",
      pillValue: quizzes.length,
      icon: (
        <RepeatClockIcon color={"#9a419a"} fontSize={"xl"}></RepeatClockIcon>
      ),
    },
    {
      pillTitle: "Total Quizzes",
      pillValue: quizzes.length,
      icon: <LockIcon color={"#9a419a"} fontSize={"xl"}></LockIcon>,
    },
  ];
  const [LeaderBoard, setLeaderBoard] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const payload = {
      userId: Cookies.get("userId"),
    };
    if (!isLoaded) {
      setisLoading(true);
      dispatch(getAllQuiz(payload))
        .then(unwrapResult)
        .then((res) => {
          if (res.data.UserData.length) {
            setLeaderBoard(res.data.UserData[0].leaderBoard);
          }
          setisLoading(false);
        });
    } else {
      setLeaderBoard(quizzes[0].leaderBoard);
    }
  }, []);

  return (
    <Flex h={"100%"} gap="3" direction="column" w="100%">
      <Flex
        display={isLoading ? "flex" : "none"}
        w={"100vw"}
        h={"100vh"}
        bg={"purple.600"}
        position="fixed"
        top={"0"}
        left="0"
        justifyContent={"center"}
        alignItems="center"
        zIndex={"10000"}
        flexDirection="column"
        gap="3"
      >
        <Spinner
          size={"xl"}
          thickness="6px"
          speed="0.7s"
          color="white"
        ></Spinner>
        <Text
          fontSize={{ lg: "xl", base: "md" }}
          color="white"
          fontWeight={"600"}
        >
          Loading your Quizzes....
        </Text>
      </Flex>
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
      <Leaderboard leaderBoard={LeaderBoard} quizName={"Maths"}></Leaderboard>
    </Flex>
  );
}
