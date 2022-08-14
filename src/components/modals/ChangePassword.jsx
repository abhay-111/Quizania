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
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { changeUserPassword } from "../../reducers/authReducers";
export default function ChangePassword({ userEmail, onClose }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const [newPassword, setnewPassword] = useState("");
  const handleNewPassword = (event) => {
    setnewPassword(event.target.value);
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
    <ModalContent>
      <ModalHeader fontSize={{ base: "sm", lg: "lg", md: "lg", sm: "sm" }}>
        Enter your new password.
      </ModalHeader>
      <ModalBody>
        <FormLabel fontSize={{ base: "sm", lg: "md", md: "sm", sm: "sm" }}>
          New Password
        </FormLabel>
        <Input onChange={handleNewPassword} name="newpassword"></Input>
      </ModalBody>

      <ModalFooter>
        <Button onClick={changePassword} colorScheme="purple" mr={3}>
          Submit
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
