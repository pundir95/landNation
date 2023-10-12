import * as Yup from "yup";
export const initialValues = {
    password: "",
    email: "",
  };

  export const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
    password: Yup.string().required("Password is required"),
  });