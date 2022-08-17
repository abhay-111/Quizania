import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
export default function UserPill({ user, icon }) {
  return (
    <Box
      w={{ lg: "30%", base: "45%" }}
      px={{ lg: "8", base: "2" }}
      bg="white"
      borderRadius={{ base: "xl", lg: "3xl" }}
      h="90px"
    >
      <Flex
        h={"100%"}
        gap={{ sm: "4", base: "1" }}
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={"center"}
      >
        <Box
          bg={{ lg: "#E6DBFF" }}
          p={{ lg: "5", base: "2" }}
          borderRadius="full"
          overflow={"hidden"}
        >
          {user.icon}
          {/* <LockIcon color={"#9a419a"} fontSize={"2xl"}></LockIcon> */}
        </Box>
        <Box>
          <Text fontSize={"xs"} fontWeight="500">
            {user.pillTitle}
          </Text>
          <Text fontSize={{ base: "sm", lg: "xl" }} fontWeight="600">
            {user.pillValue}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
