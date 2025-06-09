import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Facility({item}) {
  const {name, phone, adress, workTime} = item
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    /* Use the Clipboard API to write text to the user's clipboard */
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        /* Reset the copied state after 2 seconds to hide the feedback */
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="bg-white p-2 mt-2 rounded-lg flex flex-col gap-2 items-center">
      <h3 className="text-xl text-center font-bold mb-2">
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