import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const isVisible = true
  return (

    
    <AnimatePresence>
      {isVisible &&  (
          <motion.div className="w-[150px] h-[150px] bg-white rounded-md" 
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{duration: 2 }} 
          />
      )}
       

    </AnimatePresence>
   
  );
}

export default App;
