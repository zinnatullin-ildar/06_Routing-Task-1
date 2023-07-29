import { useParams } from "react-router-dom";
import UsersList from "../components/usersList";
import UserPage from "./userPage";

const UsersSwitch = () => {
    const { userId } = useParams();

    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
    // если выбран юзер по id, рендерим карточку юзера, если нет, то всех юзеров
};

export default UsersSwitch;
