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
} from "@chakra-ui/react";
export default function Leaderboard({ leaderBoard }) {
  return (
    <TableContainer h={"auto"} bg={"white"} borderRadius="2xl" p={"5"}>
      <Text ml="4" fontSize={"xl"} fontWeight="600">
        Leaderboard
      </Text>
      {leaderBoard.length ? (
        <Table mt="3" variant="simple">
          <TableCaption>Leaderboard for Maths Quiz</TableCaption>
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Ranking</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leaderBoard.map((participant, i) => {
              return (
                <Tr>
                  <Td>{participant.username}</Td>
                  <Td>{i + 1}</Td>
                  <Td isNumeric>{participant.score}</Td>
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
        <Text ml={"5"} fontSize={{ lg: "lg", base: "sm" }} fontWeight="600">
          No Participants uptill now.
        </Text>
      )}
    </TableContainer>
  );
}
