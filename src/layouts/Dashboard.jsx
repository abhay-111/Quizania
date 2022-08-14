import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import logo from "../assets/logo.png";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import MainDashboard from "../components/MainDashboard";
export default function Dashboard() {
  return (
    <Box bg={"#E8DEFF"} w="100vw">
      <Flex w={"100%"} h="100%">
        <SideDrawer></SideDrawer>
        <MainDashboard></MainDashboard>
      </Flex>
    </Box>
  );
}
