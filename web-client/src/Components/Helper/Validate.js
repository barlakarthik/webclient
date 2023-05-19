import Toast from "react-hot-toast";
export const registerValidation = async (values) => {
  validateUsername({}, values);
  validateLastname({}, values);
  validateEmail({}, values);
  validateMobile({}, values);
  validatePassword({}, values);
};
const validateUsername = (error = {}, values) => {
  if (!values.firstname) {
    error.firstname = Toast.error("firstname required...!");
  } else if (values.firstname.includes(" ")) {
    error.firstname = Toast.error("invalid firstname...!");
  }
  return error;
};
const validateLastname = (error = {}, values) => {
  if (!values.lastname) {
    error.lastname = Toast.error("lastname required...!");
  } else if (values.lastname.includes(" ")) {
    error.lastname = Toast.error("invalid lastname...!");
  }
  return error;
};
const validateEmail = (error = {}, values) => {
  if (!values.email) {
    error.email = Toast.error("email reqired...!");
  } else if (values.email.includes(" ")) {
    error.email = Toast.error("email should not consists of spaces..!");
  } else if (
    !/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(values.email)
  ) {
    error.email = Toast.error("invalid email...!");
  }
};
const validateMobile = (error = {}, values) => {
  if (!values.mobile) {
    error.mobile = Toast.error("please provide mobile number...!");
  } else if (!/^[6-9]\d{9}$/gi.test(values.mobile)) {
    error.mobile = Toast.error("invalid mobile number");
  }
  return error;
};
const validatePassword = (error={},values) => {
  if (!values.password) {
    error.password = Toast.error("please provide password...!");
  } else if (values.password.includes(" ")) {
    error.password = Toast.error("password should not consists spaces...!");
  } else if (values.password.length < 8) {
    error.password = Toast.error("password must be more than 8 characters");
  }
};
