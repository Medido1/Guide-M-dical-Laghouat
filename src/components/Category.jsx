import LabFacility from "./LabFacility";

function Category({type, icon, data}) {
  return (
    <div className="flex flex-col bg-gray-400 p-2 rounded-xl">
      <div className="flex items-center gap-2">
        <img
          className="w-8"
          src={icon} alt={type} />
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {type}
        </h2>
      </div>
      <ul>
        {data && data.map(item => (
          <li key={item.id}>
            <LabFacility item={item}/>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Category;