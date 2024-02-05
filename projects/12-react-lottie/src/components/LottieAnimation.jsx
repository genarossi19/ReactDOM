import Lottie from "lottie-react";
import animation from "../assets/animations/pokeball.json";

import './LottieAnimation.css'

const Example = () => {
  return (
    <div className="loading-animation">
  <Lottie className="animation" animationData={animation}  />
</div>


  )

}
export default Example;