import "./App.css";
import AttaimentsPage from "./components/AttainmentsPage/attainments-page";
import EducationPage from "./components/EducationPage/education-page";
import InformationPage from "./components/InformationPage/information-page";
import MainPage from "./components/MainPage/main-page";
import PortfolioPage from "./components/PortfolioPage/portfolio-page";

function App() {
  return (
    <div>
      <MainPage />
      <InformationPage />
      <AttaimentsPage />
      <EducationPage />
      <PortfolioPage />
    </div>
  );
}

export default App;
