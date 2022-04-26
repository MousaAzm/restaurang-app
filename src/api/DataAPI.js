import Axios from "axios"

const DataAPI = Axios.create({
    baseURL: 'http://localhost:3000/'
})

export default DataAPI