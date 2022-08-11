import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
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
export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
  };

  return (
    <Flex>
      <FormControl>
        <Divider mb={4}></Divider>
        <FormLabel mt={3}>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        {/* <Divider mt={3}></Divider> */}
        <InputGroup mt={4} size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button colorScheme="purple" w="100%" mt={5}>
          Submit
        </Button>
      </FormControl>
    </Flex>
  );
}
