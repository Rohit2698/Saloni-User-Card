import React, { useContext, useState } from "react";
import { UserDetailContext } from "../../context/UserDetailContext";
import SearchHeader from "../searchbar/SearchHeader";
import UserList from "../userlist/UserList";
import { Grid } from "@mui/material";
import { filteredUserList } from "./Util";

const Homepage = () => {
  const { usersList } = useContext(UserDetailContext);

  const [searchText, setSearchText] = useState("");

  return (
    <Grid container padding={"50px"} justifyContent={"center"}>
      <Grid item xs={10}>
        <Grid container spacing={"20px"}>
          <Grid item xs={12}>
            <SearchHeader
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Grid>
          <Grid item xs={12}>
            <UserList usersList={filteredUserList(usersList, searchText)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
