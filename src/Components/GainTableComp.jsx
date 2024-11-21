"use client";

import { Table } from "flowbite-react";
import { useData } from "../context/DataContext";

const CollactionD = () => {
  const { data } = useData();
  const { rowsLeft, rowsRight } = data;

  const rowsCombined = rowsLeft.map((row, index) => {
    const postTestScore = rowsRight[index]?.score || 0;
    const preTestScore = row.score || 0;
    const diff = postTestScore - preTestScore;
    return {
      id: row.id,
      sample: row.sample,
      preTest: parseInt(preTestScore),
      postTest: parseInt(postTestScore),
      D: diff,
      D2: diff ** 2,
    };
  });

  // Hitung TOTAL dan AVERAGE
  const totals = rowsCombined.reduce(
    (acc, row) => {
      acc.preTest += row.preTest;
      acc.postTest += row.postTest;
      acc.D += row.D;
      acc.D2 += row.D2;
      return acc;
    },
    { preTest: 0, postTest: 0, D: 0, D2: 0 }
  );

  const averages = {
    preTest: (totals.preTest / rowsCombined.length).toFixed(2),
    postTest: (totals.postTest / rowsCombined.length).toFixed(2),
    D: (totals.D / rowsCombined.length).toFixed(2),
    D2: (totals.D2 / rowsCombined.length).toFixed(2),
  };

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Sample</Table.HeadCell>
          <Table.HeadCell>
            Score of Pre Test (X<sub>1</sub>)
          </Table.HeadCell>
          <Table.HeadCell>
            Score of Post Test (X<sub>2</sub>)
          </Table.HeadCell>
          <Table.HeadCell>
            D = (X<sub>2</sub> - X<sub>1</sub>)
          </Table.HeadCell>
          <Table.HeadCell>
            D<sup>2</sup> = (X<sub>2</sub> - X<sub>1</sub>)<sup>2</sup>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {rowsCombined.map((row) => (
            <Table.Row key={row.id} className="bg-white dark:bg-gray-800">
              <Table.Cell className="py-1 border text-center">
                {row.id}
              </Table.Cell>
              <Table.Cell className="py-1 border text-center">
                {row.sample}
              </Table.Cell>
              <Table.Cell className="py-1 border text-center">
                {row.preTest}
              </Table.Cell>
              <Table.Cell className="py-1 border text-center">
                {row.postTest}
              </Table.Cell>
              <Table.Cell className="py-1 border text-center">
                {row.D}
              </Table.Cell>
              <Table.Cell className="py-1 border text-center">
                {row.D2}
              </Table.Cell>
            </Table.Row>
          ))}

          {/* Baris TOTAL */}
          <Table.Row className="bg-gray-100 dark:bg-gray-700 font-bold">
            <Table.Cell className="border py-2 text-center" colSpan={2}>
              Total
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {totals.preTest}
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {totals.postTest}
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {totals.D}
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {totals.D2}
            </Table.Cell>
          </Table.Row>

          {/* Baris AVERAGE */}
          <Table.Row className="bg-gray-200 dark:bg-gray-800 font-bold">
            <Table.Cell className="border py-2 text-center" colSpan={2}>
              Average
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {averages.preTest}
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {averages.postTest}
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {averages.D}
            </Table.Cell>
            <Table.Cell className="border py-2 text-center">
              {averages.D2}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CollactionD;
