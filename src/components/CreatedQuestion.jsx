import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
export default function CreatedQuestion({ question }) {
  return (
    <Box w="100%" m={{ lg: "5", base: "0" }} mt="5" overflow={"hidden"}>
      <Text fontWeight="600" fontSize={"lg"}>
        Question : {question.questionTitle} ?.
      </Text>
      <Text fontWeight="600" fontSize={"md"} mt="3">
        Answers
      </Text>
      <Flex
        marginBottom={"15"}
        mt={"3"}
        flexWrap={"wrap"}
        columnGap="3"
        rowGap={"3"}
        flexDirection={{ md: "row", base: "column" }}
      >
        {question.option.map((option, idx) => {
          return (
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              w={{ md: "45%", base: "100%" }}
              boxShadow="lg"
              p={"4"}
              color="white"
              borderRadius={"md"}
              bg={option.isCorrect ? "green.500" : "red.500"}
            >
              <Text fontSize="md" fontWeight={"600"}>
                {idx + 1} : {option.title}
              </Text>
              {option.isCorrect ? (
                <CheckCircleIcon></CheckCircleIcon>
              ) : (
                <WarningIcon></WarningIcon>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
