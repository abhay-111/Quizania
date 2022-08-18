import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getQuizData } from "../reducers/quizReducers";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const payload = {
      quizId: id,
    };
    dispatch(getQuizData(payload))
      .then(unwrapResult)
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <Box p="10" bg={"#E8DEFF"} w={"100%"}>
      <Flex justifyContent={"center"}>
        <Box bg={"white"} borderRadius="lg">
          <Text>Abhay</Text>
        </Box>
      </Flex>
    </Box>
  );
}
