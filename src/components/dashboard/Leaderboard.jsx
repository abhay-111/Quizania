import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import noContent from "../../assets/noContent.jpg";
export default function Leaderboard({ leaderBoard, quizName }) {
  return (
    <TableContainer h={"auto"} bg={"white"} borderRadius="2xl" p={"5"}>
      <Text ml="4" fontSize={{ lg: "xl", base: "md" }} fontWeight="600">
        Leaderboard
      </Text>
      {leaderBoard.length ? (
        <Table mt="3" variant="simple">
          <TableCaption fontSize={{ lg: "md", base: "sm" }}>
            Leaderboard for {quizName}
          </TableCaption>
          <Thead>
            <Tr>
              <Th fontSize={{ lg: "md", base: "xs" }}>Username</Th>
              <Th fontSize={{ lg: "md", base: "xs" }}>Ranking</Th>
              <Th fontSize={{ lg: "md", base: "xs" }} isNumeric>
                Score
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {leaderBoard.map((participant, i) => {
              return (
                <Tr key={i}>
                  <Td fontSize={{ lg: "md", base: "sm" }}>
                    {participant.username}
                  </Td>
                  <Td fontSize={{ lg: "md", base: "sm" }}>{i + 1}</Td>
                  <Td fontSize={{ lg: "md", base: "sm" }} isNumeric>
                    {participant.score}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          {/* <Tfoot>
          <Tr>
            <Th>Username</Th>
            <Th>Ranking</Th>
            <Th isNumeric>Score</Th>
          </Tr>
        </Tfoot> */}
        </Table>
      ) : (
        <Flex
          w={"100%"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection="column"
          gap="3"
        >
          <Image h={"250px"} width="250px" src={noContent}></Image>
          <Text ml={"5"} fontSize={{ lg: "lg", base: "sm" }} fontWeight="600">
            No Participants uptill now.
          </Text>
        </Flex>
      )}
    </TableContainer>
  );
}
