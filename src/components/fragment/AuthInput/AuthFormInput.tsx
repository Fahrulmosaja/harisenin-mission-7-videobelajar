import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}

interface AuthInputProps {
  name: string;
  htmlFor: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: Option[];
}

const AuthFormInput: React.FC<AuthInputProps> = ({
  name,
  htmlFor,
  label,
  type,
  placeholder,
  options,
}) => {
  const [showPassword, setShowPassword] = useState(type !== 'password');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative flex flex-col w-full h-full gap-2">
      <label
        className="text-base font-dmsans after:content-['*'] after:text-red-500 font-light text-textDark-primary"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <div className="relative">
        {type === "select" && options ? (
          <select
            id={htmlFor}
            name={name}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main-primary"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main-primary"
            id={htmlFor}
            name={name}
            type={showPassword ? '' : type}
            placeholder={placeholder}
          />
        )}
        {type === 'password' && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default AuthFormInput;