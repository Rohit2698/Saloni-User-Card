import React from "react";
import { Grid } from "@mui/material";
import UserCard from "./UserCardInfo";
import NoImage from "../../images/noimage.jpg";
import { StyledCardInfoContainer } from "./Style";
import { getSkillValue } from "./Util";

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
    <Grid
      container
      alignItems={"stretch"}
      height={["auto", "100%"]}
      gap={"20px"}
    >
      {usersList.map((item) => (
        <Grid height={"100%"} item key={item.id} xs={12} sm={4} md={3}>
          <StyledCardInfoContainer
            elevation={2}
            height={"100%"}
            backgroundcolor={getSkillValue[item.skill].color}
          >
            <UserCard userInfo={item} />
          </StyledCardInfoContainer>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
