import "./BasicFormYUP.css";
import { useField } from "formik";
import React from "react";

function CustomInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomInput;
