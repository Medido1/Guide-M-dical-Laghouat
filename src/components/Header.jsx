import { GiMedicalDrip } from "react-icons/gi";

function Header() {
  return (
    <header className="bg-blue-200 p-4 flex gap-2 items-center justify-center shadow-lg">
      <GiMedicalDrip />
      <h1 className="text-xl font-bold">
        Guide Médical Laghouat
      </h1>
    </header>
  )
}

export default Header;