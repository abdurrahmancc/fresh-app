import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Tables = () => {
  const data = [
    {
      id: "1",
      img: "fsfs",
      number: "123",
      name: "abduer",
    },
    {
      id: "2",
      img: "fsfs",
      number: "123",
      name: "abduer",
    },
    {
      id: "3",
      img: "fsfs",
      number: "123",
      name: "abduer",
    },
    {
      id: "4",
      img: "fsfs",
      number: "123",
      name: "abduer",
    },
    {
      id: "5",
      img: "fsfs",
      number: "123",
      name: "abduer",
    },
  ];
  return (
    <div className="max-w-lg mx-auto">
      <Table>
        <Thead>
          <Tr className=" bg-slate-400">
            <Th className={"py-3"}>id</Th>
            <Th>img</Th>
            <Th>number</Th>
            <Th>name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((d) => (
            <Tr key={d.id}>
              <Td>{d.id}</Td>
              <Td>{d.img}</Td>
              <Td>{d.number}</Td>
              <Td>{d.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Tables;
