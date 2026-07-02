  import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { currencies } from "./currency";

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [conversionHistory, setConversionHistory] = useState([]);
  useEffect(()=>{
    const savedHistory=JSON.parse(localStorage.getItem("history"))||[];
    setConversionHistory(savedHistory)
  },[])
  const savedHistory=(entry)=>{
    const updatedHistory=[entry,...conversionHistory]
    setConversionHistory(updatedHistory);
    localStorage.setItem("history",JSON.stringify(updatedHistory));
  }
  const covertCurrencies=async()=>{
    try {
      const { data } = await axios.get(
       `http://localhost:4000/convert?base_currency=${baseCurrency}&currencies=${selectedCurrency}`
      );

      let result=Object.values(data.data)[0]*amount;
      let roundofResult=result.toFixed(2);
      const countryCode=currencies.find(currency=>currency.code===selectedCurrency);
      savedHistory({
        result:roundofResult,
        flag:countryCode.flag,
        symbol:countryCode.symbol,
        code:countryCode.code,
        countryName:countryCode.name,
        date:new Date().toLocaleString(),
      })
    } catch (error) {
      
    }
  }
  const deleteHistoryItem=(index)=>{
    const updatedHistory=conversionHistory.filter((_,i)=>i!==index);
    localStorage.setItem("history",JSON.stringify(updatedHistory));
    setConversionHistory(updatedHistory);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-700 flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          XChange Hub
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Convert currencies instantly with live exchange rates
        </p>

        {/* Base Currency */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Base Currency
          </label>

          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-lg outline-none transition duration-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-lg outline-none transition duration-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* Convert Button */}
        <div className="mb-6">
          <button className="w-full bg-pink-500 hover:bg-pink-600 active:scale-95 transition duration-300 text-white font-semibold text-lg py-3 rounded-xl shadow-md" onClick={covertCurrencies}>
            Convert
          </button>
        </div>

        {/* Convert To */}
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">
            Convert To
          </label>

          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-lg outline-none transition duration-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="">Select Currency</option>

            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        {/* History */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Conversion History
          </h2>

          <div className="h-72 overflow-y-auto pr-2">

            {conversionHistory.length > 0 ? (
              <ul className="space-y-3">
                {conversionHistory.map((entry, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition"
                  >
                    <div className="flex items-center gap-4">

                      <img
                        src={`https://flagcdn.com/w40/${entry.flag}.png`}
                        alt="Flag"
                        className="w-12 h-12 rounded-full border object-cover"
                      />
                      <div>
                        <p className="text-xl font-bold text-gray-800">
                          {entry.symbol} {entry.result}
                        </p>
                        <p className="text-gray-500">
                          {entry.code} • {entry.countryName}
                        </p>
                      </div>

                    </div>

                    <button
                      className="text-red-500 hover:text-red-700 text-2xl font-bold transition" onClick={()=>deleteHistoryItem(index)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
                <p className="text-gray-400 text-lg font-medium">
                  No conversions yet.
                </p>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};

export default App;