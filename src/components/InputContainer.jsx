import React from "react";
import { MIN_DATE, MAX_DATE } from "../constants/dateConstants";
import clsx from "clsx";

const InputContainer = React.forwardRef(
  (
    {
      onChange,
      id,
      value,
      type,
      labelText,
      placeHolder,
      defaultValue,
      isEditPage,
      isEditable,
    },
    ref
  ) => {
    const isDate = id === "date";
    const inputClasses = clsx(
      "border",
      "border-solid",
      "border-gray-200",
      "rounded-md",
      "w-36",
      "h-10",
      "p-2",
      {
        "mb-4 w-full": isEditPage,
      }
    );
    return (
      <div className="flex flex-col">
        <label className="text-sm mb-1" htmlFor={id}>
          {labelText}
        </label>
        <input
          className={inputClasses}
          id={id}
          disabled={!isEditable && isEditPage}
          onChange={onChange || undefined}
          value={value === undefined ? undefined : value}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeHolder}
          min={isDate ? MIN_DATE : undefined}
          max={isDate ? MAX_DATE : undefined}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputContainer;
