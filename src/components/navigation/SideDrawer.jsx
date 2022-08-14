import React from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Center,
  Text,
  Flex,
  Box,
  Image,
  Divider,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
export default function SideDrawer() {
  const [navigationList, setnavigationList] = useState([
    {
      linkName: "Main Dashboard",
      isActive: true,
      icon: (
        <HamburgerIcon fontSize={"xl"} color={"purple.600"}></HamburgerIcon>
      ),
    },
    {
      linkName: "Profile",
      isActive: false,
      icon: <AtSignIcon fontSize={"xl"} color={"purple.600"}></AtSignIcon>,
    },
    {
      linkName: "Create a Quiz",
      isActive: false,
      icon: <PhoneIcon fontSize={"xl"} color={"purple.600"}></PhoneIcon>,
    },
  ]);
  const setActive = (idx) => {
    console.log(idx);
    let newData = navigationList.map((link, i) => {
      if (i == idx) {
        return {
          linkName: link.linkName,
          icon: link.icon,
          isActive: true,
        };
      } else {
        return {
          linkName: link.linkName,
          icon: link.icon,
          isActive: false,
        };
      }
    });
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
