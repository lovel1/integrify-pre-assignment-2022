import { useParams } from "react-router-dom";
import BreweryInfo from "../components/BreweryInfo";
import { useNavigate  } from 'react-router-dom';
import { redirectToHomeScreen } from "../utils/redirectToHome";

const BreweryScreen = ({breweries}) => {
    const { id } = useParams()
    const breweryToShow = breweries.filter(brewery => brewery.id === id)[0]
    const navigate = useNavigate()
    
    return (
        <div className="flex flex-col min-h-screen">
            <div className="min-w-screen bg-slate-50 py-2 shadow-lg flex-none">
                <button className="bg-blue-500 text-slate-50 px-5 ml-5 md:ml-10 font-bold rounded" onClick={() => redirectToHomeScreen(navigate)}>Back</button>
            </div>

            <div className="flex-1 items-center justify-center flex">
                {breweryToShow && <BreweryInfo brewery={breweryToShow}/>}
            </div>
        </div>
    )
}

export default BreweryScreen