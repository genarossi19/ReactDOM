import Lottie from "lottie-react";
import animation from "../assets/animations/pokeball.json";

import "./LottieLoading.css";
import { Fragment } from "react";

const LottieLoading = () => {
  return (
    <Fragment>
      <div className="loading-animation">
        <Lottie className="animation" animationData={animation} />
      </div>
    </Fragment>
  );
};
export default LottieLoading;
