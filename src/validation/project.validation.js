import * as Yup from "yup";

export const projectValidationSchema = Yup.object().shape({
  id: Yup.string().required("ID is required"),
  name: Yup.string().required("Name is required"),
  startDate: Yup.date()
    .required("Start date is required")
    .nullable()
    .typeError("Start date must be a valid date"),
  endDate: Yup.date()
    .required("End date is required")
    .nullable()
    .typeError("End date must be a valid date")
    .min(Yup.ref("startDate"), "End date must be after start date"),
});
