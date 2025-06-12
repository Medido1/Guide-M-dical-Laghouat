import Category from "./Category";
import labIcon from "../assets/microscope.png";
import xRayIcon from "../assets/x-ray-test.png";
import doctorIcon from "../assets/doctor.png";
import {labs, doctors, imagingCenters} from "../../data";
import { useEffect, useState } from "react";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [labsData, setLabsData] = useState(labs);
  const [doctorsData, setDoctorsData] = useState(doctors);
  const [imagingCentersData, setImagingCentersData] = useState(imagingCenters);

  useEffect(() => {
    if (searchTerm.trim() === ""){
      setLabsData(labs);
      setDoctorsData(doctors);
    } else {
      const searchlabsData = labs.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const searchedDoctorsData = doctors.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const searchedImagingCentersData = imagingCenters.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      setLabsData(searchlabsData);
      setDoctorsData(searchedDoctorsData);
      setImagingCentersData(searchedImagingCentersData);
    }
  },[searchTerm])

  return (
    <main className="p-4 bg-gray-200 flex flex-col gap-4 flex-grow">
       <div>
          <label htmlFor="search"></label>
          <input 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} 
            type="text"
            className={`bg-white p-2 w-[50%] rounded
              border-grey-300 focus:outline-none focus:ring-2
               focus:ring-blue-400`} 
            placeholder="Search"/>
        </div>
      <Category 
        type = "Laboratoires d'analyses"
        icon = {labIcon}
        data = {labsData}
      />
      <Category 
        type= "Centres d’imagerie"
        icon= {xRayIcon}
        data= {imagingCentersData}
      />
      <Category 
        type= "Médecins"
        icon= {doctorIcon}
        data = {doctorsData}
      />
    </main>
  )
}

export default Main;