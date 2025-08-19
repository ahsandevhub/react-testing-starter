import { useState } from "react";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Terms & Conditions</h1>

      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
        delectus.
      </p>

      <div className="mb-4">
        <label
          htmlFor="agree"
          className="inline-flex items-center cursor-pointer text-sm text-gray-700"
        >
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>I accept the terms and conditions.</span>
        </label>
      </div>

      <button
        disabled={!isChecked}
        className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Submit
      </button>
    </div>
  );
};

export default TermsAndConditions;
