import React, { useState } from "react";
("use client");

import { useNavigate, Link } from "react-router-dom";
import NavbarComp from "../Components/NavbarComp";

import { useData } from "../context/DataContext"; // Import Context

const Home = () => {
  const { setData } = useData(); // Akses Context

  const [numRows, setNumRows] = useState(0);
  const [rowsLeft, setRowsLeft] = useState([]);
  const [rowsRight, setRowsRight] = useState([]);

  //Menentukan jumlah baris sample
  const handleGetStarted = () => {
    const rowsCount = parseInt(document.getElementById("rowInput").value, 10);
    if (rowsCount > 50) {
      alert("Max 50 rows");
      return false;
    }

    if (!isNaN(rowsCount) && rowsCount > 0) {
      setNumRows(rowsCount);
      const newRowsLeft = Array.from({ length: rowsCount }, (_, index) => ({
        id: index + 1,
        sample: `Sample ${index + 1}`,
        score: "",
      }));
      const newRowsRight = Array.from({ length: rowsCount }, (_, index) => ({
        id: index + 1,
        sample: `Sample ${index + 1}`,
        score: "",
      }));
      setRowsLeft(newRowsLeft);
      setRowsRight(newRowsRight);

      // Simpan ke Context
      setData({ rowsLeft: newRowsLeft, rowsRight: newRowsRight });
    }
  };

  //Supaya bisa pasti dari table (excel)
  const handlePaste = (e, table, setTable) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    const rows = pasteData.split("\n").filter((row) => row);

    const newTable = [...table];
    rows.forEach((row, index) => {
      const score = row.split("\t")[0]; // Ambil kolom pertama dari tiap baris
      if (index < newTable.length) {
        newTable[index].score = score;
      }
    });

    setTable(newTable);
  };

  //
  const navigate = useNavigate();

  return (
    <main className="App">
      <NavbarComp />

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Data Collaction Pre Experimental
            </span>
            &nbsp;Research
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            eligendi saepe dolor excepturi harum molestias! Dolorum repudiandae
            officiis vero laboriosam neque maxime ex labore doloremque
            laudantium veniam, suscipit delectus quo.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <input
              id="rowInput"
              type="number"
              placeholder="Rows"
              className="bg-gray-50 border max-w-16 mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={handleGetStarted}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="relative container mx-auto overflow-x-auto shadow-md mb-9 sm:rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          {/* Tabel Kiri */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-y dark:border-gray-700">
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Samples
                </th>
                <th scope="col" className="px-6 py-3">
                  Score Pre-Test
                </th>
              </tr>
            </thead>
            <tbody>
              {rowsLeft.map((row, index) => (
                <tr
                  key={row.id}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <th scope="row" className="px-6 py-0">
                    {row.id}
                  </th>
                  <td className="px-6 py-0">{row.sample}</td>
                  <td className="px-6 py-0">
                    <input
                      type="text"
                      value={row.score}
                      onChange={(e) => {
                        const newRows = [...rowsLeft];
                        newRows[index].score = e.target.value;
                        setRowsLeft(newRows);
                      }}
                      onPaste={(e) => handlePaste(e, rowsLeft, setRowsLeft)}
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabel Kanan */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-y dark:border-gray-700">
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Samples
                </th>
                <th scope="col" className="px-6 py-3">
                  Score of Post Test
                </th>
              </tr>
            </thead>
            <tbody>
              {rowsRight.map((row, index) => (
                <tr
                  key={row.id}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <th scope="row" className="px-6 py-0">
                    {row.id}
                  </th>
                  <td className="px-6 py-0">{row.sample}</td>
                  <td className="px-6 py-0">
                    <input
                      type="text"
                      value={row.score}
                      onChange={(e) => {
                        const newRows = [...rowsRight];
                        newRows[index].score = e.target.value;
                        setRowsRight(newRows);
                      }}
                      onPaste={(e) => handlePaste(e, rowsRight, setRowsRight)}
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="container mx-auto mb-9 flex justify-center items-center">
        <Link
          to="/data-analysis"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 hover:ring-2 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Data Analysis
        </Link>
      </div>
    </main>
  );
};

export default Home;
