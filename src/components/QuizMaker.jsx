import {
  Box,
  Input,
  FormLabel,
  Button,
  VStack,
  Text,
  useToast,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import CreatedQuestion from "./CreatedQuestion";
import CreateQuestion from "./CreateQuestion";
import { createUserQuiz } from "../reducers/quizReducers";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function QuizMaker() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [QuizId, setQuizId] = useState("");
  const [quizCreated, setquizCreated] = useState(false);
  const [QuestionList, setQuestionList] = useState([]);
  const [AddQuestion, setAddQuestion] = useState(true);
  const [QuizName, setQuizName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quizUrl, setquizUrl] = useState("https://quizania.vercel.app/");
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
      userId: Cookies.get("userId"),
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
      w={{ lg: "90%", base: "100%" }}
      bg="white"
      p={6}
      mt={{ base: "50px", lg: "5px" }}
      borderRadius={"xl"}
      position="relative"
      zIndex={"1"}
    >
      <Modal w={"30vw"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Quiz Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link
              fontSize={"sm"}
              target="_blank"
              href={quizUrl + "quiz/" + QuizId}
            >
              {quizUrl + "quiz/" + QuizId}
            </Link>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack align={"start"} spacing="15px" mb={"5"}>
        <FormLabel>Enter your Quiz Name</FormLabel>
        <Input
          disabled={quizCreated}
          onChange={(e) => setQuizName(e.target.value)}
          w={{ base: "100%", lg: "60%" }}
        ></Input>
        <HStack>
          <Button
            disabled={quizCreated}
            onClick={createQuiz}
            colorScheme="purple"
            fontSize={{ base: "xs", lg: "sm" }}
            color={"white"}
          >
            Create Quiz
          </Button>
          <Button
            disabled={QuestionList.length == 0}
            colorScheme="green"
            onClick={onOpen}
            fontSize={{ base: "xs", lg: "sm" }}
          >
            Publish
          </Button>
        </HStack>
        {quizCreated ? (
          <Box w={"100%"}>
            {QuestionList.map((question, idx) => {
              return (
                <CreatedQuestion
                  key={idx}
                  question={question.Question}
                ></CreatedQuestion>
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
          fontSize={{ base: "xs", lg: "lg" }}
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
