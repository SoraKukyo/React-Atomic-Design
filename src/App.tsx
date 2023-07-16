import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AuthForm from "./components/Molecules/AuthForm";
import AuthBox from "./components/Organisms/AuthBox";
import Button from "./components/atoms/Button";
import CheckBox from "./components/atoms/CheckBox";
import Input from "./components/atoms/Input";
import ListItem from "./components/atoms/ListItem";
import Search from "./components/atoms/Search";
import { ReactComponent as SearchIcon } from "./logo.svg";

function App() {
  const handleCheckboxChange = (e: any) => {
    // setRememberMe(checked);
  };
  return <AppRouter />;
}

export default App;
