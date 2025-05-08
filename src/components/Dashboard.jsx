import React, { useState } from 'react';
import { html2pdf } from 'html2pdf.js';

const MultiplicationRules = () => {
  const [multiplicand, setMultiplicand] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const calculate = () => {
    const multiplicandNum = parseInt(multiplicand);
    const multiplierNum = parseInt(multiplier);

    if (isNaN(multiplicandNum)) {
      alert("Please enter valid numbers in both fields.");
      return;
    }

    if (isNaN(multiplierNum)) {
      alert("Please enter valid numbers in both fields.");
      return;
    }

    setResult('');
    setSteps([]);

    if (multiplierNum === 9) {
      if (multiplicandNum < 10) {
        rule1(multiplicandNum);
      } else if (multiplicandNum >= 10 && multiplicandNum < 100) {
        const tens = Math.floor(multiplicandNum / 10);
        const ones = multiplicandNum % 10;
        rule2(tens, ones);
      } else if (multiplicandNum >= 100) {
        const hundreds = Math.floor(multiplicandNum / 100);
        const tens = Math.floor((multiplicandNum / 10) % 10);
        const ones = multiplicandNum % 10;
        rule3(hundreds, tens, ones);
      }
    } else if (multiplierNum === 99) {
      if (multiplicandNum < 10) {
        rule4(multiplicandNum);
      } else if (multiplicandNum >= 10 && multiplicandNum < 100) {
        const tens = Math.floor(multiplicandNum / 10);
        const ones = multiplicandNum % 10;
        rule5(tens, ones);
      } else if (multiplicandNum >= 100) {
        const hundreds = Math.floor(multiplicandNum / 100);
        const tens = Math.floor((multiplicandNum / 10) % 10);
        const ones = multiplicandNum % 10;
        rule6(hundreds, tens, ones);
      }
    } else if (multiplierNum === 999) {
      if (multiplicandNum < 10) {
        rule7(multiplicandNum);
      } else if (multiplicandNum >= 10 && multiplicandNum < 100) {
        const tens = Math.floor(multiplicandNum / 10);
        const ones = multiplicandNum % 10;
        rule8(tens, ones);
      } else if (multiplicandNum >= 100) {
        const hundreds = Math.floor(multiplicandNum / 100);
        const tens = Math.floor((multiplicandNum / 10) % 10);
        const ones = multiplicandNum % 10;
        rule9(hundreds, tens, ones);
      }
    }
  };

  const rule1 = (a) => {
    const step1 = 10 - a;
    const step2 = a - 1;
    const finalResult = (10 * step2) + step1;

    const newSteps = [
      { title: "Rule 1:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract multiplicand from 10: 10 - ${a} = ${step1} placed in unit position` 
      },
      { 
        title: "Step 2:", 
        content: `Subtract 1 from the multiplicand: ${a} - 1 = ${step2} placed in Tens place` 
      },
      { 
        title: "Final Calculation:", 
        content: `(10 * ${step2}) + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 1. Step 1: Subtract multiplicand from 10: 10 minus ${a} equals ${step1} placed in unit position. Step 2: Subtract 1 from the multiplicand: ${a} minus 1 equals ${step2} placed in Tens position. Final Calculation: 10 multiplied by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule2 = (a1, b1) => {
    const step1 = 10 - b1;
    const step2 = 9 + b1 - a1;
    const step3 = a1 - 1;
    const finalResult = (100 * step3) + (10 * step2) + step1;

    const newSteps = [
      { title: "Rule 2:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract unit place digit from 10: 10 - ${b1} = ${step1} (unit place)` 
      },
      { 
        title: "Step 2:", 
        content: `Add 9 to unit place digit and subtract tens place digit: 9 + ${b1} - ${a1} = ${step2} (Tens place)` 
      },
      { 
        title: "Step 3:", 
        content: `Subtract 1 from tens place digit: ${a1} - 1 = ${step3} (Hundred place)` 
      },
      { 
        title: "Final Calculation:", 
        content: `(100 * ${step3}) + (10 * ${step2}) + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 2. Step 1: Subtract unit place digit from 10: 10 minus ${b1} equals ${step1}(Unit place). Step 2: Add 9 to unit place digit and subtract tens place digit: 9 plus ${b1} minus ${a1} equals ${step2}(Tens Place). Step 3: Subtract 1 from tens place digit: ${a1} minus 1 equals ${step3}(Hundred place). Final Calculation: 100 multiplied by ${step3} plus 10 multiplied by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule3 = (a, b, c) => {
    const step1 = 10 - c;
    const step2 = 9 + c - b;
    const step3 = 9 + b - a;
    const step4 = a - 1;
    const finalResult = (1000 * step4) + (100 * step3) + (10 * step2) + step1;

    const newSteps = [
      { title: "Rule 3:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract unit place digit from 10: 10 - ${c} = ${step1}(Unit Place)` 
      },
      { 
        title: "Step 2:", 
        content: `Add 9 to unit place digit and subtract tens place digit: 9 + ${c} - ${b} = ${step2} (Tens Place)` 
      },
      { 
        title: "Step 3:", 
        content: `Add 9 to tens place digit and subtract hundreds place digit: 9 + ${b} - ${a} = ${step3} (Hundred Place)` 
      },
      { 
        title: "Step 4:", 
        content: `Subtract 1 from hundreds place digit: ${a} - 1 = ${step4} (Thousand Place)` 
      },
      { 
        title: "Final Calculation:", 
        content: `(1000 * ${step4}) + (100 * ${step3}) + (10 * ${step2}) + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 3. Step 1: Subtract unit place digit from 10: 10 minus ${c} equals ${step1}(Unit place). Step 2: Add 9 to unit place digit and subtract tens place digit: 9 plus ${c} minus ${b} equals ${step2} (Tens place). Step 3: Add 9 to tens place digit and subtract hundreds place digit: 9 plus ${b} minus ${a} equals ${step3} (Hundred Place). Step 4: Subtract 1 from hundreds place digit: ${a} minus 1 equals ${step4} (Thousand Place). Final Calculation: 1000 multiplied by ${step4} plus 100 multiplied by ${step3} plus 10 multiplied by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule4 = (a) => {
    const step1 = 10 - a;
    const step2 = 9;
    const step3 = (a - 1);
    const finalResult = 100 * step3 + 10 * step2 + step1;

    const newSteps = [
      { title: "Rule 4:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract multiplicand from 10: 10 - ${a} = ${step1} placed in unit position` 
      },
      { 
        title: "Step 2:", 
        content: `Multiply 9 with 10: 10 * 9 = ${step2} placed in Tens place` 
      },
      { 
        title: "Step 3:", 
        content: `Substract ${a}-1 and multiply with 100: 100 * ${a} -1 = ${step3} placed in Tens place` 
      },
      { 
        title: "Final Calculation:", 
        content: `(100 * ${step3}) + 10* ${step2} + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 1. Step 1: Subtract multiplicand from 10: 10 - ${a} = ${step1} placed in unit position. Step 2: Multiply 9 with 10: 10 * 9 = ${step2} placed in Tens place. Step 3: Substract ${a}-1 and multiply with 100: 100 * ${a} -1 = ${step3} placed in Tens place. Final Calculation: 100 multiplied by ${step3} plus 10 multiply by ${step2} plus ${step3} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule5 = (a1, b1) => {
    const step1 = 10 - b1;
    const step2 = 9 - a1;
    const step3 = b1 - 1;
    const step4 = a1;
    const finalResult = (1000 * step4) + (100 * step3) + (10 * step2) + step1;

    const newSteps = [
      { title: "Rule 4:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract unit place digit from 10: 10 - ${b1} = ${step1} (unit place)` 
      },
      { 
        title: "Step 2:", 
        content: `Subtract tens place digit from 9: 9 - ${a1} = ${step2} (tens place)` 
      },
      { 
        title: "Step 3:", 
        content: `Subtract 1 from unit place digit: ${b1} - 1 = ${step3} (hundreds place)` 
      },
      { 
        title: "Step 4:", 
        content: `Use tens place digit as is: ${a1} (thousands place)` 
      },
      { 
        title: "Final Calculation:", 
        content: `(1000 * ${step4}) + (100 * ${step3}) + (10 * ${step2}) + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 5. Step 1: Subtract unit place digit from 10: 10 minus ${b1} equals ${step1} (unit place). Step 2: Subtract tens place digit from 9: 9 minus ${a1} equals ${step2} (tens place). Step 3: Subtract 1 from unit place digit: ${b1} minus 1 equals ${step3} (hundreds place). Step 4: Use tens place digit as is: ${a1} (thousands place). Final Calculation: 1000 multiplied by ${step4} plus 100 multiplied by ${step3} plus 10 multiplied by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule6 = (a, b, c) => {
    const step1 = 10 - c;
    const step2 = 9 - b;
    const step3 = 9 + c - a;
    const step4 = b - 1;
    const step5 = a;
    const finalResult = (10000 * step5) + (1000 * step4) + (100 * step3) + (10 * step2) + step1;

    const newSteps = [
      { title: "Rule 6:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract unit place digit from 10: 10 - ${c} = ${step1}(Unit Place)` 
      },
      { 
        title: "Step 2:", 
        content: `Substract 9 to tens place digit: 9 - ${b} = ${step2} (Tens Place)` 
      },
      { 
        title: "Step 3:", 
        content: `Add 9 to unit place digit and subtract hundreds place digit: 9 + ${c} - ${a} = ${step3} (Hundred Place)` 
      },
      { 
        title: "Step 4:", 
        content: `Subtract 1 from tens place digit: ${b} - 1 = ${step4} (Thousand Place)` 
      },
      { 
        title: "Step 5:", 
        content: `Normally put the hundred place digit: ${a} = ${step4} (Thousand Place)` 
      },
      { 
        title: "Final Calculation:", 
        content: `(10000 * ${step5}) + (1000 * ${step4}) + (100 * ${step3}) + (10 * ${step2}) + (${step1}) = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 6. Step 1: Subtract unit place digit from 10: 10 minus ${c} equals ${step1}(Unit place). Step 2: Substract 9 to tens place digit: 9 minus ${b} equals ${step2} (Tens place). Step 3: Add 9 to unit place digit and subtract hundreds place digit: 9 plus ${c} minus ${a} equals ${step3} (Hundred Place). Step 4: Subtract 1 from tens place digit: ${b} minus 1 equals ${step4} (Thousand Place).Step 5: Normally put the hundred place digit: ${step5}. Final Calculation: 10000 multiplied by ${step5} plus 1000 multiplied by ${step4} plus 100 multiplied by ${step3} plus 10 multiply by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule7 = (a) => {
    const step1 = 10 - a;
    const step2 = 9;
    const step3 = 9;
    const step4 = (a - 1);
    const finalResult = 1000 * step4 + 100 * step3 + 10 * step2 + step1;

    const newSteps = [
      { title: "Rule 7:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract multiplicand from 10: 10 - ${a} = ${step1} placed in unit position` 
      },
      { 
        title: "Step 2:", 
        content: `Multiply 9 with 10: 10 * 9 = ${step2} placed in Tens place` 
      },
      { 
        title: "Step 3:", 
        content: `Multiply 9 with 100: 100 * 9 = ${step3} placed in Tens place` 
      },
      { 
        title: "Step 4:", 
        content: `Substract ${a}-1 and multiply with 1000: 1000 * ${a} -1 = ${step3} placed in Tens place` 
      },
      { 
        title: "Final Calculation:", 
        content: `(1000 * ${step4}) + 100 * ${step3} + 10 * ${step2} + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 7. Step 1: Subtract multiplicand from 10: 10 - ${a} = ${step1} placed in unit position. Step 2: Multiply 9 with 10: 10 * 9 = ${step2} placed in Tens place. Step 3: Multiply 9 with 100: 100 * 9 equals to ${step3} Step 4: Substract ${a}-1 and multiply with 1000: 1000 * ${a} -1 = ${step4} placed in Tens place. Final Calculation: 1000 multiplied by ${step4} plus 100 multiply by ${step3} plus ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule8 = (a1, b1) => {
    const step1 = 10 - b1;
    const step2 = 9 - a1;
    const step3 = 9;
    const step4 = b1 - 1;
    const step5 = a1;
    const finalResult = (10000 * step5) + (1000 * step4) + (100 * step3) + 10 * (step2) + step1;

    const newSteps = [
      { title: "Rule 8:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract unit place digit from 10: 10 - ${b1} = ${step1} (unit place)` 
      },
      { 
        title: "Step 2:", 
        content: `Subtract tens place digit from 9: 9 - ${a1} = ${step2} (tens place)` 
      },
      { 
        title: "Step 3:", 
        content: `Put 9 and multiply by 100: 100 * 9 = ${step3} (hundreds place)` 
      },
      { 
        title: "Step 4:", 
        content: `Subtract 1 from unit place digit: ${b1} - 1 = ${step4} (thousand place place)` 
      },
      { 
        title: "Step 5:", 
        content: `Use tens place digit as it is: ${a1} (5th place)` 
      },
      { 
        title: "Final Calculation:", 
        content: `(10000 * ${step5}) + (1000 * ${step4}) + (100 * ${step3}) + (10 * ${step2}) + ${step1} = ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 8. Step 1: Subtract unit place digit from 10: 10 minus ${b1} equals ${step1} (unit place). Step 2: Subtract tens place digit from 9: 9 minus ${a1} equals ${step2} (tens place). Step 3:Put 9 and multiply by 100: 100 * 9 equals to ${step3} Step 4: Subtract 1 from unit place digit: ${b1} minus 1 equals ${step4} (hundreds place). Step 5: Use tens place digit as is: ${a1} (5th place). Final Calculation: 10000 multiplied by ${step5} plus 1000 multiplied by ${step4} plus 100 * 9 euqals to ${step3} plus 10 multiplied by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const rule9 = (a, b, c) => {
    const step1 = 10 - c;
    const step2 = 9 - b;
    const step3 = 9 - a;
    const step4 = c - 1;
    const step5 = b;
    const step6 = a;
    const finalResult = (100000 * step6) + (10000 * step5) + (1000 * step4) + (100 * step3) + (10 * step2) + step1;

    const newSteps = [
      { title: "Rule 9:", content: "" },
      { 
        title: "Step 1:", 
        content: `Subtract unit place digit from 10: 10 - ${c} = ${step1}(Unit Place)` 
      },
      { 
        title: "Step 2:", 
        content: `Substract 9 to tens place digit: 9 - ${b} = ${step2} (Tens Place)` 
      },
      { 
        title: "Step 3:", 
        content: `Substract 9 to hundred place digit and subtract hundreds place digit: 9 - ${a} = ${step3} (Hundred Place)` 
      },
      { 
        title: "Step 4:", 
        content: `Substract 1 to unit place digit:${c} -1 = ${step4} (thousand Place)` 
      },
      { 
        title: "Step 5:", 
        content: `Put tens place digit as it is: ${b} = ${step5} (5th Place)` 
      },
      { 
        title: "Step 6:", 
        content: `Put hundred place digit as it is: ${a} = ${step6} (6th Place)` 
      },
      { 
        title: "Final Calculation:", 
        content: `(100000 * ${step6}) + (10000 * ${step5}) + (1000 * ${step4}) + (100 * ${step3}) + (10 * ${step2}) + (${step1})= ${finalResult}` 
      }
    ];

    setResult(finalResult);
    setSteps(newSteps);

    speak(`Rule 9. Step 1: Subtract unit place digit from 10: 10 minus ${c} equals to ${step1}(Unit Place). Step 2: Substract 9 to hundred place digit and subtract hundreds place digit: 9 minus ${a} equals to ${step3} (Hundred Place). Step 4: Substract 1 to unit place digit:${c} minus 1 equals to ${step4} (thousand Place) .Step 5: Put tens place digit as it is: ${step5} (5th Place).Step 6:Put hundred place digit as it is: ${step6} (6th Place)  Final Calculation: 100000 multiplied by ${step6} plus 10000 multiplied by ${step5} plus 1000 multiplied by ${step4} plus 100 multiply by ${step3} plus 10 multiply by ${step2} plus ${step1} equals ${finalResult}. Result: ${finalResult}`);
  };

  const exportSteps = () => {
    const content = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Multiplication Steps';
    content.appendChild(h2);
    
    if (result) {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `Result: <strong>${result}</strong>`;
      content.appendChild(resultElement);
    }

    if (steps.length > 0) {
      const stepsContainer = document.createElement('div');
      steps.forEach(step => {
        const stepElement = document.createElement('div');
        if (step.title === "Rule 1:" || step.title === "Rule 2:" || step.title === "Rule 3:" || 
            step.title === "Rule 4:" || step.title === "Rule 5:" || step.title === "Rule 6:" || 
            step.title === "Rule 7:" || step.title === "Rule 8:" || step.title === "Rule 9:") {
          stepElement.innerHTML = `<p><strong>${step.title}</strong></p>`;
        } else {
          stepElement.innerHTML = `<div class="step"><p><strong>${step.title}</strong> ${step.content}</p></div>`;
        }
        stepsContainer.appendChild(stepElement);
      });
      content.appendChild(stepsContainer);
    }

    const opt = {
      margin: 10,
      filename: 'multiplication_steps.pdf',
      html2canvas: { 
        scale: 1,
        scrollY: 0,
        windowHeight: document.body.scrollHeight
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', color: 'red' }
    };

    setTimeout(() => {
      html2pdf().set(opt).from(content).save();
    }, 1000);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: '50px',
      backgroundColor: '#f4f4f9'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>Multiplication Rules</h2>
        <input
          type="number"
          id="multiplicand"
          placeholder="Enter multiplicand"
          value={multiplicand}
          onChange={(e) => setMultiplicand(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <input
          type="number"
          id="multiplier"
          placeholder="Enter multiplier"
          value={multiplier}
          onChange={(e) => setMultiplier(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <button
          onClick={calculate}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            fontSize: '16px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Calculate
        </button>
        {result && (
          <div className="result" style={{ marginTop: '20px', fontSize: '1.2em', color: '#333' }}>
            Result: <strong>{result}</strong>
          </div>
        )}
        {steps.length > 0 && (
          <div className="steps" style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#e9e9e9',
            borderRadius: '5px',
            animation: 'fadeIn 0.5s ease'
          }}>
            {steps.map((step, index) => (
              <div key={index}>
                {step.title === "Rule 1:" || step.title === "Rule 2:" || step.title === "Rule 3:" || 
                 step.title === "Rule 4:" || step.title === "Rule 5:" || step.title === "Rule 6:" || 
                 step.title === "Rule 7:" || step.title === "Rule 8:" || step.title === "Rule 9:" ? (
                  <p><strong>{step.title}</strong></p>
                ) : (
                  <div className="step" style={{
                    marginBottom: '10px',
                    padding: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>
                    <p><strong>{step.title}</strong> {step.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {steps.length > 0 && (
          <button
            className="export-button"
            onClick={exportSteps}
            style={{
              marginTop: '20px',
              backgroundColor: '#008CBA',
              width: '100%',
              padding: '10px',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#007B9E'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#008CBA'}
          >
            Export Steps as PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiplicationRules;