import React from "react";

interface InputFormProductProps {
  className?: string;
  id?: number;
  name: string;
  htmlFor: string;
  label: string;
  type: "text" | "number"
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 👈 typed onChange
}

const InputFormProduct = (props: InputFormProductProps) => {
  const { name, htmlFor, label, type, placeholder, className, value, onChange } = props;

  return (
    <div className="flex flex-col p-4 gap-2">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputFormProduct;
