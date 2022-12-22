import UserName from "./UserName/user-name";
import UserPhoto from "./UserPhoto/user-photo";
import WorkDescription from "./WorkDescription/work-description";
import "./main-page.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <UserPhoto />
      <UserName />
      <WorkDescription />
    </div>
  );
};

export default MainPage;
