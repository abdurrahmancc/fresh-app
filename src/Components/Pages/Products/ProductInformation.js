import React from "react";
import { Table, Tbody, Td, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ProductInformation = ({ data }) => {
  const weight = data?.weight[0] ? data?.weight[0].split(",") : null;
  const isLast = weight[weight.length - 1];
  console.log(isLast);
  return (
    <div>
      <Table className="w-full">
        <Tbody className={"border"}>
          <Tr className={"border-b hover:bg-gray-100 transition duration-300 ease-in-out"}>
            <Td className="py-3 border-r pl-5 font-semibold">Stock</Td>
            <Td className="py-3 pl-5">{data?.stockStatus}</Td>
          </Tr>
          <Tr className={"border-b hover:bg-gray-100 transition duration-300 ease-in-out"}>
            <Td className="py-3 border-r pl-5 font-semibold">Colors</Td>
            <Td className="py-3 pl-5">{data?.colors}</Td>
          </Tr>
          <Tr className={"hover:bg-gray-100 transition duration-300 ease-in-out"}>
            <Td className="py-3 border-r pl-5 font-semibold">Weight</Td>
            <Td className="py-3 pl-5 flex gap-2">
              {weight.map((w) => (
                <span className={`${isLast === w ? "" : "after:content-[',']"}`}>{w}g</span>
              ))}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default ProductInformation;
