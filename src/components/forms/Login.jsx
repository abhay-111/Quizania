import { Flex, Input, Link, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { loginUser } from "../../reducers/authReducers";
import { useDispatch } from "react-redux/es/exports";
import { unwrapResult } from "@reduxjs/toolkit";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import OtpModal from "../modals/OtpModal";
import UserEmailModal from "../modals/UserEmailModal";
import ChangePassword from "../modals/ChangePassword";
import Cookies from "js-cookie";
export default function Login() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [showOtp, setShowOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showChangePassword, setshowChangePassword] = useState(false);

  const [formData, setFomData] = useState({
    email: "",
    password: "",
  });
  //function to set the data entered by the user
  const handleFormData = (event) => {
    setFomData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };
  const login = () => {
    dispatch(loginUser(formData))
      .then(unwrapResult)
      .then((res) => {
        console.log(res);
        // Cookies.set("userToken",)
        toast({
          title: "Logged in successfully",
          description: "Get ready to make quiz",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Login failed.",
          description: "Email or password are incorrect",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Flex>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {showOtp ? (
          <OtpModal
            setShowOtp={setShowOtp}
            setshowChangePassword={setshowChangePassword}
            userEmail={userEmail}
            onClose={onClose}
          ></OtpModal>
        ) : showChangePassword ? (
          <ChangePassword
            userEmail={userEmail}
            onClose={onClose}
          ></ChangePassword>
        ) : (
          <UserEmailModal
            onClose={onClose}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            setShowOtp={setShowOtp}
          ></UserEmailModal>
        )}
      </Modal>
      <FormControl>
        <Divider mb={4}></Divider>
        <FormLabel mt={3}>Email address</FormLabel>
        <Input onChange={handleFormData} type="email" name="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        {/* <Divider mt={3}></Divider> */}
        <InputGroup mt={4} size="md">
          <Input
            onChange={handleFormData}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text
          color={"purple.600"}
          fontSize="sm"
          fontStyle={"italic"}
          onClick={onOpen}
          align="right"
        >
          <Link>Forgot Password ?</Link>
        </Text>
        <Button onClick={login} colorScheme="purple" w="100%" mt={5}>
          Submit
        </Button>
      </FormControl>
    </Flex>
  );
}
