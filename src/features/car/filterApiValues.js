import { axClinet } from "../../axiosUtil"

export function fethAllMakes() {
    
  return axClinet.get(`/api/makes`)
    .then(response => {
      return response.data
    })

}