import dice from "../assets/dice.svg";

function Card() {
  return (
    <div
      className="bg-bg-200 rounded-2xl p-7 max-w-lg text-center flex flex-col items-center justify-center m-7 "
      id="card"
    >
      <h5 id="quotes-title" className="text-primary-100 text-xs tracking-wide uppercase my-4">
        Advice #19
      </h5>
      <p id="quotes" className="text-3xl font-extrabold py-3">
        <blockquote>
          “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          dolorem.”
        </blockquote>
      </p>
      <div className="" id="separator">
        <hr />
        <div id="vertical"></div>
        <div id="vertical"></div>
        <hr />
      </div>

      <div id="dice-button">
        <img src={dice} alt="dice" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default Card;
