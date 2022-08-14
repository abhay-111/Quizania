import React from "react";
import { useState } from "react";
import { Text, Flex, Box, Image, Divider } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  HamburgerIcon,
  AtSignIcon,
  AddIcon,
} from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
import Profile from "../dashboard/Profile";
import MainDashboard from "../MainDashboard";
export default function SideDrawer({ setcurrentComponent }) {
  const [navigationList, setnavigationList] = useState([
    {
      linkName: "Main Dashboard",
      isActive: true,
      icon: (
        <HamburgerIcon fontSize={"xl"} color={"purple.600"}></HamburgerIcon>
      ),
      component: <MainDashboard></MainDashboard>,
    },
    {
      linkName: "Profile",
      isActive: false,
      icon: <AtSignIcon fontSize={"xl"} color={"purple.600"}></AtSignIcon>,
      component: <Profile></Profile>,
    },
    {
      linkName: "Create a Quiz",
      isActive: false,
      icon: <PhoneIcon fontSize={"xl"} color={"purple.600"}></PhoneIcon>,
      component: <Profile></Profile>,
    },
  ]);
  const setActive = (idx) => {
    let newData = navigationList.map((link, i) => {
      if (i == idx) {
        return {
          linkName: link.linkName,
          icon: link.icon,
          isActive: true,
          component: link.component,
        };
      } else {
        return {
          linkName: link.linkName,
          icon: link.icon,
          isActive: false,
          component: link.component,
        };
      }
    });
    setcurrentComponent(navigationList[idx].component);
    setnavigationList(newData);
  };
  return (
    <>
      <Box w={"20vw"} h="100vh" bg={"white"}>
        <Box px={5} py="10">
          <Flex
            justifyContent={"center"}
            alignItems="center"
            direction={"column"}
            gap="2"
          >
            <Image src={logo} h="60px" w={"60px"}></Image>
            <Text color={"purple.600"} fontSize="3xl" fontWeight="600">
              Quizania
            </Text>
          </Flex>
        </Box>
        <Divider></Divider>
        <List spacing={7} px="5" py="5">
          <ListItem
            bg={"purple.600"}
            borderRadius="xl"
            p="3"
            cursor={"pointer"}
          >
            <Flex gap={"5"} alignItems={"center"}>
              <AddIcon fontSize={"xl"} color={"white"}></AddIcon>
              <Text fontWeight={"700"} color="white">
                Create a Quiz
              </Text>
            </Flex>
          </ListItem>
          {navigationList.map((link, idx) => {
            return (
              <ListItem
                key={idx}
                onClick={() => setActive(idx)}
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
                  <Text fontWeight={link.isActive ? "700" : "400"}>
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
