'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CalculatorIcon,
  HomeIcon,
  CreditCardIcon,
  BanknotesIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function CalculatorPage() {
  const [activeCalculator, setActiveCalculator] = useState('loan');
  
  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState('10000');
  const [loanRate, setLoanRate] = useState('5');
  const [loanTerm, setLoanTerm] = useState('12');
  
  // Savings Calculator State
  const [savingsInitial, setSavingsInitial] = useState('1000');
  const [savingsMonthly, setSavingsMonthly] = useState('200');
  const [savingsRate, setSavingsRate] = useState('4');
  const [savingsTerm, setSavingsTerm] = useState('60');

  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('60000');
  const [mortgageRate, setMortgageRate] = useState('6.5');
  const [mortgageTerm, setMortgageTerm] = useState('360');

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(loanRate) / 100 / 12;
    const term = parseFloat(loanTerm);
    
    const monthlyPayment = principal * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - principal;
    
    return {
      monthly: monthlyPayment.toFixed(2),
      total: totalPayment.toFixed(2),
      interest: totalInterest.toFixed(2)
    };
  };

  const calculateSavings = () => {
    const initial = parseFloat(savingsInitial);
    const monthly = parseFloat(savingsMonthly);
    const rate = parseFloat(savingsRate) / 100 / 12;
    const term = parseFloat(savingsTerm);
    
    let balance = initial;
    for (let i = 0; i < term; i++) {
      balance = balance * (1 + rate) + monthly;
    }
    
    const totalContributions = initial + (monthly * term);
    const totalInterest = balance - totalContributions;
    
    return {
      final: balance.toFixed(2),
      contributions: totalContributions.toFixed(2),
      interest: totalInterest.toFixed(2)
    };
  };

  const calculateMortgage = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const principal = price - down;
    const rate = parseFloat(mortgageRate) / 100 / 12;
    const term = parseFloat(mortgageTerm);
    
    const monthlyPayment = principal * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - principal;
    
    return {
      monthly: monthlyPayment.toFixed(2),
      total: (totalPayment + down).toFixed(2),
      interest: totalInterest.toFixed(2),
      principal: principal.toFixed(2)
    };
  };

  const loanResults = calculateLoan();
  const savingsResults = calculateSavings();
  const mortgageResults = calculateMortgage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Finance
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/profile" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/learn" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Learn
              </Link>
              <Link href="/calculator" className="text-emerald-600 font-medium">
                Calculators
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Financial Calculators</h1>
          <p className="text-gray-600">Plan your financial future with powerful calculators</p>
        </div>

        {/* Calculator Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCalculator('loan')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              activeCalculator === 'loan'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <CreditCardIcon className="w-5 h-5" />
            Loan Calculator
          </button>
          <button
            onClick={() => setActiveCalculator('savings')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              activeCalculator === 'savings'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BanknotesIcon className="w-5 h-5" />
            Savings Calculator
          </button>
          <button
            onClick={() => setActiveCalculator('mortgage')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              activeCalculator === 'mortgage'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <HomeIcon className="w-5 h-5" />
            Mortgage Calculator
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CalculatorIcon className="w-6 h-6 text-emerald-600" />
              {activeCalculator === 'loan' && 'Loan Details'}
              {activeCalculator === 'savings' && 'Savings Details'}
              {activeCalculator === 'mortgage' && 'Mortgage Details'}
            </h2>

            {/* Loan Calculator Inputs */}
            {activeCalculator === 'loan' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount ($)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per year)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={loanRate}
                    onChange={(e) => setLoanRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (months)
                  </label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Savings Calculator Inputs */}
            {activeCalculator === 'savings' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Deposit ($)
                  </label>
                  <input
                    type="number"
                    value={savingsInitial}
                    onChange={(e) => setSavingsInitial(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Contribution ($)
                  </label>
                  <input
                    type="number"
                    value={savingsMonthly}
                    onChange={(e) => setSavingsMonthly(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per year)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={savingsRate}
                    onChange={(e) => setSavingsRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Period (months)
                  </label>
                  <input
                    type="number"
                    value={savingsTerm}
                    onChange={(e) => setSavingsTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Mortgage Calculator Inputs */}
            {activeCalculator === 'mortgage' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home Price ($)
                  </label>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment ($)
                  </label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per year)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={mortgageRate}
                    onChange={(e) => setMortgageRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (months)
                  </label>
                  <input
                    type="number"
                    value={mortgageTerm}
                    onChange={(e) => setMortgageTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ChartBarIcon className="w-6 h-6" />
              Results
            </h2>

            {activeCalculator === 'loan' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Monthly Payment</p>
                  <p className="text-4xl font-bold">${loanResults.monthly}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Total Payment</p>
                  <p className="text-3xl font-bold">${loanResults.total}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Total Interest</p>
                  <p className="text-3xl font-bold">${loanResults.interest}</p>
                </div>
              </div>
            )}

            {activeCalculator === 'savings' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Final Balance</p>
                  <p className="text-4xl font-bold">${savingsResults.final}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Total Contributions</p>
                  <p className="text-3xl font-bold">${savingsResults.contributions}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Interest Earned</p>
                  <p className="text-3xl font-bold">${savingsResults.interest}</p>
                </div>
              </div>
            )}

            {activeCalculator === 'mortgage' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Monthly Payment</p>
                  <p className="text-4xl font-bold">${mortgageResults.monthly}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Loan Amount</p>
                  <p className="text-3xl font-bold">${mortgageResults.principal}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Total Interest</p>
                  <p className="text-3xl font-bold">${mortgageResults.interest}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
