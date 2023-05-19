import React from "react";
import { useFormik } from "formik";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      organization: "",
      mobile: "",
      address: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      {/* <Toaster position="top-center" reverseOrder></Toaster> */}
      <div
        class="card mx-auto"
        style={{
          width: "45%",
          boxShadow: "5px 5px 15px grey",
          padding: "30px",
          marginTop: "180px",
        }}
      >
        <h3 className='mb-2' style={{textAlign:"center"}}>Register Form</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                {...formik.getFieldProps("firstname")}
                type="text"
                placeholder="firstname..."
                className="form-control col-6"
              />
            </div>
            <div className="col-6">
              <input
                {...formik.getFieldProps("lastname")}
                type="text"
                placeholder="lastname..."
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                {...formik.getFieldProps("email")}
                type="text"
                placeholder="email..."
                className="form-control mt-2"
              />
            </div>
            <div className="col-6">
              <input
                {...formik.getFieldProps("password")}
                type="text"
                placeholder="password..."
                className="form-control mt-2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                {...formik.getFieldProps("organization")}
                type="text"
                placeholder="organization..."
                className="form-control mt-2"
              />
            </div>
            <div className="col-6">
              <input
                {...formik.getFieldProps("mobile")}
                type="text"
                placeholder="mobile..."
                className="form-control mt-2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                {...formik.getFieldProps("address")}
                type="text"
                placeholder="address"
                className="form-control mt-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="form-control mt-2 btn btn-outline-primary"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
