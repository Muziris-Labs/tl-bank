"use client";

import { useState } from "react";
import { Input } from "@material-tailwind/react";

const AddContributorsItem = ({ selectedContributor, onAmountChange }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBlur = () => {
    onAmountChange(selectedContributor, amount);
  };

  return (
    <div className="space-y-2">
      <p className="text-gray-400">{selectedContributor}</p>

      <Input
        color="white"
        type="number"
        label="Amount"
        value={amount}
        onChange={handleAmountChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default AddContributorsItem;
