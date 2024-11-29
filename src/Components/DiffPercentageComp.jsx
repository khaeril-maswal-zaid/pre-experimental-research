import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const DiffPercentageComp = () => {
  const { data } = useData() || { rowsLeft: [], rowsRight: [] };
  const validRowsLeft = Array.isArray(data.rowsLeft) ? data.rowsLeft : [];
  const validRowsRight = Array.isArray(data.rowsRight) ? data.rowsRight : [];
  const totalSamples = validRowsLeft.length;

  const totalScore = validRowsLeft.reduce(
    (sum, row) => sum + (parseInt(row.score, 10) || 0),
    0
  );
  const totalScorePost = validRowsRight.reduce(
    (sum, row) => sum + (parseInt(row.score, 10) || 0),
    0
  );

  const meanPreTest = totalSamples > 0 ? totalScore / totalSamples : 0;
  const meanPostTest = totalSamples > 0 ? totalScorePost / totalSamples : 0;

  const percentageChange =
    meanPreTest !== 0
      ? (((meanPostTest - meanPreTest) / meanPreTest) * 100).toFixed(2)
      : "0.00";

  return (
    <MathJaxContext>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">
          Calculating the Diffrent of Percentage
        </h1>

        <div className="border p-4 mx-auto rounded-lg shadow bg-slate-50 w-64">
          <MathJax className="px-4">
            {`\\[
              \\text{P} = \\frac{(\\bar{X_2} - \\bar{X_1})}{\\bar{X_1}} \\times 100
            \\]`}
          </MathJax>
          <MathJax className="px-4">
            {`\\[
              \\text{P} = \\frac{(${meanPostTest.toFixed(
                2
              )} - ${meanPreTest.toFixed(2)})}{${meanPreTest.toFixed(
              2
            )}} \\times 100
            \\]`}
          </MathJax>
          <MathJax className="px-4 mb-7">
            {`\\[
              \\text{P} = \\frac{${(meanPostTest - meanPreTest).toFixed(
                2
              )}}{${meanPreTest.toFixed(2)}} \\times 100
            \\]`}
          </MathJax>
          <MathJax className="px-4">
            {`\\[
              \\text{P} = ${percentageChange}\\%
            \\]`}
          </MathJax>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default DiffPercentageComp;
