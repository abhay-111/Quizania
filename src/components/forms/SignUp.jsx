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
export default function SignUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [formData, setFomData] = useState({
    fullName: "",
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
        <FormLabel>Full Name</FormLabel>
        <Input name="fullName" onChange={handleFormData} type="text" />
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

        <Button colorScheme="purple" w="100%" mt={5}>
          Submit
        </Button>
      </FormControl>
    </Flex>
  );
}
