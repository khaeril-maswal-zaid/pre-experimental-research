import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const MeanScoreBox = ({ title, formula, proces, result }) => (
  <div className="border p-4 rounded-lg shadow bg-slate-50 w-56">
    <h2 className="mb-2">{title}</h2>
    <MathJax className="pl-10">{formula}</MathJax>
    <MathJax className="pl-10">{proces}</MathJax>
    <MathJax className="pl-10">{result}</MathJax>
  </div>
);

const MeanScorePreComp = () => {
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
  const meanGain = totalSamples > 0 ? (totalScorePost - totalScore) / totalSamples : 0;

  return (
    <MathJaxContext>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">
          Calculating Mean Score
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <MeanScoreBox
            title="Mean Score of Pre-Test"
            formula={`\\[
              \\bar{X_1}= \\frac{\\sum X_1 }{N}
              \\]`}
            proces={`\\[
              \\bar{X_1}= \\frac{`+totalScore+` }{`+totalSamples+`}
              \\]`}
            result={`\\[
              \\bar{X_1}= ${meanPreTest.toFixed(2)}
              \\]`}
          />
          <MeanScoreBox
            title="Mean Score of Post-Test"
            formula={`\\[
              \\bar{X_2}= \\frac{\\sum X_2 }{N}
              \\]`}
              proces={`\\[
                \\bar{X_2}= \\frac{`+totalScorePost+` }{`+totalSamples+`}
                \\]`}
            result={`\\[
              \\bar{X_2}= ${meanPostTest.toFixed(2)}
              \\]`}
          />
          <MeanScoreBox
            title="Mean Score of Gain"
            formula={`\\[
              \\bar{D}= \\frac{\\sum D }{N}
              \\]`}
              proces={`\\[
                \\bar{X}= \\frac{`+(totalScorePost - totalScore)+` }{`+totalSamples+`}
                \\]`}
            result={`\\[
              \\bar{D}= ${meanGain.toFixed(2)}
              \\]`}
          />
        </div>
      </div>
    </MathJaxContext>
  );
};

export default MeanScorePreComp;
