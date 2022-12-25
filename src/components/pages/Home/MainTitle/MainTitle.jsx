import "./MainTitle.scss";
import flowerOne from "./../../../../assets/img/main-title/One.png";
import flowerTwo from "./../../../../assets/img/main-title/Two.png";
import flowerThree from "./../../../../assets/img/main-title/Three.png";
import flowerFour from "./../../../../assets/img/main-title/Four.png";
import flowerFive from "./../../../../assets/img/main-title/Five.png";
import flowerSix from "./../../../../assets/img/main-title/Six.png";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../utils/urls";
export const MainTitle = () => {
  return (
    <>
      <div className="main-title-container">
        <div className="main-title-text">
          <h1 className="main-title-h2">
            Flowers, 🌻
            <br /> what the world needs{" "}
          </h1>
          <p className="main-title-p">Browse between hounders of flowers</p>
          <Link to={PATHS.shop}>
            <button className="browse-btn">Browse</button>
          </Link>
        </div>
        <div className="main-title-img">
          <img src={flowerOne} alt="Flower 1" />
          <img src={flowerTwo} alt="Flower 2" />
          <img src={flowerThree} alt="Flower 3" />
          <img src={flowerFour} alt="Flower 4" />
          <img src={flowerFive} alt="Flower 5" />
          <img src={flowerSix} alt="Flower 6" />
        </div>
      </div>
    </>
  );
};
