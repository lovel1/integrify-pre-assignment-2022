import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter"

const BreweryInfo = ({brewery}) => {
    const isCoordinates = brewery.latitude && brewery.longitude

    return (
        <div className="bg-slate-50 p-10 md:p-20 shadow-xl rounded">
            <h1 className="font-bold text-2xl">{brewery.name}</h1>
            <hr className="my-3"></hr>
            <p className="">Type: {capitalizeFirstLetter(brewery.brewery_type)}-brewery</p>
            <p>Address: {brewery.street}, {brewery.city} [{brewery.country}, {brewery.state}, {brewery.postal_code}]</p>
            {isCoordinates && <p>Coordinates: {brewery.latitude}, {brewery.longitude}</p>}
        </div>
    )
}

export default BreweryInfo