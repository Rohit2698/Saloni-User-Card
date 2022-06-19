import React, { useState } from "react";
import { Grid } from "@mui/material";
import { StyledPrimaryButton, StyledTextfield } from "./Style";
import AddUserModal from "../adduser/AddUserModal";

const SearchHeader = ({ searchText, setSearchText }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Grid container spacing={"10px"}>
      <Grid item xs={10}>
        <StyledTextfield
          placeholder="Search User"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <StyledPrimaryButton
          onClick={() => setOpenModal(true)}
          fullWidth
          variant="contained"
        >
          Add
        </StyledPrimaryButton>
      </Grid>
      {openModal && <AddUserModal handleClose={() => setOpenModal(false)} />}
    </Grid>
  );
};

export default SearchHeader;
