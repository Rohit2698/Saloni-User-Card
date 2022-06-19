export const getAllUserList = () => {
    const userList = localStorage.getItem("usersList");
    if (userList) {
        return JSON.parse(userList);
    }
    return [];
};