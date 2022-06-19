import "./App.css";
import UserDetailProvider from "./context/UserDetailContext";
import Homepage from "./component/homepage/Homepage";

const App = () => {
  return (
    <UserDetailProvider>
      <Homepage />
    </UserDetailProvider>
  );
};

export default App;
