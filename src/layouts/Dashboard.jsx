import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import MainDashboard from "../components/MainDashboard";
export default function Dashboard() {
  const drawerRef = useRef();
  const [currentComponent, setcurrentComponent] = useState(
    <MainDashboard></MainDashboard>
  );
  return (
    <Box bg={"#E8DEFF"} h="100vh" w="100vw">
      <Flex
        w={"100%"}
        justifyContent={{ base: "center", lg: "inherit" }}
        h="100%"
      >
        <SideDrawer
          ref={drawerRef}
          display="none"
          setcurrentComponent={setcurrentComponent}
        ></SideDrawer>
        <Box
          h={"100%"}
          overflowY={"scroll"}
          position={{ lg: "absolute", base: "static" }}
          left={{ base: "0", lg: "20vw" }}
          w={{ lg: "80vw", base: "100%" }}
          p={{ lg: 10, base: 4 }}
        >
          <Breadcrumb display={{ base: "none", lg: "block" }}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Main Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Text
            display={{ base: "none", lg: "block" }}
            fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
            fontWeight={"700"}
          >
            Main Dashboard
          </Text>
          <Box mt={"25px"}>{currentComponent}</Box>
        </Box>
      </Flex>
    </Box>
  );
}
