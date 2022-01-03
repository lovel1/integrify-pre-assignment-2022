import { useState } from "react"
import BreweryCard from "../components/BreweryCard"
import Search from "../components/Search"
import { filterData } from "../utils/filterData"

const HomeScreen = ({breweries}) => {
    const [filterInput, setFilterInput] = useState('')
    const breweriesToShow = filterData(filterInput, breweries)

    return (
        <div>
            <Search filterInput={filterInput} setFilterInput={setFilterInput}/>
            <div className="flex flex-col md:flex-row flex-wrap py-16  mx-10 gap-10">
                {breweriesToShow.map(brewery => <BreweryCard brewery={brewery} key={brewery.id}/>)}
            </div>
        </div>
    )
}

export default HomeScreen