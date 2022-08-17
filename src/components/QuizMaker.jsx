import {
  Box,
  Input,
  FormLabel,
  Button,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import CreatedQuestion from "./CreatedQuestion";
import CreateQuestion from "./CreateQuestion";
import { createUserQuiz } from "../reducers/quizReducers";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
export default function QuizMaker() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [QuizId, setQuizId] = useState("");
  const [quizCreated, setquizCreated] = useState(false);
  const [QuestionList, setQuestionList] = useState([]);
  const [AddQuestion, setAddQuestion] = useState(true);
  const [QuizName, setQuizName] = useState("");
  const createQuiz = () => {
    if (QuizName === "") {
      toast({
        title: "Please enter a Quiz name.",
        description: "Quiz name is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const payload = {
      title: QuizName,
      userId: Cookies.get("userToken"),
    };
    dispatch(createUserQuiz(payload))
      .then(unwrapResult)
      .then((res) => {
        setQuizId(res.data.quizId);
        setquizCreated(true);
        setAddQuestion(false);
      });
  };
  return (
    <Box
      mt={"4"}
      w={{ lg: "90%", base: "100%" }}
      bg="white"
      p={6}
      borderRadius={"xl"}
    >
      <VStack align={"start"} spacing="15px" mb={"5"}>
        <FormLabel>Enter your Quiz Name</FormLabel>
        <Input
          disabled={quizCreated}
          onChange={(e) => setQuizName(e.target.value)}
          w={{ base: "100%", lg: "60%" }}
        ></Input>
        <Button onClick={createQuiz} colorScheme="purple" color={"white"}>
          Create Quiz
        </Button>
        {quizCreated ? (
          <Box w={"100%"}>
            {QuestionList.map((question) => {
              return (
                <CreatedQuestion question={question.Question}></CreatedQuestion>
              );
            })}
            {AddQuestion ? (
              <CreateQuestion
                QuizId={QuizId}
                setQuestionList={setQuestionList}
                setAddQuestion={setAddQuestion}
                QuestionList={QuestionList}
              ></CreateQuestion>
            ) : (
              ""
            )}
          </Box>
        ) : (
          ""
        )}
      </VStack>
      {!AddQuestion ? (
        <Button
          onClick={() => setAddQuestion(true)}
          colorScheme="purple"
          color={"white"}
          w="100%"
        >
          Add Question
        </Button>
      ) : (
        ""
      )}
    </Box>
  );
}
