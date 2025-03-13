// import { useFormik } from "formik";
// import validationSchema from "./Validate";
// import { useState } from "react";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   //   Text: false,
// };

// const Registration = () => {
//   const [submitted, setSubmitted] = useState(null);

//   const { handleChange, errors, handleSubmit, values } = useFormik({
//     initialValues: initialValues,
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       setSubmitted(values);
//       console.log(values);
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="input-block">
//           <label htmlFor="name" className="input-label">
//             Name
//           </label>
//           <input
//             type="text"
//             autoComplete="off"
//             name="name"
//             id="name"
//             placeholder="Name"
//             value={values.name}
//             onChange={handleChange}
//           />
//           <p className="error" style={{ color: "red" }}>
//             {errors.name}
//           </p>
//         </div>

//         <div className="input-block">
//           <label htmlFor="email" className="input-label">
//             Email
//           </label>
//           <input
//             type="email"
//             autoComplete="off"
//             name="email"
//             id="email"
//             placeholder="Email"
//             value={values.email}
//             onChange={handleChange}
//           />
//           <p className="error" style={{ color: "red" }}>
//             {errors.email}
//           </p>
//         </div>

//         <div className="input-block">
//           <label htmlFor="password" className="input-label">
//             Password
//           </label>
//           <input
//             type="password"
//             autoComplete="off"
//             name="password"
//             id="password"
//             placeholder="Password"
//             value={values.password}
//             onChange={handleChange}
//           />
//           <p className="error" style={{ color: "red" }}>
//             {errors.password}
//           </p>
//         </div>

//         <div className="input-block">
//           <input
//             type="checkbox"
//             name="Text"
//             id="text"
//             checked={values.Text}
//             onChange={handleChange}
//           />
//           <label htmlFor="text">Text</label>
//         </div>

//         <button type="submit">Submit</button>

//         {/* {submitted ? (
//         <div>
//           <h3>Submitted Data:</h3>
//           <p>Entered Name: {values.name}</p>
//           <p>Entered Email: {values.email}</p>
//           <p>Entered Password: {values.password}</p>
//           <p>CheckBox: {values.Text ? "Yes" : "No"}</p>
//         </div>
//       ) : (
//         <p>No Data Submitted</p>
//       )} */}
//       </form>

//       {submitted && (
//         <div>
//           <h3>Submitted Data:</h3>
//           <p>Name: {submitted.name}</p>
//           <p>Email: {submitted.email}</p>
//           <p>Password: {submitted.password}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Registration;

import { Formik, Field, Form } from "formik";
import validationSchema from "./Validate";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  Text: false,
};

const Registration = () => {
  const [submitted, setSubmitted] = useState(null);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setSubmitted(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="input-block">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <Field
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                className="input-field"
              />
              {errors.name && touched.name && (
                <p className="error" style={{ color: "red" }}>
                  {errors.name}
                </p>
              )}
            </div>

            <div className="input-block">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <Field
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                className="input-field"
              />
              {errors.email && touched.email && (
                <p className="error" style={{ color: "red" }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="input-block">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <Field
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                className="input-field"
              />
              {errors.password && touched.password && (
                <p className="error" style={{ color: "red" }}>
                  {errors.password}
                </p>
              )}
            </div>

            <div className="input-block">
              <Field
                type="checkbox"
                name="Text"
                id="text"
                className="checkbox-field"
              />
              <label htmlFor="text">Text</label>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      {submitted && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
          <p>Text Checkbox: {submitted.Text ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default Registration;
