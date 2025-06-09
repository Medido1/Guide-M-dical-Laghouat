function Category({type, icon}) {
  return (
    <div className="flex items-center gap-2 bg-gray-400 p-2 rounded-xl">
      <img 
        className="w-8"
        src={icon} alt={type} />
      <h2 className="text-2xl font-bold text-center text-gray-900">
        {type}
      </h2>
    </div>
  )
}

export default Category;