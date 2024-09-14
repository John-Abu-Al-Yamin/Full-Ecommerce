import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Payment.css'; // Import your CSS file

const Celebration = () => (
  <div className="celebration-container">
    {/* Generate multiple confetti elements */}
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="confetti"
        style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh` }}
      />
    ))}
  </div>
);

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
      navigate('/'); // Navigate to home page
    }, 2000); // Hide celebration and navigate after 3 seconds
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Payment Details</h2>
        <p className="mb-4">
          Enter your card information to complete the purchase.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Cardholder Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              className="mr-2 h-4 w-4 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7v4a2 2 0 01-2 2H6a2 2 0 01-2-2V7M16 3v2a2 2 0 012 2v14a2 2 0 01-2 2V21a2 2 0 01-2-2V19a2 2 0 01-2-2h6a2 2 0 012 2v-2a2 2 0 012-2V7a2 2 0 01-2-2V3a2 2 0 012-2z"
              />
            </svg>
            Pay Now
          </button>
        </form>
      </div>
      {showCelebration && <Celebration />}
    </div>
  );
};

export default Payment;
