import React from "react";

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="w-64 p-4 bg-white border rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition duration-300">
      <h2 className="font-bold text-lg mb-3">🛍️ Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-sm italic">Your basket is empty</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {cart.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded-lg shadow-sm hover:shadow-md"
              >
                <span className="truncate w-28">{item.title}</span>
                <span className="font-semibold text-gray-700">${item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-2 text-sm flex justify-between font-bold text-gray-800">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </>
      )}
    </div>
  );
}
