import { Lottie } from "react-lottie";

function LottieLoading({ alto, ancho, animacion }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };

  return (
    <Lottie
      options={defaultOptions}
      height={alto}  
      width={ancho}
      isClickToPauseDisabled
    />
  );
}

export default LottieLoading;
