import React, { useState } from "react";
import { ChevronsRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import ConfettiButton from "@/app/components/ui/ConfettiButton";

const BuyYD = () => {
  const [amount, setAmount] = useState("10");
  const [usdEquivalent, setUsdEquivalent] = useState("20.23");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg ml-6 mt-6">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold text-primary-dark">Buy YD Tokens</h2>
        <div className="flex items-center justify-between shadow-md">
          <div className="flex items-baseline mx-2">
            <span className="text-gray-400 text-sm mr-1">Your Balance:</span>
            <span className="text-accent-purple text-2xl font-bold mr-1">
              0
            </span>
            <span className="text-gray-200 text-xs">YD</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 bg-gray-800 p-4 rounded-lg bg-opacity-60 mt-5">
        <div className="flex items-center mb-4">
          {" "}
          {/* 确保使用 items-center */}
          <div className="flex flex-col justify-center">
            {" "}
            {/* 使用 flex-col 使内容垂直居中 */}
            <p className="text-gray-400 text-sm">You pay</p>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="bg-gray-700 text-white w-32 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <span className="absolute text-xs text-gray-200 bottom-1 right-1">
                USD
              </span>
            </div>
          </div>
          <div className="mx-2 mt-4">
            <ChevronsRight className="h-4 w-4 text-primary-light animate-move-right" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-sm">You get</p>
            <div className="relative">
              <input
                type="number"
                value={usdEquivalent}
                onChange={handleAmountChange}
                className="bg-gray-700 text-white w-32 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <span className="absolute text-xs text-gray-200 bottom-1 right-1">
                YD
              </span>
            </div>
          </div>
          <div className="ml-2 mt-5">
            <Button asChild>
              <ConfettiButton
                className="flex items-center gap-2 px-4 rounded-full"
                confettiText="Bought!"
              >
                <span>Buy</span>
              </ConfettiButton>
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600 border-t border-gray-700 shadow-inner pt-2">
          YD tokens can be used to purchase courses and other services
        </p>
      </div>
    </div>
  );
};

export default BuyYD;
