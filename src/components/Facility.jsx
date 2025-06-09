import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Facility({item}) {
  const {name, phone, adress, workTime} = item
  return (
    <div className="bg-white p-2 mt-2 rounded-lg flex flex-col gap-2 items-center">
      <h3 className="text-xl text-center font-bold mb-2">
        {name}
      </h3>
      <div className="flex gap-2 items-center">
        <FaPhoneVolume />
        <p>
        {phone}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-center text-sm">
          {adress}
        </p>
        <FaLocationDot />
      </div>
      <p>
        {workTime} اوقات العمل
      </p>
    </div>
  )
}

export default Facility;