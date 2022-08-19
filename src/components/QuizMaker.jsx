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

  const generateLink = () => {
    onOpen();
    console.log(QuizId);
    setquizUrl((prevState) => {
      return prevState + "quiz/" + QuizId;
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
    >
      <Modal w={"30vw"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Quiz Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link fontSize={"sm"} href={quizUrl}>
              {quizUrl}
            </Link>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        disabled={QuestionList.length == 0}
        position={"absolute"}
        right="10"
        top="5"
        size={"sm"}
        colorScheme="purple"
        onClick={generateLink}
      >
        Publish
      </Button>
      <VStack align={"start"} spacing="15px" mb={"5"}>
        <FormLabel>Enter your Quiz Name</FormLabel>
        <Input
          disabled={quizCreated}
          onChange={(e) => setQuizName(e.target.value)}
          w={{ base: "100%", lg: "60%" }}
        ></Input>
        <Button
          onClick={createQuiz}
          colorScheme="purple"
          fontSize={{ base: "xs", lg: "lg" }}
          color={"white"}
        >
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
