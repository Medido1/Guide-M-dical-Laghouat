import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

function Helper() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div 
      onClick={() => setIsClicked(!isClicked)}
      className={`cursor-pointer p-2 bg-blue-200 flex flex-col md:flex-row items-center gap-2
        transition-all duration-300
      ${isClicked ? "rounded-xl" : "rounded-[50%]"}`}>
      <FaQuestion />
      {isClicked && 
        <p className="text-center">
          Cliquez sur l'adresse écrite en bleu pour obtenir la localisation.
        </p>
      }
    </div>
  )
}

export default Helper;