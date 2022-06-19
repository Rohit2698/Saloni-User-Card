import React from "react";
import { Grid } from "@mui/material";
import UserCard from "./UserCardInfo";
import NoImage from "../../images/noimage.jpg";

const UserList = ({ usersList }) => {
  if (usersList.length === 0) {
    return (
      <Grid container spacing={"20px"}>
        <img
          width={"100%"}
          style={{ aspectRatio: "16/9" }}
          src={NoImage}
          alt={"No item found"}
        />
      </Grid>
    );
  }
  return (
    <Grid container spacing={"20px"}>
      {usersList.map((item) => (
        <Grid item key={item.id} xs={3}>
          <UserCard userInfo={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
