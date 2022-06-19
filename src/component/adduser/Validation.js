import { object, string } from "yup";

export const addModalInitialValues = {
    name: "",
    skill: "",
    address: "",
};

export const addModalValidationSchema = object().shape({
    name: string().required("Name is required"),
    skill: string().required("Skill is required"),
    address: string().required("Address is required"),
});