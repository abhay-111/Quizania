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
export default function Leaderboard() {
  return (
    <TableContainer maxH={"350px"} bg={"white"} borderRadius="2xl" p={"5"}>
      <Text ml="4" fontSize={"xl"} fontWeight="600">
        Leaderboard
      </Text>
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
          <Tr>
            <Td>Abhikant</Td>
            <Td>1</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>Abhay</Td>
            <Td>2</Td>
            <Td isNumeric>20.48</Td>
          </Tr>
          <Tr>
            <Td>Akshat</Td>
            <Td>3</Td>
            <Td isNumeric>19.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Username</Th>
            <Th>Ranking</Th>
            <Th isNumeric>Score</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
