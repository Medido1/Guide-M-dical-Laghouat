import { useEffect, useState } from "react";
import useClipboard from "./Utility";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function DoctorFalcility({item}) {
  const { copyToClipboard, copied } = useClipboard();
  const [isSelected, setIsSelecetd] = useState("");
  const [showMore, setShowMore] = useState(false);

  function selectAndCopy(element) {
    copyToClipboard(element)
    setIsSelecetd(element)
  }

  const {name, speciality, adress, phone, email, moreInfo} = item;
  
  return (
    <div className="bg-white p-2 mt-2 mb-4 rounded-lg
      flex flex-col gap-2 items-center justify-center">
      <h2 className="text-lg font-bold">
        {name}
      </h2>
      <p>
        {speciality}
      </p>
      <p className="text-center">{adress} <FaLocationDot className="inline-block"/></p>
      <div className="flex gap-2 items-center">
        <p
          className="cursor-pointer"
          /* onClick={() => copyToClipboard(`${phone}`)} */
          onClick={() => selectAndCopy(`${phone}`)}
        >
          <FaPhoneVolume className="inline-block" /> {phone}
        </p>
        {copied && isSelected == `${phone}` && <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>
      <div className="flex gap-2 items-center">
        <p
          className="cursor-pointer"
          onClick={() => selectAndCopy(`${email}`)}
        >
          <MdEmail  className="inline-block" /> {email}
        </p>
        {copied && isSelected == `${email}` && <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>  
      <button
        onClick={() => setShowMore(prev => !prev)}
        type="button"
        className="px-4 bg-blue-200 font-bold rounded-full" 
      >
        {showMore ? "Afficher moin" : "Afficher plus"}
      </button>
      {showMore && 
        <div>
          <p>
            {moreInfo}
          </p>
        </div>
      }
    </div>
  )
}

export default DoctorFalcility;