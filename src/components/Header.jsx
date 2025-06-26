import { GiMedicalDrip } from "react-icons/gi";

function Header() {
  return (
    <header className="header p-4 flex flex-col gap-2 items-center justify-center shadow-lg">
      <div className="flex gap-2 items-center">
        <GiMedicalDrip />
        <h1 className="text-2xl font-bold">
          Guide Médical Laghouat
        </h1>
      </div>
      <p className="text-sm text-center">
        Trouvez facilement les laboratoires, centres d’imagerie et médecins à Laghouat. 
      </p>
    </header>
  )
}

export default Header;