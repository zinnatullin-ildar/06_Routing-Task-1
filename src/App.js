import { Route } from "react-router-dom";

import Users from "./layouts/users";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import Login from "./layouts/login";
import UserPage from "./layouts/userPage";

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/id" component={UserPage} />
        </div>
    );
};

export default App;
