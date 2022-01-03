import { Link } from "react-router-dom"
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter"

const BreweryCard = ({brewery}) => {
    return (
        <div className="bg-slate-50 shadow-lg p-10 md:w-80 lg-w-90">
            <h1 className="font-bold">{brewery.name}</h1>
            <hr className="my-3"></hr>
            <p className="mb-1">Type: {capitalizeFirstLetter(brewery.brewery_type)}-brewery</p>
            <p>City: {brewery.city}</p>
            <hr className="my-3"></hr>
            <Link className="border-2 border-blue-500 rounded px-4 text-blue-500 font-bold" to={`/${brewery.id}`}>View Details</Link>
        </div>
    )
}

export default BreweryCard