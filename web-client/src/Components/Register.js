import React, { useState } from "react";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { convertBase64Format } from "./Helper/Convert";
import { registerValidation } from "./Helper/Validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faBuilding,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "../Components/Styles.css";
import avatar from "../Assets/user.jpg";
const Register = () => {
  const [file, setFile] = useState("");
  const formik = useFormik({
    initialValues: {
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
    validate: registerValidation,
    onSubmit: async (values) => {
    
    if (values.firstname === "" || values.lastname === "" || values.email === "" || !/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(values.email) || values.mobile === "" || !/^[6-9]\d{9}$/gi.test(values.mobile)) {
        return;
      } else {
        values = Object.assign(values, {profile:file || ""})
        console.log(values);
      }
    },
  });
  const upload = async (e) => {
    const base64 = await convertBase64Format(e.target.files[0]);
    console.log(base64);
    setFile(base64);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder></Toaster>
      <div
        class="card mx-auto"
        style={{
          width: "45%",
          boxShadow: "5px 5px 15px grey",
          padding: "30px",
          marginTop: "120px",
        }}
      >
        <h3 className="mb-2" style={{ textAlign: "center", color: "#0b82bd" }}>
          Register Form
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <img
              className="mx-auto"
              src={file || avatar}
              alt="avatar"
              style={{
                width: "150px",
                height: "120px",
                borderRadius: "50px",
              }}
            />
            <label htmlFor="profile">
              <input
                className="mb-2"
                type="file"
                id="profile"
                name="profile"
                onChange={upload}
              />
            </label>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="input-group">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    backgroundColor: "rgb(180, 180, 180)",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("firstname")}
                  type="text"
                  placeholder="firstname..."
                  className="form-control col-6"
                />
              </div>
            </div>
            <div className="col-6">
              <div className=" input-group">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    backgroundColor: "rgb(180, 180, 180)",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("lastname")}
                  type="text"
                  placeholder="lastname..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-2">
              <div className="input-group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    padding: "11px",
                    backgroundColor: "rgb(180, 180, 180)",
                    fontSize: "20px",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("email")}
                  type="text"
                  placeholder="email..."
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6 mt-2">
              <div className="input-group">
                <FontAwesomeIcon
                  icon={faLock}
                  style={{
                    padding: "11px",
                    background: "rgb(180, 180, 180)",
                    fontSize: "20px",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("password")}
                  type="text"
                  placeholder="password..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-2">
              <div className="input-group">
                <FontAwesomeIcon
                  icon={faBuilding}
                  style={{
                    padding: "11px",
                    backgroundColor: "rgb(180, 180, 180)",
                    fontSize: "20px",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("organization")}
                  type="text"
                  placeholder="organization..."
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6 mt-2">
              <div className="input-group">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    padding: "11px",
                    fontSize: "20px",
                    backgroundColor: "rgb(180, 180, 180)",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("mobile")}
                  type="text"
                  placeholder="mobile..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="input-group">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{
                    padding: "11px",
                    backgroundColor: "rgb(180, 180, 180)",
                    fontSize: "20px",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                />
                <input
                  {...formik.getFieldProps("address")}
                  type="text"
                  placeholder="address..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="registerButton"
            className="form-control mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
