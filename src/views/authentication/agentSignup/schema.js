import * as Yup from "yup";
export const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  export const validationSchema = Yup.object().shape({
    userName: Yup.string().required("User name is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .matches(
        /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$|^[0-9]+$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
  });