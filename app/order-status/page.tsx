'use client';

import React, { useState } from 'react';

export default function OrderStatusPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkOrderStatus = () => {
    setLoading(true);
    setTimeout(() => {
      // Mock order lookup logic
      if (orderNumber === '12345') {
        setStatus('✅ Your order #12345 has been delivered.');
      } else if (orderNumber === '67890') {
        setStatus('🚚 Your order #67890 is on the way!');
      } else {
        setStatus('❌ Sorry, no order found with that number.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-sand px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-6">
        Track Your Order
      </h1>
      <p className="text-gray-700 mb-8 max-w-md">
        Enter your order number below to check the current status of your
        delivery.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your order number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-secondary text-gray-800"
        />
        <button
          onClick={checkOrderStatus}
          disabled={!orderNumber || loading}
          className={`bg-primary text-white font-medium rounded-md px-6 py-3 hover:bg-[#004b5c] transition-all duration-200 ${
            loading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Checking...' : 'Check Status'}
        </button>
      </div>

      {status && (
        <div className="mt-8 bg-white shadow-md rounded-md px-6 py-4 text-lg font-medium text-charcoal max-w-md">
          {status}
        </div>
      )}
    </main>
  );
}
