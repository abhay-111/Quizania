import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import MainDashboard from "../components/MainDashboard";
export default function Dashboard(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("userToken")) {
      navigate("/");
      return;
    }
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentComponent, setcurrentComponent] = useState(
    <MainDashboard></MainDashboard>
  );
  return (
    // <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    //   <DrawerOverlay />
    //   <DrawerContent>
    //     <DrawerCloseButton />
    //     <DrawerHeader>Create your account</DrawerHeader>

    //     <DrawerBody>
    <Flex
      w={"100%"}
      justifyContent={{ base: "center", lg: "inherit" }}
      h="100%"
    >
      {props.nav}
      <Box
        h={"auto"}
        position={{ lg: "absolute", base: "static" }}
        left={{ base: "0", lg: "20vw" }}
        w={"80vw"}
      >
        <Box h={"100%"} p={{ lg: 10, base: 0 }}>
          <Box mt={{ base: "20", lg: "10" }}>
            <Breadcrumb display={{ base: "block", lg: "block" }}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  {props.breadcrumbLabel}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text
              display={{ base: "block", lg: "block" }}
              fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
              fontWeight={"700"}
            >
              {props.breadcrumbLabel}
            </Text>
          </Box>
          <Box mt={"20px"} mb={"50px"}>
            {props.main}
          </Box>
        </Box>
      </Box>
    </Flex>
    //     </DrawerBody>

    //     <DrawerFooter>
    //       <Button variant="outline" mr={3} onClick={onClose}>
    //         Cancel
    //       </Button>
    //       <Button colorScheme="blue">Save</Button>
    //     </DrawerFooter>
    //   </DrawerContent>
    // </Drawer>
  );
}
