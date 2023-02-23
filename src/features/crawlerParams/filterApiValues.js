import { axClinet } from "../../axiosUtil"

export function fethAllMakes() {
    
  return axClinet.get(`/api/makes`)
    .then(response => {
      return response.data
    })

}


export function fethAllCountry() {
    
  return axClinet.get(`/api/countries`)
    .then(response => {
      return response.data
    })

}