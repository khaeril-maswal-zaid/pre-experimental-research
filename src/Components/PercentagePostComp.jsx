import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useData } from "../context/DataContext";

const PercentagePostComp = () => {
  const { data } = useData();
  const { rowsRight } = data;

  const calculateFrequencies = () => {
    const frequencies = {
      veryGood: 0,
      good: 0,
      fair: 0,
      less: 0,
      poor: 0,
    };

    rowsRight.forEach((row) => {
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
  const totalSamples = rowsRight.length;

  const categories = [
    { label: "Very Good", value: frequencies.veryGood },
    { label: "Good", value: frequencies.good },
    { label: "Fair", value: frequencies.fair },
    { label: "Less", value: frequencies.less },
    { label: "Poor", value: frequencies.poor },
  ];

  return (
    <MathJaxContext>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">
          Calculating the Percentage Rate of Students' Post-Test Scores
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="border p-4 rounded-lg shadow bg-slate-50 w-56"
            >
              <h2 className="text-xl font-semibold mb-2">{category.label}:</h2>
              <MathJax className="pl-10">
                {`\\[
                  \\text{P} = \\frac{\\text{F}}{\\text{N}} \\times 100
                \\]`}
              </MathJax>
              <MathJax className="pl-10 mb-6">
                {`\\[
                  \\text{P} = \\frac{${category.value}}{${totalSamples}} \\times 100
                \\]`}
              </MathJax>
              <MathJax className="pl-10 mb-8">
                {`\\[
                  \\text{P} = ${(category.value / totalSamples).toFixed(
                    2
                  )} \\times 100
                \\]`}
              </MathJax>
              <MathJax className="pl-10">
                {`\\[
                  \\text{P} = ${((category.value / totalSamples) * 100).toFixed(
                    2
                  )}
                \\]`}
              </MathJax>
            </div>
          ))}
        </div>
      </div>
    </MathJaxContext>
  );
};

export default PercentagePostComp;
