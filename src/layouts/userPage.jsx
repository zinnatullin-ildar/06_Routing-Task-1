import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((user) => setUser(user));
    }, []);

    // if (!user) return <h2>Loader...</h2>;

    return (
        <div>
            <h2>Имя: {user.name}</h2>
            <p>Профессия: {user.profession.name}</p>
            <p>Рейтинг: {user.rate}</p>
        </div>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
