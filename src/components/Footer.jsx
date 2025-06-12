import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="p-4 bg-black flex flex-col items-center h-full">
      <div className="flex justify-between items-center w-full">
        <p className=" text-white">&copy; {new Date().getFullYear()} </p>
        <p className="text-sm mt-2 text-white">
          <a
          className="cursor-pointer"
          href="https://github.com/Medido1" target="blank"> by Bousalah Nadir</a>
        </p>
      </div>
      <p className="text-white text-center flex items-center gap-2 mt-4 sm:-mt-6">
        <MdEmail  className="inline-block" />bousalh.moh@gmail.com
      </p>
    </footer>
  )
}

export default Footer;
