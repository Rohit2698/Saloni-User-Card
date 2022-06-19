import React, { useContext } from "react";
import {
  Dialog,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import {
  Header2,
  InputFieldLabel,
  SecondaryButton,
  StyledInputField,
} from "./Style";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";
import { addModalInitialValues, addModalValidationSchema } from "./Validation";
import { skillOptions } from "../../options/SiteOptions";
import { UserDetailContext } from "../../context/UserDetailContext";

const AddUserModal = ({ handleClose }) => {
  const { addNewUser, usersList } = useContext(UserDetailContext);

  const formik = useFormik({
    initialValues: addModalInitialValues,
    validationSchema: addModalValidationSchema,
    validateOnMount: false,
    onSubmit: (values) => {
      addNewUser({
        id: 1000 + usersList.length + 1,
        name: values.name,
        address: values.address,
        skill: values.skill,
      });
      handleClose();
    },
  });

  return (
    <Dialog
      fullWidth
      open
      maxWidth={"sm"}
      onClose={handleClose}
      PaperProps={{
        style: {
          padding: 20,
        },
      }}
    >
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Header2>Add</Header2>
        </Grid>
        <Grid item>
          <AiOutlineClose style={{ fontSize: 20, cursor: "pointer" }} />
        </Grid>
      </Grid>
      <Grid item xs={12} marginTop={"20px"}>
        <InputFieldLabel marginBottom={"10px"}>Name</InputFieldLabel>

        <StyledInputField
          fullWidth
          placeholder="Enter Name"
          name={"name"}
          error={formik.errors.name && formik.touched.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          variant={"outlined"}
          helperText={
            formik.errors.name && formik.touched.name ? formik.errors.name : ""
          }
        />
      </Grid>
      <Grid item xs={12} marginTop={"20px"}>
        <InputFieldLabel marginBottom={"10px"}>Skill</InputFieldLabel>
        <FormControl
          fullWidth
          error={formik.errors.skill && formik.touched.skill}
        >
          <Select
            fullWidth
            value={formik.values.skill}
            name={"skill"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={
              formik.errors.skill && formik.touched.skill
                ? formik.errors.skill
                : ""
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {skillOptions.map(({ id, value }) => (
              <MenuItem key={id} value={id}>
                {value}
              </MenuItem>
            ))}
          </Select>
          {formik.errors.skill && formik.touched.skill && (
            <FormHelperText>{formik.errors.skill}</FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12} marginTop={"20px"}>
        <InputFieldLabel marginBottom={"10px"}>Address</InputFieldLabel>
        <StyledInputField
          fullWidth
          name={"address"}
          onChange={formik.handleChange}
          placeholder="Enter Address"
          value={formik.values.address}
          error={formik.errors.address && formik.touched.address}
          variant={"outlined"}
          onBlur={formik.handleBlur}
          helperText={
            formik.errors.address && formik.touched.address
              ? formik.errors.address
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} marginTop={"20px"}>
        <SecondaryButton onClick={() => formik.handleSubmit()} fullWidth>
          Add
        </SecondaryButton>
      </Grid>
    </Dialog>
  );
};

export default AddUserModal;
