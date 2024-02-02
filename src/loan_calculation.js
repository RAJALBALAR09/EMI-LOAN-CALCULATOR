import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleLoanAmountChange = (e) => {
    setLoanAmount(parseFloat(e.target.value));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleLoanDurationChange = (e) => {
    setLoanDuration(parseInt(e.target.value));
  };

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanDuration * 12;
    const numerator = monthlyInterestRate * loanAmount;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments);
    const monthlyPayment = numerator / denominator;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <div>
        <label>
          Loan Amount ($):
          <input type="number" value={loanAmount} onChange={handleLoanAmountChange} />
        </label>
      </div>
      <div>
        <label>
          Annual Interest Rate (%):
          <input type="number" step="0.01" value={interestRate} onChange={handleInterestRateChange} />
        </label>
      </div>
      <div>
        <label>
          Loan Duration (years):
          <input type="number" value={loanDuration} onChange={handleLoanDurationChange} />
        </label>
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate</button>
      <div>
        {monthlyPayment > 0 && (
          <p>Monthly Payment: ${monthlyPayment}</p>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
