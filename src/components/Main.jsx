import Category from "./Category";
import labIcon from "../assets/microscope.png";
import xRayIcon from "../assets/x-ray-test.png";
import doctorIcon from "../assets/doctor.png";
import {labs, doctors, imagingCenters} from "../../data";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [labsData, setLabsData] = useState(labs);
  const [doctorsData, setDoctorsData] = useState(doctors);
  const [imagingCentersData, setImagingCentersData] = useState(imagingCenters);
  const [searchSpeciality, setSearchSpeciality] = useState("");
  const [showJustDoctors, setShowJustDoctors] = useState(false);

  /* scroll to top logic */
  const [isVisible, setIsvisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  useEffect(() => {
    if (searchTerm.trim() === ""){
      setLabsData(labs);
      setDoctorsData(doctors);
      setImagingCentersData(imagingCenters);
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

  useEffect(() => {
    if (searchSpeciality === "") {
      setLabsData(labs);
      setDoctorsData(doctors);
      setImagingCentersData(imagingCenters);
      setShowJustDoctors(false);
    } else {
      const searchedDoctorsData = doctors.filter(item => 
        item.searchTerm === searchSpeciality
      );
      setShowJustDoctors(true)
      setDoctorsData(searchedDoctorsData);
    }
    
    
  }, [searchSpeciality])

  return (
    <main className="p-4 bg-gray-200 flex flex-col gap-4 flex-grow">
       <div className="flex justify-between">
          <div>
            <label htmlFor="search"></label>
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              type="text"
              className={`bg-white p-2 w-[80%] rounded
                border-grey-300 focus:outline-none focus:ring-2
                 focus:ring-blue-400`}
              placeholder="Search"/>
          </div>
          <div>
            <label htmlFor="speciality"></label>
            <select 
              className="bg-white py-2"
              onChange={(e) => setSearchSpeciality(e.target.value)}
              value={searchSpeciality}
              name="speciality" id="speciality">
                <option value="">toutes les spécialités</option>
                <option value="allergologie">allergologie</option>
                <option value="Médecine générale">Médecine générale</option>
                <option value="Gynécologie obstétrique">Gynécologie obstétrique</option>
                <option value="Gynécologie">Gynécologie</option>
                <option value="Chirurgien Urologue">Chirurgien Urologue</option>
                <option value="Diabétologie Endocrinologie">Diabétologie Endocrinologie</option>
                <option value="Médecine interne">Médecine interne</option>
                <option value="Maladies & chirurgie des yeux">Maladies & chirurgie des yeux</option>
                <option value="Gastro-entérologie">Gastro-entérologie</option>
                <option value="Chirurgie Orthopédique">Chirurgie Orthopédique</option>
                <option value="Neurochirurgue">Neurochirurgue</option>
                <option value="Dermatologie">Dermatologie</option>
            </select>
          </div>
        </div>
      {!showJustDoctors && 
        <Category 
          type = "Laboratoires d'analyses"
          icon = {labIcon}
          data = {labsData}
        />
      }
      {!showJustDoctors &&
        <Category 
          type= "Centres d’imagerie"
          icon= {xRayIcon}
          data= {imagingCentersData}
        />
      }
      <Category 
        type= "Médecins"
        icon= {doctorIcon}
        data = {doctorsData}
      />
      <button 
        onClick={scrollToTop}
        className="block mx-auto border-black
        border-2 rounded-full bg-white p-2 cursor-pointer">
        <FaArrowUpLong />
      </button>
    </main>
  )
}

export default Main;