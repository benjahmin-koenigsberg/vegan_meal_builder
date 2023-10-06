import { useContext } from "react";
import FoodContext from "./context/FoodContext";
import Header from "./components/Header";
import Dish from "./components/Dish";
import BowlOptions from "./components/BowlOptions";
import FoodContent from "./components/FoodContent";
import FoodStats from "./components/FoodStats";
import InfoModal from "./components/InfoModal";
import "./App.css";

function App() {


const { food } = useContext(FoodContext)

  return (
    <>
      <div className="container" >
      <Header />
      <form>
      <Dish />
      { food.dish === "bowl" ? <BowlOptions /> : " " }
      </form>
      <div className="foodInfo-component-container">
      <FoodContent />
      <FoodStats />
      <InfoModal />
        </div>
      </div>
    </>
  );
}

export default App;
