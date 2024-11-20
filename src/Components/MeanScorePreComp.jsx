import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const MeanScorePreComp = () => {
  const { data } = useData();
  const validRowsLeft = Array.isArray(data.rowsLeft) ? data.rowsLeft : [];
  const totalSamples = validRowsLeft.length;

  // Hitung total score
  const totalScore = validRowsLeft.reduce((sum, row) => {
    return sum + (parseInt(row.score, 10) || 0); // Gunakan 0 jika score undefined atau invalid
  }, 0);

  return (
    <MathJaxContext>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">
          Calculating Mean Score
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="border p-4 rounded-lg shadow bg-slate-50 w-56">
            <h2 className="mb-2">Mean Score of Pre-Test</h2>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= \\frac{\\sum X_1 }{N}
                \\]`}
            </MathJax>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= \\frac{` +
                totalScore +
                `}{` +
                totalSamples +
                `}
                \\]`}
            </MathJax>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= ` +
                totalScore / totalSamples +
                `
                \\]`}
            </MathJax>
          </div>
          <div className="border p-4 rounded-lg shadow bg-slate-50 w-56">
            <h2 className="mb-2">Mean Score of Post-Test</h2>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= \\frac{\\sum X_1 }{N}
                \\]`}
            </MathJax>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= \\frac{` +
                totalScore +
                `}{` +
                totalSamples +
                `}
                \\]`}
            </MathJax>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= ` +
                totalScore / totalSamples +
                `
                \\]`}
            </MathJax>
          </div>
          <div className="border p-4 rounded-lg shadow bg-slate-50 w-56">
            <h2 className="mb-2">Mean Score of Gain</h2>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= \\frac{\\sum X_1 }{N}
                \\]`}
            </MathJax>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= \\frac{` +
                totalScore +
                `}{` +
                totalSamples +
                `}
                \\]`}
            </MathJax>
            <MathJax className="pl-10">
              {`\\[
                \\bar{X}= ` +
                totalScore / totalSamples +
                `
                \\]`}
            </MathJax>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default MeanScorePreComp;
