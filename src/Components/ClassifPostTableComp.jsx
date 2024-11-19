import { Table } from "flowbite-react";
import { useData } from "../context/DataContext";

const CollactionD = () => {
  const { data } = useData();
  const { rowsRight } = data;

  // Fungsi untuk menentukan klasifikasi berdasarkan score
  const getClassification = (score) => {
    if (score >= 91 && score <= 100) return "Very Good";
    if (score >= 74 && score <= 90) return "Good";
    if (score >= 61 && score <= 74) return "Fair";
    if (score >= 51 && score <= 60) return "Less";
    if (score < 51) return "Poor";
    return "-"; // Jika ada nilai yang tidak valid
  };

  const rowsCombined = rowsRight.map((row, index) => {
    const postTestScore = rowsRight[index]?.score || 0;
    return {
      id: row.id,
      sample: row.sample,
      postTest: parseInt(postTestScore),
      classification: getClassification(parseInt(postTestScore)), // Tambahkan klasifikasi
    };
  });

  // Hitung TOTAL dan AVERAGE
  const totals = rowsCombined.reduce(
    (acc, row) => {
      acc.postTest += row.postTest;
      return acc;
    },
    { postTest: 0 }
  );

  const averages = {
    postTest: (totals.postTest / rowsCombined.length).toFixed(2),
  };

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell className="text-center">No</Table.HeadCell>
          <Table.HeadCell className="text-center">Sample</Table.HeadCell>
          <Table.HeadCell className="text-center">Score</Table.HeadCell>
          <Table.HeadCell className="text-center">
            Classification
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {rowsCombined.map((row) => (
            <Table.Row key={row.id} className="bg-white dark:bg-gray-800">
              <Table.Cell className="border text-center">{row.id}</Table.Cell>
              <Table.Cell className="border text-center">
                {row.sample}
              </Table.Cell>
              <Table.Cell className="border text-center">
                {row.postTest}
              </Table.Cell>
              <Table.Cell className="border text-center">
                {row.classification}
              </Table.Cell>
            </Table.Row>
          ))}

          {/* Baris TOTAL */}
          <Table.Row className="bg-gray-100 dark:bg-gray-700 font-bold">
            <Table.Cell colSpan={2} className="border text-center">
              Score Total
            </Table.Cell>
            <Table.Cell colSpan={2} className="border text-center">
              {totals.postTest}
            </Table.Cell>
          </Table.Row>

          {/* Baris AVERAGE */}
          <Table.Row className="bg-gray-200 dark:bg-gray-800 font-bold">
            <Table.Cell colSpan={2} className="border text-center">
              Score Average
            </Table.Cell>
            <Table.Cell colSpan={2} className="border text-center">
              {averages.postTest}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CollactionD;
