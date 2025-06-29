import Category from "./Category";
import labIcon from "../assets/microscope.png";
import xRayIcon from "../assets/x-ray-test.png";
import doctorIcon from "../assets/doctor.png";
import {labs, doctors, imagingCenters} from "../../data";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa"

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [labsData, setLabsData] = useState(labs);
  const [doctorsData, setDoctorsData] = useState(doctors);
  const [imagingCentersData, setImagingCentersData] = useState(imagingCenters);
  const [searchSpeciality, setSearchSpeciality] = useState("");
  const [showJustDoctors, setShowJustDoctors] = useState(false);

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

  const specialities = [
    { value: "", label: "toutes les spécialités" },
    { value: "allergologie", label: "allergologie" },
    { value: "Médecine générale", label: "Médecine générale" },
    { value: "Gynécologie obstétrique", label: "Gynécologie obstétrique" },
    { value: "Gynécologie", label: "Gynécologie" },
    { value: "Chirurgien Urologue", label: "Chirurgien Urologue" },
    { value: "Diabétologie Endocrinologie", label: "Diabétologie Endocrinologie" },
    { value: "Médecine interne", label: "Médecine interne" },
    { value: "Ophtalmologie", label: "Ophtalmologie" },
    { value: "Gastro-entérologie", label: "Gastro-entérologie" },
    { value: "Chirurgie Orthopédique", label: "Chirurgie Orthopédique" },
    { value: "Neurochirurgue", label: "Neurochirurgue" },
    { value: "Dermatologie", label: "Dermatologie" },
    { value: "Cardiologie", label: "Cardiologie" },
    { value: "Néphrologie", label: "Néphrologie" },
    { value: "Dentist", label: "Dentist" },
  ];
  
  return (
    <main className="p-4 bg-gray-200 flex flex-col gap-4 flex-grow">
       <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="relative ">
            <label htmlFor="search"></label>
            <input 
              value={searchTerm}
              type="text" 
              placeholder="Search"
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 p-2" 
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
            <FaSearch className="absolute top-1/2 left-3  -translate-y-1/2"/> 
          </div>
          <div className="mr-2">
            <label htmlFor="speciality"></label>
            <select 
              className="bg-white py-2"
              onChange={(e) => setSearchSpeciality(e.target.value)}
              value={searchSpeciality}
              name="speciality" id="speciality">
                {specialities.map(({value, label}) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
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
      <div>
        <button
          onClick={scrollToTop}
          className="btn"
          >
          <FaArrowUpLong className="icon"/>
        </button>
      </div>
    </main>
  )
}

export default Main;