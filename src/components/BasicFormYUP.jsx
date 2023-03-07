import { useFormik } from "formik";
import { basicSchema } from "../schemas";

import "./BasicFormYUP.css";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(values)

  actions.resetForm();
};

function Form() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email" className="pr-2">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="age" className="pr-2">
            Age
          </label>
          <input
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="age"
            id="age"
            placeholder="Enter your age"
            className={errors.age && touched.age ? "input-error" : ""}
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="pr-2">
            Password
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="confirmPassword" className="pr-2">
            Confirm Password
          </label>
          <input
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="rounded font-bold cursor-pointer px-2 py-1 bg-green-400"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
