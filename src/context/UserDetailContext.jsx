import React, { createContext, useEffect, useState } from "react";
import { getAllUserList } from "../util/SiteUtil";

export const UserDetailContext = createContext();

const UserDetailProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList(getAllUserList());
  }, []);

  const addNewUser = (user) => {
    setUsersList([...usersList, user]);
    localStorage.setItem("usersList", JSON.stringify([...usersList, user]));
  };

  const removeUser = (id) => {
    const newList = usersList.filter((item) => item.id !== id);
    setUsersList(newList);

    localStorage.setItem("usersList", JSON.stringify(newList));
  };

  const value = {
    usersList,
    setUsersList,
    addNewUser,
    removeUser,
  };

  return (
    <UserDetailContext.Provider value={value}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailProvider;
