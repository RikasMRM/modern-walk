import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        />
      </label>
      <br />
    </div>
  );
};

export default FormField;
