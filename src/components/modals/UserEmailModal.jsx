import React from "react";
import { useState } from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { sendUserOtp } from "../../reducers/authReducers";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";
export default function UserEmailModal({
  onClose,
  setShowOtp,
  setUserEmail,
  userEmail,
}) {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
    console.log(userEmail);
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
  return (
    <ModalContent>
      <ModalHeader fontSize={{ base: "sm", lg: "lg", md: "lg", sm: "sm" }}>
        Enter your registered Email.
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormLabel fontSize={{ base: "sm", lg: "md", md: "sm", sm: "sm" }}>
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
  );
}
