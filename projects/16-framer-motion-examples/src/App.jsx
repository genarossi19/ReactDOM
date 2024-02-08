import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  odd: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  even: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className=" flex flex-wrap item-center justify-center">
      <div className="w-72 h-72 bg-noe mb-4 overflow-hidden">
        <motion.div
          id="box"
          className=" h-36 w-36 place-content-center grid rounded-md m-3"
          animate={counter % 2 === 0 ? "even" : "odd"}
          variants={variants}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <h1 className="text-3xl">{counter}</h1>
        </motion.div>
      </div>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="w-full h-full bg-slate-700 hover:bg-slate-800 transition-all duration-300 px-4 py-1 rounded-md mb-3 "
      >
        Count+
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="w-full h-full bg-slate-700 hover:bg-slate-800 transition-all duration-300 px-4 py-1 rounded-md "
      >
        Count-
      </button>
    </div>
  );
}

export default App;
