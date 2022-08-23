import React from "react";
import { useState } from "react";
import { Text, Flex, Box, Image, Divider } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Button,
  UnorderedList,
} from "@chakra-ui/react";
import { DrawerOverlay } from "@chakra-ui/react";
import { useRef } from "react";
import {
  PhoneIcon,
  HamburgerIcon,
  AtSignIcon,
  AddIcon,
  CloseIcon,
  SmallCloseIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
import MainProfile from "../profile/MainProfile";
import MainDashboard from "../MainDashboard";
import QuizMaker from "../QuizMaker";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function SideDrawer({ setcurrentComponent }) {
  const [navigationList, setnavigationList] = useState([
    {
      linkName: "Create a new Quiz",
      route: "createQuiz",
      isActive: true,
      icon: (
        <AddIcon
          fontSize={{ lg: "xl", base: "md" }}
          color={"purple.600"}
        ></AddIcon>
      ),
      component: <QuizMaker></QuizMaker>,
    },
    {
      linkName: "Main Dashboard",
      isActive: true,
      route: "dashboard",
      icon: (
        <HamburgerIcon
          fontSize={{ lg: "xl", base: "md" }}
          color={"purple.600"}
        ></HamburgerIcon>
      ),
      component: <MainDashboard></MainDashboard>,
    },
    {
      linkName: "Profile",
      isActive: false,
      route: "profile",
      icon: (
        <AtSignIcon
          fontSize={{ lg: "xl", base: "md" }}
          color={"purple.600"}
        ></AtSignIcon>
      ),
      component: <MainProfile></MainProfile>,
    },
    {
      linkName: "Logout",
      isActive: false,
      icon: (
        <AtSignIcon
          fontSize={{ lg: "xl", base: "md" }}
          color={"purple.600"}
        ></AtSignIcon>
      ),
      component: <MainProfile></MainProfile>,
    },
  ]);
  const setActive = (route, idx) => {
    let newData = navigationList.map((link, i) => {
      if (i == idx) {
        return {
          linkName: link.linkName,
          icon: link.icon,
          isActive: true,
          route: link.route,
          component: link.component,
        };
      } else {
        return {
          linkName: link.linkName,
          icon: link.icon,
          isActive: false,
          route: link.route,
          component: link.component,
        };
      }
    });
    setnavigationList(newData);
    navigate("/" + route);
  };

  const drawerRef = useRef();
  const handleSideDrawer = () => {
    if (drawerRef.current.style.display == "block") {
      drawerRef.current.style.display = "none";
    } else {
      drawerRef.current.style.display = "block";
    }
  };
  const navigate = useNavigate();
  const logoutUser = () => {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      Cookies.remove(cookieName);
    });

    navigate("/");
  };
  return (
    <>
      <Button
        onClick={handleSideDrawer}
        ref={drawerRef}
        display={{ base: "block", lg: "none" }}
        position="fixed"
        left="0"
        top="2%"
        opacity={"0.7"}
        colorScheme="purple"
        borderRadius={"0px 10px 10px 0px"}
        zIndex="10"
      >
        <HamburgerIcon></HamburgerIcon>
      </Button>
      <Box
        zIndex={"100"}
        ref={drawerRef}
        display={{ lg: "block", base: "none" }}
        position={"fixed"}
        left={{ base: "0", lg: "" }}
        w={{ lg: "20vw", base: "60vw", sm: "40vw" }}
        h="100vh"
        bg={"white"}
      >
        <Button
          onClick={handleSideDrawer}
          display={{ lg: "none", base: "block" }}
          size={"xs"}
          position={"absolute"}
          top="3"
          right="3"
        >
          <SmallCloseIcon></SmallCloseIcon>
        </Button>
        <Box px={5} py="10">
          <Flex
            justifyContent={"center"}
            alignItems="center"
            direction={"column"}
            gap="2"
          >
            <Image src={logo} h="60px" w={"60px"}></Image>
            <Text
              color={"purple.600"}
              fontSize={{ lg: "3xl", base: "lg" }}
              fontWeight="600"
            >
              Quizania
            </Text>
          </Flex>
        </Box>
        <Divider></Divider>
        <List spacing={7} px="5" py="5">
          {navigationList.map((link, idx) => {
            if (idx == 0) {
              return (
                <ListItem
                  bg={"purple.600"}
                  borderRadius="xl"
                  p={{ lg: "3", base: "3" }}
                  cursor={"pointer"}
                  onClick={() => setActive(link.route, idx)}
                >
                  <Flex gap={"5"} alignItems={"center"}>
                    <AddIcon
                      fontSize={{ lg: "md", base: "xs" }}
                      color={"white"}
                    ></AddIcon>
                    <Text
                      fontSize={{ base: "sm", lg: "md" }}
                      fontWeight={"700"}
                      color="white"
                    >
                      Create a Quiz
                    </Text>
                  </Flex>
                </ListItem>
              );
            }
            if (idx == navigationList.length - 1) {
              return (
                <ListItem
                  bg={"red.500"}
                  borderRadius="xl"
                  p={{ lg: "3", base: "3" }}
                  position="absolute"
                  bottom={"5"}
                  cursor={"pointer"}
                  mt={"auto"}
                  w="80%"
                  onClick={() => setActive(link.route, idx)}
                >
                  <Flex gap={"5"} alignItems={"center"}>
                    <CloseIcon
                      fontSize={{ lg: "xs", base: "xs" }}
                      color={"white"}
                    ></CloseIcon>
                    <Text
                      fontSize={{ base: "sm", lg: "md" }}
                      fontWeight={"700"}
                      color="white"
                    >
                      Logout
                    </Text>
                  </Flex>
                </ListItem>
              );
            }
            return (
              <ListItem
                key={idx}
                onClick={() => setActive(link.route, idx)}
                borderRight={
                  link.isActive
                    ? "3px solid var(--chakra-colors-purple-600)"
                    : ""
                }
                p="1"
                cursor={"pointer"}
              >
                <Flex gap={"5"} alignItems={"center"}>
                  {/* <HamburgerIcon
                  fontSize={"xl"}
                  color={"purple.600"}
                ></HamburgerIcon> */}
                  {link.icon}
                  <Text
                    fontSize={{ base: "xs", lg: "md" }}
                    fontWeight={link.isActive ? "700" : "400"}
                  >
                    {link.linkName}
                  </Text>
                </Flex>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}
