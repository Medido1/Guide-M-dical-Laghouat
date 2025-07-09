import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import useClipboard from "./Utility";

function LabFacility({item}) {
  const {name, phone, adress, workTime, localisation} = item
  const { copyToClipboard, copied } = useClipboard();

  return (
    <div className="bg-white p-2 mt-2 mb-4 pb-4 rounded-lg 
      flex flex-col gap-2 items-center w-[300px]">
      <h3 className="text-xl text-center font-bold mb-2 bg-gray-200 ">
        {name}
      </h3>
      <div className="flex gap-2 items-center">
        <FaPhoneVolume />
        <p> {phone} </p>
        <FaCopy className="cursor-pointer" onClick={() => copyToClipboard(`${phone}`)}/>
        {copied && 
        <p className="text-xs text-green-500">
          Copied!
        </p>}
      </div>
      {localisation ? 
        <p className="text-center text-blue-600">
          <a href={localisation} target="blank">
            {adress}
          </a> 
          <FaLocationDot className="inline-block"/>
        </p> :
        <p className="text-center">{adress} <FaLocationDot className="inline-block"/></p>
      }
      {workTime && 
        <p>
          {workTime} اوقات العمل
        </p>
      }
    </div>
  )
}

export default LabFacility;