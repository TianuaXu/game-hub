import axios from "axios"

export interface FetchResponse<T> {
    count: number
    results: T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "06c23af82b304396bff19ee48849fd6d",
    },
})
