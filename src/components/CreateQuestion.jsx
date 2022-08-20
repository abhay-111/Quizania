import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Input,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/react";
import { createUserQuestion } from "../reducers/quizReducers";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { unwrapResult } from "@reduxjs/toolkit";
export default function CreateQuestion({
  setQuestionList,
  QuestionList,
  setAddQuestion,
  QuizId,
}) {
  const dispatch = useDispatch();
  const toast = useToast();
  const [Question, setQuestion] = useState({
    questionTitle: "",
    option: [
      {
        title: "",
        isCorrect: false,
      },
      {
        title: "",
        isCorrect: false,
      },
      {
        title: "",
        isCorrect: false,
      },
      {
        title: "",
        isCorrect: false,
      },
    ],
  });
  const changeOptionTitle = (e, idx) => {
    const newOptions = [...Question.option];
    newOptions.forEach((option, i) => {
      if (i == idx) {
        option.title = e.target.value;
      }
    });
    setQuestion({
      ...Question,
      option: newOptions,
    });
    console.log(Question);
  };
  const changeOptionStatus = (e, idx) => {
    console.log(e.checked);
    const newOptions = [...Question.option];
    newOptions.forEach((option, i) => {
      if (i == idx) {
        option.isCorrect = !option.isCorrect;
      }
    });
    setQuestion({
      ...Question,
      option: newOptions,
    });
    console.log(Question);
  };
  const changeQuestionTitle = (e) => {
    setQuestion({
      ...Question,
      questionTitle: e.target.value,
    });
    console.log(Question);
  };
  const addQuestion = () => {
    if (Question.questionTitle === "") {
      toast({
        title: "Question Title is empty.",
        description: "Question Title is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    let isCorrectCount = 0;
    var hasError = false;
    Question.option.forEach((option) => {
      if (option.isCorrect) {
        isCorrectCount++;
      }
      if (option.title === "") {
        toast({
          title: "Option Title is empty.",
          description: "Option Title is required.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log("afa");
        hasError = true;
      }
    });
    if (hasError) {
      return;
    }
    if (isCorrectCount > 1) {
      toast({
        title: "Question has more than one correct answer.",
        description: "Question should have 1 correct answer.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (isCorrectCount == 0) {
      toast({
        title: "Question has no correct answer.",
        description: "Question should have 1 correct answer.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    //add question
    const payload = Question;
    payload["quizId"] = QuizId;
    dispatch(createUserQuestion(payload))
      .then(unwrapResult)
      .then((res) => {
        console.log(res);
      });
    //set question
    setQuestionList([...QuestionList, { Question }]);
    setAddQuestion(false);
  };
  return (
    <Box w="100%">
      <Divider></Divider>
      <Flex
        mt="5"
        px={"5"}
        borderRight={"3px solid purple"}
        direction={"column"}
        gap="8"
      >
        <Box>
          <FormLabel fontSize={{ base: "sm", lg: "md" }}>
            Enter your question title
          </FormLabel>
          <Input
            w={{ lg: "60%", base: "100%" }}
            onChange={changeQuestionTitle}
          ></Input>
        </Box>
        <Flex
          w={{ lg: "80%", base: "100%" }}
          wrap="wrap"
          columnGap={"5"}
          rowGap="5"
        >
          {Question.option.map((option, idx) => {
            return (
              <Box width={{ lg: "45%", base: "100%" }}>
                <FormLabel fontSize={{ base: "sm", lg: "md" }}>
                  Enter your option {idx + 1}
                </FormLabel>
                <Input
                  onChange={(event) => changeOptionTitle(event, idx)}
                ></Input>
                <Checkbox
                  mt="3"
                  onChange={(event) => changeOptionStatus(event, idx)}
                >
                  <Text fontSize={{ base: "sm", lg: "md" }}>
                    Correct Answer
                  </Text>
                </Checkbox>
              </Box>
            );
          })}
        </Flex>
        <Button
          onClick={addQuestion}
          colorScheme="purple"
          w={"100%"}
          color={"white"}
        >
          Create Question
        </Button>
      </Flex>
    </Box>
  );
}
