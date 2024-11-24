import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const StandardDeviation = () => {
  const { data } = useData() || { rowsLeft: [], rowsRight: [] };
  const validRowsLeft = Array.isArray(data.rowsLeft) ? data.rowsLeft : [];
  const validRowsRight = Array.isArray(data.rowsRight) ? data.rowsRight : [];
  const totalSamples = validRowsLeft.length;

  const totalScorePre = validRowsLeft.reduce(
    (sum, row) => sum + (parseInt(row.score, 10) || 0),
    0
  );
  const totalScorePost = validRowsRight.reduce(
    (sum, row) => sum + (parseInt(row.score, 10) || 0),
    0
  );
  const meanGain = (
    totalSamples > 0 ? (totalScorePost - totalScorePre) / totalSamples : 0
  ).toFixed(2);

  // --------------------------------------------------------------
  const rowsCombined = validRowsLeft.map((row, index) => {
    const postTestScore = validRowsRight[index]?.score || 0;
    const preTestScore = row.score || 0;
    const diff = postTestScore - preTestScore;
    return {
      D: diff,
      D2: diff ** 2,
    };
  });

  // Hitung TOTAL dan AVERAGE
  const totals = rowsCombined.reduce(
    (acc, row) => {
      acc.D += row.D;
      acc.D2 += row.D2;
      return acc;
    },
    { preTest: 0, postTest: 0, D: 0, D2: 0 }
  );

  return (
    <MathJaxContext>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">
          Calculating the Value of T-Test
        </h1>
        <div className="border p-4 rounded-lg shadow bg-slate-50 w-64 mx-auto">
          <MathJax className="pl-8">
            {`\\[
              t = \\frac{\\bar{D}}{
              \\sqrt{
              \\frac{\\sum D^2  - \\frac{(\\sum D)^2}{N}}{N(N-1)}
              }}
            \\]`}
          </MathJax>
          <MathJax className="pl-8">
            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              \\sqrt{
              \\frac{` +
              totals.D2 +
              `  - \\frac{(` +
              totals.D +
              `)^2}{` +
              totalSamples +
              `}}{` +
              totalSamples +
              `(` +
              totalSamples +
              `-1)}
              }}
            \\]`}
            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              \\sqrt{
              \\frac{` +
              totals.D2 +
              `  - \\frac{` +
              totals.D ** 2 +
              `}{` +
              totalSamples +
              `}}{` +
              totalSamples +
              `(` +
              totalSamples +
              `-1)}
              }}
            \\]`}
            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              \\sqrt{
              \\frac{` +
              totals.D2 +
              `  - ` +
              (totals.D ** 2 / totalSamples).toFixed(2) +
              `}{` +
              totalSamples +
              `(` +
              totalSamples +
              `-1)}
              }}
            \\]`}
            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              \\sqrt{
              \\frac{` +
              (totals.D2 - totals.D ** 2 / totalSamples).toFixed(2) +
              `}{` +
              totalSamples +
              `` +
              (totalSamples - 1) +
              `}
              }}
            \\]`}
            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              \\sqrt{
              \\frac{` +
              (totals.D2 - totals.D ** 2 / totalSamples).toFixed(2) +
              `}{` +
              totalSamples * (totalSamples - 1) +
              `}
              }}
            \\]`}
            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              \\sqrt{
              ` +
              (
                (totals.D2 - totals.D ** 2 / totalSamples) /
                (totalSamples * (totalSamples - 1))
              ).toFixed(2) +
              `
              }}
            \\]`}

            {`\\[
              t = \\frac{` +
              meanGain +
              `}{
              
              ` +
              Math.sqrt(
                (totals.D2 - totals.D ** 2 / totalSamples) /
                  (totalSamples * (totalSamples - 1))
              ).toFixed(2) +
              `
              }
            \\]`}

            {`\\[
              t = ` +
              (
                meanGain /
                Math.sqrt(
                  (totals.D2 - totals.D ** 2 / totalSamples) /
                    (totalSamples * (totalSamples - 1))
                )
              ).toFixed(2) +
              `
            \\]`}
          </MathJax>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default StandardDeviation;
