import { Box, Flex, Text, Button, Input, FormLabel } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getQuizData } from "../reducers/quizReducers";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Question from "./Question";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { submitUserQuiz } from "../reducers/quizReducers";
export default function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const toast = useToast();
  const [Quiz, setQuiz] = useState({});
  const [Loading, setLoading] = useState(true);
  const [participantData, setparticipantData] = useState({
    name: "",
    email: "",
  });
  const quiz = useSelector((state) => state.quiz.currentQuiz);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const payload = {
      quizId: id,
    };
    dispatch(getQuizData(payload)).then(() => {
      // setLoading(false);
    });
  }, []);
  const calculateScore = () => {
    let count = 0;
    quiz.questions.forEach((q) => {
      q.option.forEach((option) => {
        if (option.isSelected && option.isCorrect) {
          count++;
        }
      });
    });
    return count;
  };
  const submitQuiz = () => {
    let score = calculateScore();
    const payload = {
      score: score,
      username: participantData.name,
      quizId: id,
    };
    dispatch(submitUserQuiz(payload)).then((res) => {
      navigate("/");
    });
  };
  const handleChange = (e) => {
    setparticipantData({
      ...participantData,
      [e.target.name]: e.target.value,
    });
    console.log(participantData);
  };
  const startQuiz = () => {
    if (participantData.name == "" || participantData.email == "") {
      toast({
        title: "Cannot start quiz",
        description: "Enter Email and name first",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLoading(false);
  };

  return (
    <Box p={{ base: "5", lg: "20" }} w={"100%"}>
      {!Loading ? (
        <Box borderRadius="lg" bg={"white"} p={"5"}>
          <Text fontSize={"2xl"} fontWeight="xl" align={"center"}></Text>
          <Flex direction="column" alignItems="center">
            {quiz.questions ? (
              <Box w={"100%"}>
                {quiz.questions.map((question, index) => {
                  return (
                    <Question index={index} question={question}></Question>
                  );
                })}
              </Box>
            ) : (
              ""
            )}
            <Button
              onClick={submitQuiz}
              align="center"
              colorScheme="green"
              w={"90%"}
            >
              Submit Quiz
            </Button>
          </Flex>
        </Box>
      ) : (
        <Modal isOpen={Loading}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Details for {quiz.quizName}.</ModalHeader>
            <ModalBody>
              <FormLabel>Enter Your Name</FormLabel>
              <Input onChange={handleChange} name="name"></Input>
              <FormLabel>Enter Your Email</FormLabel>
              <Input name="email" onChange={handleChange}></Input>
            </ModalBody>

            <ModalFooter>
              <Button onClick={startQuiz} colorScheme="purple" variant="ghost">
                Start Quiz
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
