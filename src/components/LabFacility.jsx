import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import useClipboard from "./Utility";

function LabFacility({item}) {
  const {name, phone, adress, workTime} = item
  const { copyToClipboard, copied } = useClipboard();

  return (
    <div className="bg-white p-2 mt-2 mb-4 pb-4 rounded-lg 
      flex flex-col gap-2 items-center w-[300px]">
      <h3 className="text-xl text-center font-bold mb-2 bg-gray-200 ">
        {name}
      </h3>
      <div className="flex gap-2 items-center">
        <FaPhoneVolume />
        <p
          className="cursor-pointer"
          onClick={() => copyToClipboard(`${phone}`)}>
        {phone}
        </p>
        {copied && <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-center text-sm">
          {adress}
        </p>
        <FaLocationDot />
      </div>
      {workTime && 
        <p>
          {workTime} اوقات العمل
        </p>
      }
    </div>
  )
}

export default LabFacility;