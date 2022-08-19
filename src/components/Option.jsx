import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { changeSelectedOption } from "../reducers/quizReducers";
import { useDispatch } from "react-redux/es/exports";
export default function Option({ option, questionIndex, idx }) {
  const dispatch = useDispatch();
  const [isSelected, setisSelected] = useState(false);
  const changeSelection = () => {
    const payload = {
      questionIndex,
      idx,
    };
    console.log(payload);
    dispatch(changeSelectedOption(payload));
  };
  return (
    <Flex
      key={idx}
      onClick={changeSelection}
      alignItems={"center"}
      justifyContent="space-between"
      w={{ base: "45%", lg: "49%" }}
      boxShadow="lg"
      borderRadius={"md"}
      p={"4"}
      bg={option.isSelected ? "orange.300" : "purple.600"}
      color={"white"}
      cursor="pointer"
    >
      <Text fontSize={{ base: "xs", lg: "md" }} fontWeight={"600"}>
        {idx + 1} : {option.answerTitle}
      </Text>
    </Flex>
  );
}
