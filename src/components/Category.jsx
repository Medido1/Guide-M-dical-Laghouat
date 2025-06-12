import LabFacility from "./LabFacility";
import DoctorFacility from "./DoctorFacility";

function Category({type, icon, data}) {
  return (
    <div className="flex flex-col bg-gray-400 p-2 rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <img
          className="w-8"
          src={icon} alt={type} />
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {type}
        </h2>
      </div>
      <ul className="flex flex-col items-center
        sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {data && data.map(item => (
          <li key={item.id}>
            {type === "Laboratoires d'analyses" &&
              <LabFacility item={item}/>
            }  
            {type === "Centres d’imagerie" && 
              <DoctorFacility item={item}/>
            }
            {type === "Médecins" && 
              <DoctorFacility item={item}/>
            }
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Category;