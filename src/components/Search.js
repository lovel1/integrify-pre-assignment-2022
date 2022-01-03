const Search = ({filterInput, setFilterInput}) => {
    return (
        <div className="min-w-screen bg-slate-50 flex py-2 justify-center items-center shadow-lg">
            <input className="rounded border px-2" placeholder="Search" value={filterInput} onChange={event => setFilterInput(event.target.value)}/>
            <button className="bg-blue-500 text-slate-50 px-10 ml-2 font-bold rounded" onClick={() => setFilterInput('')}>Clear</button>
        </div>
    )
}

export default Search