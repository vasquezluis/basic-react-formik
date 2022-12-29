import { useState } from "react";
import { Formik, Field } from "formik";

function Form() {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <div className="w-full max-w-xs">
      {/* initialValues son los valores iniciates de los input */}
      {/* onSubmit es la funcion que se ejecuta en el envio de datos, los parametros son el objetos de datos del usuario */}
      {/* validate es la funcion para validar datos */}
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          pais: "",
          sexo: "",
          mensaje: "",
        }}
        validate={(valores) => {
          let errors = {};

          // validar usuario
          if (!valores.username) {
            errors.nombre = "ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
            errors.nombre = "el nombre solo puede contener letras y espacios";
          }

          // validar contrasena
          if (!valores.password) {
            errors.contrasena = "ingresa una contrasena";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.password)) {
            errors.contrasena =
              "el nombre solo puede contener letras y espacios";
          }

          // validar correo
          if (!valores.email) {
            errors.correo = "ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errors.correo = "el correo no es valido";
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          resetForm();
          setFormularioEnviado(true);
          setTimeout(() => {
            setFormularioEnviado(false);
          }, 5000);
        }}
      >
        {/* funcion, dentro va a ir el formulario */}
        {/* handleSubmit es de formik | maneja el envio de datos */}
        {/* handleChange maneja el cambio en cada input en automatico */}
        {/* handleBlur es la funcion que se ejecuta cuando el cursor sale del input, valida datos */}
        {/* errors maneja los errores con la funcion validate */}
        {/* touched identifica si un elemento del input fue tocado */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
              />
              {/* si el nombre de ususario fue tocado y existe algun error, imprimir el error */}
              {touched.username && errors && (
                <span className="text-red-500">{errors.nombre}</span>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {/* si el password fue tocado y existe algun error, imprimir el error */}
              {touched.password && errors && (
                <span className="text-red-500">{errors.contrasena}</span>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {/* si el email fue tocado y existe algun error, imprimir el error */}
              {touched.email && errors && (
                <span className="text-red-500">{errors.correo}</span>
              )}
            </div>
            <div className="mb-6">
              <Field name="pais" as="select">
                <option value="mexico">mexico</option>
                <option value="guatemala">guatemala</option>
                <option value="argentina">argentina</option>
              </Field>
            </div>
            <div className="mb-6">
              <label>
                <Field type="radio" name="sexo" value="mujer" />
                Hujer
              </label>
              <label>
                <Field type="radio" name="sexo" value="hombre" />
                Hombre
              </label>
            </div>
            <div className="mb-6">
              <Field
                name="mensaje"
                as="textarea"
                placeholder="escribir un mensaje aqui"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>

            {/* Mensaje de exito, cuando el formulario si se envia */}
            {formularioEnviado && (
              <p className="text-green-600">Formulario enviado con exito</p>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
