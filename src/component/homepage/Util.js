export const filteredUserList = (userList, text) => {
    return userList.filter(
        (user) =>
        user.name.toLowerCase().includes(text.toLowerCase()) ||
        user.skill.toLowerCase().includes(text.toLowerCase()) ||
        user.address.toLowerCase().includes(text.toLowerCase()) ||
        user.id.toString().includes(text.toLowerCase())
    );
};