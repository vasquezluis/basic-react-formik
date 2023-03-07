import { Field, Formik, Form } from "formik";
import React from "react";
import { advanceSchema } from "../schemas";
import CustomCheckBox from "./CustomCheckBox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  actions.resetForm();
};

function AdvanceForm() {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advanceSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="UserName"
            name="username"
            type="text"
            placeholder="Enter your username"
          />

          <CustomSelect
            label="Job Type"
            name="jobType"
            type="text"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </CustomSelect>

          <CustomCheckBox name="acceptedTos" type="checkbox" />

          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvanceForm;
