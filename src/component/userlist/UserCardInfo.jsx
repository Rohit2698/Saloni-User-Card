import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Header1, SubText } from "./Style";
import { AiOutlineClose } from "react-icons/ai";
import { getSkillValue } from "./Util";
import { UserDetailContext } from "../../context/UserDetailContext";

const UserCard = ({ userInfo }) => {
  const { name, id, skill, address } = userInfo;
  const { removeUser } = useContext(UserDetailContext);

  return (
    <Grid paddingBottom={["40px", "0px"]} gap={"30px"} container>
      <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
        <AiOutlineClose
          onClick={() => removeUser(id)}
          style={{ fontSize: 20, color: "white", cursor: "pointer" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Header1 textAlign={"center"}>{name}</Header1>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Header1>
              ID: <SubText>{id}</SubText>
            </Header1>
          </Grid>
          <Grid item>
            <Header1>
              Skill: <SubText>{getSkillValue[skill].value}</SubText>
            </Header1>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Header1>
          Address: <SubText>{address}</SubText>
        </Header1>
      </Grid>
    </Grid>
  );
};

export default UserCard;
