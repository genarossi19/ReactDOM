/* eslint-disable react/prop-types */
import dice from "../assets/dice.svg";

function Card({quotes, getQuotes}) {
  const {id, advice} = quotes
  return (
    <div
      className="bg-bg-200 rounded-2xl p-7 max-w-lg text-center flex flex-col items-center justify-center m-7 "
      id="card"
    >
      <h5
        id="quotes-title"
        className="text-primary-100 text-xs tracking-wide uppercase my-4"
      >
        Advice #{id}
      </h5>
      <p id="quotes" className="text-3xl font-extrabold py-3">
       “ {advice} ”
      </p>
      <div className="flex items-center w-full my-5 " id="separator">
        <hr className="border-0 h-px w-full bg-[#e0e0e0]" />
        <div
          id="vertical"
          className="h-6 w-5 bg-[#e0e0e0] rounded-xl mx-2"
        ></div>
        <div
          id="vertical"
          className="h-6 w-5 bg-[#e0e0e0] rounded-xl mx-2"
        ></div>
        <hr className="border-0 h-px w-full bg-[#e0e0e0]" />
      </div>

      <div
        id="dice-button"
        onClick={()=>getQuotes()}
        className="flex items-center bg-primary-100 rounded-full p-4 my-4 cursor-pointer "
      >
        <img src={dice} alt="dice" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Card;
