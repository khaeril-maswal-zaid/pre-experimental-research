import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const PercentagePage = () => {
  const { data } = useData();
  const { rowsLeft } = data;

  // Fungsi untuk menghitung jumlah kategori
  const calculateFrequencies = () => {
    const frequencies = {
      veryGood: 0,
      good: 0,
      fair: 0,
      poor: 0,
      less: 0,
    };

    rowsLeft.forEach((row) => {
      const score = parseInt(row.score, 10);
      if (score >= 91 && score <= 100) frequencies.veryGood++;
      else if (score >= 74 && score <= 90) frequencies.good++;
      else if (score >= 61 && score <= 74) frequencies.fair++;
      else if (score >= 51 && score <= 60) frequencies.less++;
      else if (score < 51) frequencies.poor++;
    });

    return frequencies;
  };

  const frequencies = calculateFrequencies();
  const totalSamples = rowsLeft.length;

  // Fungsi untuk menghitung persentase
  const calculatePercentage = (frequency) =>
    ((frequency / totalSamples) * 100).toFixed(2);

  // Format MathJax
  const createFormula = (F, N) => `
      P = frac{${F}}{${N}} 
      = ${(F / N).toFixed(2)}
      = ${calculatePercentage(F)}%
  `;

  return (
    <MathJaxContext>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Percentage Results
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Very Good */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Very Good</h2>
            <MathJax>{`[ ${createFormula(
              frequencies.veryGood,
              totalSamples
            )}]`}</MathJax>
          </div>
          {/* Good */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Good</h2>
            <MathJax>{`\\[ ${createFormula(
              frequencies.good,
              totalSamples
            )} \\]`}</MathJax>
          </div>
          {/* Fair */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Fair</h2>
            <MathJax>{`\\[ ${createFormula(
              frequencies.fair,
              totalSamples
            )} \\]`}</MathJax>
          </div>
          {/* Poor */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Poor</h2>
            <MathJax>{`\\[ ${createFormula(
              frequencies.poor,
              totalSamples
            )} \\]`}</MathJax>
          </div>
          {/* Less */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Less</h2>
            <MathJax>{`\\[ ${createFormula(
              frequencies.less,
              totalSamples
            )} \\]`}</MathJax>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default PercentagePage;
