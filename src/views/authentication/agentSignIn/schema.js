import * as Yup from "yup";
export const initialValues = {
    password: "",
    email: "",
  };

  export const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$|^[0-9]+$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });