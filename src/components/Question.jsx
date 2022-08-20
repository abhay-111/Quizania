import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Option from "./Option";
import { useState } from "react";
export default function CreatedQuestion({ question, index }) {
  console.log(question);
  const [Options, setOptions] = useState(question.option);
  return (
    <Box mt="5" px={{ base: "0", lg: "20" }} overflow={"hidden"}>
      <Text fontWeight="600" fontSize={{ lg: "lg", base: "md" }}>
        Question : {question.title} ?.
      </Text>
      <Text fontWeight="600" fontSize={{ lg: "md", base: "sm" }} mt="3">
        Options
      </Text>
      <Flex
        mt={"3"}
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        columnGap="3"
        rowGap={"3"}
      >
        {question.option.map((option, idx) => {
          return (
            <Option option={option} idx={idx} questionIndex={index}></Option>
          );
        })}
      </Flex>
    </Box>
  );
}
