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

  const {name, speciality, adress, phone,phone2,
    phone3, email, moreInfo} = item;
  
  return (
    <div className="bg-white p-2 mt-2 mb-4 rounded-lg
      flex flex-col gap-2 items-center justify-center">
      <h2 className="text-lg font-bold">
        {name}
      </h2>
      <p className="text-center">
        {speciality}
      </p>
      <p className="text-center">{adress} <FaLocationDot className="inline-block"/></p>
      <div className="flex gap-2 items-center">
        <p
          className="cursor-pointer"
          onClick={() => selectAndCopy(`${phone}`)}
        >
          <FaPhoneVolume className="inline-block" /> {phone}
        </p>
        {copied && isSelected == `${phone}` && <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>
      {phone2 &&
        <div className="flex gap-2 items-center">
          <p
            className="cursor-pointer"
            onClick={() => selectAndCopy(`${phone2}`)}
          >
            <FaPhoneVolume className="inline-block" /> {phone2}
          </p>
          {copied && isSelected == `${phone2}` && 
          <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>
      }
      {phone3 &&
        <div className="flex gap-2 items-center">
          <p
            className="cursor-pointer"
            onClick={() => selectAndCopy(`${phone3}`)}
          >
            <FaPhoneVolume className="inline-block" /> {phone3}
          </p>
          {copied && isSelected == `${phone3}` && 
          <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>
      }
      {email && 
        <div className="flex gap-2 items-center">
          <p
            className="cursor-pointer text-sm"
            onClick={() => selectAndCopy(`${email}`)}
          >
            <MdEmail  className="inline-block" /> {email}
          </p>
          {copied && isSelected == `${email}` && 
          <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div> 
      } 
      {moreInfo && (
        <>
          <button
            onClick={() => setShowMore(prev => !prev)}
            type="button"
            className="px-4 bg-blue-200 font-bold rounded-full">
            {showMore ? "Afficher moins" : "Afficher plus"}
          </button>
          {showMore && (
            <div>
              <p className="text-center">
                {moreInfo}
              </p>
            </div>)}
        </>
      )}
    </div>
  )
}

export default DoctorFalcility;