
import { axClinet } from "../../axiosUtil"

export function fethCalcParms() {

  
    
  return axClinet.get(`api/calc-parm`)
    .then(response => {
      return response.data
    })

}



export function updateCalcParmsPost(data) {

  return axClinet.post(`api/calc-parm`, data)
    .then(response => {
      return response.data
    })

}

