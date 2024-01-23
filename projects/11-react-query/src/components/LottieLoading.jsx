import Lottie from "lottie-react";
import animation from "../assets/animations/pokeball.json";

import './LottieLoading.css'

const LottieLoading = () => {
  return (
    <div className="loading-animation">
  <Lottie className="animation" animationData={animation}  />
</div>


  )

}
export default LottieLoading;