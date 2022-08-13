import { Flex, Input, Link, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { loginUser } from "../../reducers/authReducers";
import { useDispatch } from "react-redux/es/exports";
import { unwrapResult } from "@reduxjs/toolkit";
import { PinInput, PinInputField } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { sendUserOtp } from "../../reducers/authReducers";
import axios from "axios";
import { verifyUserOtp } from "../../reducers/authReducers";
import { changeUserPassword } from "../../reducers/authReducers";
export default function Login() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [Otp, setOtp] = useState(null);
  const [showOtp, setShowOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showChangePassword, setshowChangePassword] = useState(false);
  const [newPassword, setnewPassword] = useState("");
  const handleNewPassword = (event) => {
    setnewPassword(event.target.value);
  };
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
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
  const sendOtp = () => {
    console.log(userEmail);
    const payload = {
      email: userEmail,
    };
    dispatch(sendUserOtp(payload))
      .then(unwrapResult)
      .then((res) => {
        toast({
          title: "OTP send sucessfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setShowOtp(true);
      })
      .catch((err) => {
        toast({
          title: "User does not exist",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const verifyOtp = () => {
    const payload = {
      email: userEmail,
      otp: Otp,
    };
    dispatch(verifyUserOtp(payload))
      .then(unwrapResult)
      .then((res) => {
        setShowOtp(false);
      })
      .then((res) => {
        toast({
          title: "OTP Verified",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setshowChangePassword(true);
      })
      .catch((err) => {
        toast({
          title: "Wrong OTP entered.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  };
  const changePassword = () => {
    const payload = {
      email: userEmail,
      password: newPassword,
    };
    dispatch(changeUserPassword(payload))
      .then(unwrapResult)
      .then((res) => {
        toast({
          title: "Password change successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      })
      .catch((err) => {
        toast({
          title: "Some error occured",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Flex>
      <Modal closeOnOverlayClick={!showOtp} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {showOtp ? (
          <ModalContent>
            <ModalHeader
              fontSize={{ base: "sm", lg: "lg", md: "lg", sm: "sm" }}
            >
              Enter your OTP
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <PinInput onChange={(e) => setOtp(e)}>
                <PinInputField></PinInputField>
                <PinInputField></PinInputField>
                <PinInputField></PinInputField>
                <PinInputField></PinInputField>
                <PinInputField></PinInputField>
                <PinInputField></PinInputField>
              </PinInput>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={verifyOtp} colorScheme="purple" mr={3}>
                Submit OTP
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : showChangePassword ? (
          <ModalContent>
            <ModalHeader
              fontSize={{ base: "sm", lg: "lg", md: "lg", sm: "sm" }}
            >
              Enter your new password.
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel
                fontSize={{ base: "sm", lg: "md", md: "sm", sm: "sm" }}
              >
                New Password
              </FormLabel>
              <Input onChange={handleNewPassword} name="newpassword"></Input>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={changePassword} colorScheme="purple" mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader
              fontSize={{ base: "sm", lg: "lg", md: "lg", sm: "sm" }}
            >
              Enter your registered Email.
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel
                fontSize={{ base: "sm", lg: "md", md: "sm", sm: "sm" }}
              >
                Registered Email
              </FormLabel>
              <Input onChange={handleUserEmail} name="changePassword"></Input>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={sendOtp} colorScheme="purple" mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
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
