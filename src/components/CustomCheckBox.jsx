import "./BasicFormYUP.css";
import { useField } from "formik";
import React from "react";

function CustomCheckBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckBox;
