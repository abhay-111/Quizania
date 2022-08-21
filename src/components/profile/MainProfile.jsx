import { Box, Flex, Text, Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Leaderboard from "../dashboard/Leaderboard";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuiz } from "../../reducers/profileReducers";
import Cookies from "js-cookie";
export default function MainProfile() {
  const dispatch = useDispatch();
  const [selectedIndex, setselectedIndex] = useState(0);
  const quizzes = useSelector((state) => state.profile.allQuiz);

  return (
    <Box
      w={"100%"}
      p={{ lg: "5", base: "0" }}
      mt={{ lg: "0", base: "50px" }}
      h={"100%"}
    >
      <Flex
        w={"100%"}
        p="5"
        justifyContent={"flex-start"}
        alignItems="center"
        minH={"50vh"}
        bg="white"
        borderRadius={"xl"}
        flexDirection="column"
        gap={"5"}
      >
        {quizzes.length ? (
          <Box w={"100%"}>
            <Select onChange={(e) => setselectedIndex(e.target.value)}>
              {quizzes.map((quiz, i) => {
                return (
                  <option selected={i == 0 ? true : false} value={i} key={i}>
                    {quiz.title}
                  </option>
                );
              })}
            </Select>
            <Leaderboard
              leaderBoard={quizzes[selectedIndex].leaderBoard}
              quizName={quizzes[selectedIndex].title}
            ></Leaderboard>
          </Box>
        ) : (
          <Box>
            <Text>No Qizzes Available.</Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
