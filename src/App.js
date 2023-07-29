import { Route, Switch } from "react-router-dom";
import UsersSwitch from "./layouts/usersSwitch";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import Login from "./layouts/login";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/users:userId?" component={UsersSwitch} />
            </Switch>
        </div>
    );
};

export default App;
