import React from "react";
import { Table } from "flowbite-react";

function MathEquations() {
  return (
    <div className="overflow-x-auto mb-7">
      <Table>
        <Table.Head>
          <Table.HeadCell className="text-center">No</Table.HeadCell>
          <Table.HeadCell className="text-center">Score</Table.HeadCell>
          <Table.HeadCell className="text-center">
            Classification
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:bg-gray-800">
            <Table.Cell className="py-1 border text-center">1</Table.Cell>
            <Table.Cell className="py-1 border text-center">
              91 - 100
            </Table.Cell>
            <Table.Cell className="py-1 border text-center">
              Very Good
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:bg-gray-800">
            <Table.Cell className="py-1 border text-center">2</Table.Cell>
            <Table.Cell className="py-1 border text-center">75 - 90</Table.Cell>
            <Table.Cell className="py-1 border text-center">Good</Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:bg-gray-800">
            <Table.Cell className="py-1 border text-center">3</Table.Cell>
            <Table.Cell className="py-1 border text-center">61 - 74</Table.Cell>
            <Table.Cell className="py-1 border text-center">Fair</Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:bg-gray-800">
            <Table.Cell className="py-1 border text-center">4</Table.Cell>
            <Table.Cell className="py-1 border text-center">51 - 60</Table.Cell>
            <Table.Cell className="py-1 border text-center">Less</Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:bg-gray-800">
            <Table.Cell className="py-1 border text-center">5</Table.Cell>
            <Table.Cell className="py-1 border text-center">0 - 51</Table.Cell>
            <Table.Cell className="py-1 border text-center">Poor</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default MathEquations;
