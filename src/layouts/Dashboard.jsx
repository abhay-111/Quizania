import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import MainDashboard from "../components/MainDashboard";
export default function Dashboard() {
  const [currentComponent, setcurrentComponent] = useState(
    <MainDashboard></MainDashboard>
  );
  return (
    <Box bg={"#E8DEFF"} w="100vw">
      <Flex w={"100%"} h="100%">
        <SideDrawer setcurrentComponent={setcurrentComponent}></SideDrawer>
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
          {currentComponent}
        </Box>
      </Flex>
    </Box>
  );
}
