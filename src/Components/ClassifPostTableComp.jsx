"use client";

import { Table } from "flowbite-react";
import { useData } from "../context/DataContext";

const ClassificationTable = () => {
  const { data } = useData();
  const { rowsRight } = data;

  const classifyScore = (score) => {
    if (score >= 91 && score <= 100) return "Very Good";
    if (score >= 74 && score <= 90) return "Good";
    if (score >= 61 && score <= 74) return "Fair";
    if (score >= 51 && score <= 60) return "Less";
    if (score < 51) return "Poor";
    return "-";
  };

  const processedRows = rowsRight.map((row, index) => {
    const preTestScore = row.score !== undefined ? row.score : 0;
    return {
      id: row.id || index + 1, // Gunakan index jika id tidak tersedia
      sample: row.sample || "N/A", // Default jika sample kosong
      preTest: parseInt(preTestScore, 10),
      classification: classifyScore(parseInt(preTestScore, 10)),
    };
  });

  const { totalPreTest, averagePreTest } = processedRows.reduce(
    (acc, row, _, { length }) => {
      acc.totalPreTest += row.preTest;
      if (length) acc.averagePreTest = (acc.totalPreTest / length).toFixed(2);
      return acc;
    },
    { totalPreTest: 0, averagePreTest: 0 }
  );

  return (
    <div className="overflow-x-auto mb-7">
      <Table striped className="">
        <Table.Head>
          <Table.HeadCell className="text-center">No</Table.HeadCell>
          <Table.HeadCell className="text-center">Sample</Table.HeadCell>
          <Table.HeadCell className="text-center">Score</Table.HeadCell>
          <Table.HeadCell className="text-center">
            Classification
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {processedRows.map((row) => (
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
                {row.classification}
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row className="bg-gray-100 dark:bg-gray-700 font-bold">
            <Table.Cell colSpan={2} className="py-2 border text-center">
              Score Total
            </Table.Cell>
            <Table.Cell colSpan={2} className="py-2 border text-center">
              {totalPreTest}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200 dark:bg-gray-800 font-bold">
            <Table.Cell colSpan={2} className="py-2 border text-center">
              Score Average
            </Table.Cell>
            <Table.Cell colSpan={2} className="py-2 border text-center">
              {averagePreTest}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default ClassificationTable;
