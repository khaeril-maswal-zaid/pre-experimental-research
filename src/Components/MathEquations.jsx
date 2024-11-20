import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const MathEquations = () => {
  // Konfigurasi MathJax (opsional)
  const mathJaxConfig = {
    loader: { load: ["[tex]/ams"] },
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      packages: { "[+]": ["ams"] },
    },
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div>
        <h1>Rumus Pengelolaan Data</h1>

        {/* 1. Rumus Standar Deviasi */}
        <h2>Standar Deviasi (SD)</h2>
        <MathJax>
          {`\\[
          SD = \\sqrt{\\frac{\\sum X^2 - \\frac{(\\sum X)^2}{N}}{N-1}}
          \\]`}
        </MathJax>

        {/* 2. Rumus T-Test (Paired Samples) */}
        <h2>T-Test (Paired Samples)</h2>
        <MathJax>
          {`\\[
          t = \\frac{\\bar{D}}{
          \\sqrt{
          \\frac{\\sum D^2 - \\frac{(\\sum D)^2}{N}}{N(N-1)}
          }}
          \\]`}
        </MathJax>

        {/* 3. Mean Score */}
        <h2>Mean Score</h2>
        <MathJax>
          {`\\[
          \\bar{X} = \\frac{\\sum X}{N}
          \\]`}
        </MathJax>

        {/* 4. Gain */}
        <h2>Gain</h2>
        <MathJax>
          {`\\[
          G = X_2 - X_1
          \\]`}
        </MathJax>

        {/* 5. Gain Kuadrat */}
        <h2>Gain Kuadrat (Gain²)</h2>
        <MathJax>
          {`\\[
          G^2 = (X_2 - X_1)^2
          \\]`}
        </MathJax>

        {/* 6. Persentase Range (Pre-test dan Post-test) */}
        <h2>Persentase Range</h2>
        <MathJax>
          {`\\[
          \\text{Persentase Range} = \\frac{\\text{Skor Aktual}}{\\text{Skor Maksimal}} \\times 100\\%
          \\]`}
        </MathJax>

        {/* 7. Persentase Perbedaan */}
        <h2>Persentase Perbedaan (X1 ke X2)</h2>
        <MathJax>
          {`\\[
          \\text{Persentase Perbedaan} = \\frac{X_2 - X_1}{X_1} \\times 100\\%
          \\]`}
        </MathJax>

        {/* 8. Klasifikasi Skor */}
        <h2>Klasifikasi Skor</h2>
        <MathJax>
          {`\\[
          \\text{Klasifikasi Skor} =
          \\begin{cases}
          \\text{Very Good} & \\text{Jika } 81-100 \\\\
          \\text{Good} & \\text{Jika } 61-80 \\\\
          \\text{Fair} & \\text{Jika } 41-60 \\\\
          \\text{Less} & \\text{Jika } 21-40 \\\\
          \\text{Poor} & \\text{Jika } 0-20
          \\end{cases}
          \\]`}
        </MathJax>
      </div>

      <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
        <h1>Perhitungan Standar Deviasi</h1>

        <MathJax>
          {/* Langkah 1: Jumlah data */}
          {`\\[
    \\Sigma X = 72 + 85 + 90 + 88 + 76 = 411
    \\]`}

          {/* Langkah 2: Rata-rata */}
          {`\\[
    \\bar{X} = \\frac{\\Sigma X}{N} = \\frac{411}{5} = 82.2
    \\]`}

          {/* Langkah 3: Kuadrat tiap data */}
          {`\\[
    X^2 = \\{72^2, 85^2, 90^2, 88^2, 76^2\\} = \\{5184, 7225, 8100, 7744, 5776\\}
    \\]`}

          {/* Langkah 4: Jumlah kuadrat */}
          {`\\[
    \\Sigma X^2 = 5184 + 7225 + 8100 + 7744 + 5776 = 34029
    \\]`}

          {/* Rumus SD */}
          {`\\[
    SD = \\sqrt{\\frac{\\Sigma X^2 - \\frac{(\\Sigma X)^2}{N}}{N-1}}
    \\]`}

          {/* Langkah perhitungan */}
          {`\\[
    SD = \\sqrt{\\frac{34029 - \\frac{(411)^2}{5}}{5-1}}
    \\]`}
          {`\\[
    SD = \\sqrt{\\frac{34029 - 33784.2}{4}}
    \\]`}
          {`\\[
    SD = \\sqrt{\\frac{244.8}{4}} = \\sqrt{61.2} \\approx 7.82
    \\]`}
        </MathJax>

        <h2>Hasil Akhir</h2>
        <MathJax>
          {`\\[
    SD \\approx 7.82
    \\]`}
        </MathJax>
      </div>
    </MathJaxContext>
  );
};

export default MathEquations;
