export const filterData = (input, data) => {
    return !input ? data : data.filter(element => (
        Object.values(element).some(item => String(item).toLowerCase().includes(input.toLowerCase()))
    ))
}