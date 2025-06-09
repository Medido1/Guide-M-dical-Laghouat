import Category from "./Category";
import labIcon from "../assets/microscope.png";
import xRayIcon from "../assets/x-ray-test.png";
import doctorIcon from "../assets/doctor.png";

function Main() {
  return (
    <main className="p-4 bg-gray-200 flex flex-col gap-4 flex-grow">
      <Category 
        type = "Laboratoires d'analyses"
        icon = {labIcon}
      />
      <Category 
        type= "Centres d’imagerie"
        icon= {xRayIcon}
      />
      <Category 
        type= "Médecins"
        icon= {doctorIcon}
      />
    </main>
  )
}

export default Main;