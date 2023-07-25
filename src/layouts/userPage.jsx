import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";

const UserPage = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.fetchAll().then((user) => setUser(user));
    }, []);

    return (
        <div>
            <div>
                <h2>Имя: {user.name}</h2>
                <p>Профессия: {user.profession.name}</p>
                {/* <p>Качества</p>
                 p>Встретился, раз</p> */}
                <p>Рейтинг: {user.rate}</p>
            </div>
        </div>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
