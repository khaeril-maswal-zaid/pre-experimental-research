import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const calculateTotal = (rows) =>
  rows.reduce((sum, row) => sum + (parseInt(row.score, 10) || 0), 0);
const calculateTotalSquares = (rows) =>
  rows.reduce((sum, row) => sum + Math.pow(parseInt(row.score, 10) || 0, 2), 0);

const StdDeviationMathJax = ({
  title,
  totalSamples,
  X,
  totalScore,
  totalPangkat,
}) => {
  const intermediate = totalPangkat - Math.pow(totalScore, 2) / totalSamples;
  const variance = intermediate / (totalSamples - 1);
  const stdDeviation = Math.sqrt(variance);

  return (
    <div className="border p-4 rounded-lg mx-auto shadow bg-slate-50 w-72">
      <h2 className="mb-2">{title}</h2>
      <MathJax className="pl-5">
        {`\\[
          s ` +
          X +
          ` = \\sqrt{\\frac{\\Sigma X^2 - \\frac{(\\Sigma X)^2}{N}}{N-1}}
        \\]`}

        {`\\[
          s ` +
          X +
          ` = \\sqrt{\\frac{` +
          totalPangkat +
          ` - \\frac{(` +
          totalScore +
          `)^2}{` +
          totalSamples +
          `}}{` +
          totalSamples +
          `-1}}
        \\]`}

        {`\\[
          s ` +
          X +
          ` = \\sqrt{\\frac{` +
          totalPangkat +
          ` - \\frac{` +
          Math.pow(totalScore, 2) +
          `}{` +
          totalSamples +
          `}}{` +
          (totalSamples - 1) +
          `}}
        \\]`}

        {`\\[
          s ` +
          X +
          ` = \\sqrt{\\frac{` +
          totalPangkat +
          ` - ` +
          (Math.pow(totalScore, 2) / totalSamples).toFixed(2) +
          `}{` +
          (totalSamples - 1) +
          `}}
        \\]`}

        {`\\[
          s ` +
          X +
          ` = \\sqrt{\\frac{` +
          (totalPangkat - Math.pow(totalScore, 2) / totalSamples).toFixed(2) +
          `}{` +
          (totalSamples - 1) +
          `}}
        \\]`}

        {`\\[
          s ` +
          X +
          ` = \\sqrt{` +
          (
            (totalPangkat - Math.pow(totalScore, 2) / totalSamples) /
            (totalSamples - 1)
          ).toFixed(2) +
          `}
        \\]`}

        {`\\[
          s ` +
          X +
          ` = ` +
          Math.sqrt(
            (totalPangkat - Math.pow(totalScore, 2) / totalSamples) /
              (totalSamples - 1)
          ).toFixed(2) +
          `
        \\]`}
      </MathJax>
    </div>
  );
};

const StandardDeviation = () => {
  const { data = { rowsLeft: [], rowsRight: [] } } = useData();
  const validRowsLeft = Array.isArray(data.rowsLeft) ? data.rowsLeft : [];
  const validRowsRight = Array.isArray(data.rowsRight) ? data.rowsRight : [];

  const totalSamples = validRowsLeft.length;
  const totalScorePre = calculateTotal(validRowsLeft);
  const totalPangkatPre = calculateTotalSquares(validRowsLeft);
  const totalScorePost = calculateTotal(validRowsRight);
  const totalPangkatPost = calculateTotalSquares(validRowsRight);

  return (
    <MathJaxContext>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold text-center mb-4 mx-4">
          Calculating the Standard Deviation of Pre-Test & Post-Test
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <StdDeviationMathJax
            title="Std. Deviation of Pre-Test:"
            totalSamples={totalSamples}
            X={"X_1"}
            totalScore={totalScorePre}
            totalPangkat={totalPangkatPre}
          />
          <StdDeviationMathJax
            title="Std. Deviation of Post-Test:"
            totalSamples={totalSamples}
            X={"X_2"}
            totalScore={totalScorePost}
            totalPangkat={totalPangkatPost}
          />
        </div>
      </div>
    </MathJaxContext>
  );
};

export default StandardDeviation;
