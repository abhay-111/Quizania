import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
export default function UserPill({ user, icon }) {
  return (
    <Box w={"33%"} px="8" bg="white" borderRadius={"3xl"} h="90px">
      <Flex h={"100%"} gap="4" alignItems={"center"}>
        <Box bg={"#E6DBFF"} p="5" borderRadius="full">
          {user.icon}
          {/* <LockIcon color={"#9a419a"} fontSize={"2xl"}></LockIcon> */}
        </Box>
        <Box>
          <Text fontSize={"xs"} fontWeight="500">
            {user.pillTitle}
          </Text>
          <Text fontSize={"xl"} fontWeight="600">
            {user.pillValue}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
