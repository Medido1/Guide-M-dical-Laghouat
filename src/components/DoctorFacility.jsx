import { useState } from "react";
import useClipboard from "./Utility";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

function DoctorFalcility({item}) {
  const { copyToClipboard, copied } = useClipboard();
  const [isSelected, setIsSelecetd] = useState("");
  const [showMore, setShowMore] = useState(false);

  function selectAndCopy(element) {
    copyToClipboard(element)
    setIsSelecetd(element)
  }

  const {name, speciality, adress, phone,phone2,
    phone3, email, moreInfo, localisation} = item;
  
  return (
    <div className="bg-white p-2 mt-2 mb-4 rounded-lg shadow-lg
      flex flex-col gap-2 items-center justify-center w-[290px]">
      <h2 className="text-lg font-bold text-center bg-gray-200 w-full">
        {name}
      </h2>
      <p className="text-center">
        {speciality}
      </p>
      {localisation ? 
        <p className="text-center text-blue-600">
          <a href={localisation} target="blank">
            {adress}
          </a> 
          <FaLocationDot className="inline-block"/>
        </p> :
        <p className="text-center">{adress} <FaLocationDot className="inline-block"/></p>
      }
      <div className="flex gap-2 items-center">
        <FaPhoneVolume className="inline-block" />
        <p> {phone} </p>
        <FaCopy className="cursor-pointer" onClick={() => selectAndCopy(`${phone}`)}/>
        {copied && isSelected == `${phone}` && <p className="text-xs text-green-500 ml-2">Copied!</p>}
      </div>
      {phone2 &&
        <div className="flex gap-2 items-center">
          <FaPhoneVolume className="inline-block" />
          <p> {phone2}</p>
          <FaCopy className="cursor-pointer"  onClick={() => selectAndCopy(`${phone2}`)}/>
          {copied && isSelected == `${phone2}` && 
          <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>
      }
      {phone3 &&
        <div className="flex gap-2 items-center">
          <FaPhoneVolume className="inline-block" /> {phone3}
          <p>{phone3}</p>
          <FaCopy className="cursor-pointer" onClick={() => selectAndCopy(`${phone3}`)}/>
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
            aria-label="show more info"
            onClick={() => setShowMore(prev => !prev)}
            type="button"
            className="px-4 bg-blue-200 font-bold 
            rounded-full cursor-pointer">
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