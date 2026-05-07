'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AdvisorPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI Financial Advisor. I can help you with budgeting, saving strategies, investment advice, and financial planning. What would you like to discuss today?"
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    "How can I save $10,000 in a year?",
    "What's a good emergency fund amount?",
    "Should I pay off debt or invest?",
    "How do I start investing?",
    "Tips for reducing monthly expenses",
    "Best way to build credit score"
  ];

  const insights = [
    {
      icon: ArrowTrendingUpIcon,
      title: "Investment Opportunity",
      description: "Based on your savings, consider diversifying into index funds",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      title: "Emergency Fund",
      description: "You're 60% towards your 6-month emergency fund goal",
      color: "green"
    },
    {
      icon: LightBulbIcon,
      title: "Savings Tip",
      description: "Automate $200/month to reach your goal 3 months faster",
      color: "yellow"
    }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: generateResponse(input)
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInput('');
  };

  const generateResponse = (question: string) => {
    const responses: Record<string, string> = {
      'save': "Great question! To save $10,000 in a year, you'll need to save about $833 per month. Here's a strategy:\n\n1. Automate your savings - set up automatic transfers\n2. Cut unnecessary subscriptions\n3. Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings\n4. Track every expense to find areas to cut\n5. Consider a side hustle for extra income\n\nWould you like me to create a personalized savings plan?",
      'emergency': "An emergency fund should cover 3-6 months of essential expenses. Based on average spending:\n\n• 3 months: Minimum safety net\n• 6 months: Recommended for most people\n• 12 months: If you're self-employed or have irregular income\n\nCalculate your monthly essentials (rent, food, utilities, insurance) and multiply by your target months. Start with $1,000 as a mini emergency fund, then build from there.",
      'debt': "This depends on your situation! Here's a framework:\n\n**Pay debt first if:**\n• Interest rate > 7%\n• High-interest credit cards\n• Debt causes stress\n\n**Invest first if:**\n• Interest rate < 4%\n• Employer 401(k) match available\n• You have emergency fund\n\n**Best approach:** Do both! Pay minimums on all debts, then split extra money between highest-interest debt and retirement accounts.",
      'invest': "Starting to invest is easier than you think! Here's a beginner roadmap:\n\n1. **Start with employer 401(k)** - Get the full match (free money!)\n2. **Open a Roth IRA** - Tax-free growth\n3. **Choose low-cost index funds** - S&P 500 is a great start\n4. **Start small** - Even $50/month adds up\n5. **Automate it** - Set and forget\n\nRemember: Time in the market beats timing the market. Start today, even if it's small!",
      'default': "That's a great question! Based on your financial profile, I recommend:\n\n1. Review your current spending patterns\n2. Set clear, measurable financial goals\n3. Create a realistic budget you can stick to\n4. Build an emergency fund (3-6 months expenses)\n5. Start investing early, even small amounts\n\nWould you like me to dive deeper into any of these areas?"
    };

    const lowerQuestion = question.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response;
      }
    }
    return responses.default;
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600'
    };
    return colors[color] || colors.blue;
  };

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
              <Link href="/advisor" className="text-emerald-600 font-medium">
                AI Advisor
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <SparklesIcon className="w-10 h-10 text-emerald-600" />
            AI Financial Advisor
          </h1>
          <p className="text-gray-600">Get personalized financial advice powered by AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Chat Messages */}
              <div className="h-[600px] overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-2">
                          <SparklesIcon className="w-5 h-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-600">AI Advisor</span>
                        </div>
                      )}
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything about your finances..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Questions */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-emerald-600" />
                Quick Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-left px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all text-sm text-gray-700 hover:text-emerald-600"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Insights Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5 text-emerald-600" />
                Personalized Insights
              </h3>
              <div className="space-y-4">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${getColorClasses(insight.color)}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                          <p className="text-sm text-gray-600">{insight.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">💡 Pro Tip</h3>
              <p className="text-emerald-50 text-sm mb-4">
                The best time to start investing was yesterday. The second best time is today. Even small amounts compound over time!
              </p>
              <button className="w-full px-4 py-2 bg-white text-emerald-600 rounded-xl font-medium hover:shadow-lg transition-all">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Resources</h3>
              <div className="space-y-2">
                <Link href="/learn" className="block text-sm text-emerald-600 hover:underline">
                  Financial Education Center
                </Link>
                <Link href="/calculator" className="block text-sm text-emerald-600 hover:underline">
                  Financial Calculators
                </Link>
                <Link href="/goals" className="block text-sm text-emerald-600 hover:underline">
                  Set Financial Goals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
