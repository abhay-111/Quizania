import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  HStack,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux/es/exports";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { sendUserOtp } from "../../reducers/authReducers";
import { verifyUserOtp } from "../../reducers/authReducers";
export default function OtpModal({
  setshowChangePassword,
  setShowOtp,
  onClose,
  userEmail,
}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const [Otp, setOtp] = useState(null);
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
  return (
    <ModalContent>
      <ModalHeader fontSize={{ base: "sm", lg: "lg", md: "lg", sm: "sm" }}>
        Enter your OTP
      </ModalHeader>
      <ModalBody>
        <HStack>
          <PinInput onChange={(e) => setOtp(e)}>
            <PinInputField></PinInputField>
            <PinInputField></PinInputField>
            <PinInputField></PinInputField>
            <PinInputField></PinInputField>
            <PinInputField></PinInputField>
            <PinInputField></PinInputField>
          </PinInput>
        </HStack>
      </ModalBody>

      <ModalFooter>
        <Button onClick={verifyOtp} colorScheme="purple" mr={3}>
          Submit OTP
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
