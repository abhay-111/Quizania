import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
export default function CreatedQuestion({ question }) {
  return (
    <Box w="100%" m={"5"} mt="5" overflow={"hidden"}>
      <Text fontWeight="600" fontSize={"lg"}>
        Question : {question.questionTitle} ?.
      </Text>
      <Text fontWeight="600" fontSize={"md"} mt="3">
        Answers
      </Text>
      <Flex mt={"3"} flexWrap={"wrap"} columnGap="3" rowGap={"3"}>
        {question.option.map((option, idx) => {
          return (
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              w={"45%"}
              boxShadow="lg"
              p={"4"}
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
