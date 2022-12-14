import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../reducers/authReducers";
import { signupUser } from "../../reducers/authReducers";
import { unwrapResult } from "@reduxjs/toolkit";
import cookie from "js-cookie";
import axios from "axios";

import { useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
export default function SignUp() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const data = useSelector((state) => state.auth.count);
  const [formData, setFomData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //function to set the data entered by the user
  const handleFormData = (event) => {
    setFomData({
      ...formData,

      [event.target.name]: event.target.value,
    });
  };
  const signup = async () => {
    dispatch(signupUser(formData))
      .then(unwrapResult)
      .then((res) => {
        cookie.set("accessToken", res.data.data);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        toast({
          title: "Account cannot be created.",
          description: "User already exists",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Flex>
      <FormControl>
        <Divider mb={4}></Divider>
        <FormLabel>Full Name</FormLabel>
        <Input name="username" onChange={handleFormData} type="text" />
        <FormHelperText>Eg : Jane Doe</FormHelperText>
        <FormLabel mt={3}>Email address</FormLabel>
        <Input name="email" onChange={handleFormData} type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <InputGroup mt={4} size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            onChange={handleFormData}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button onClick={signup} colorScheme="purple" w="100%" mt={5}>
          Submit
        </Button>
      </FormControl>
    </Flex>
  );
}
