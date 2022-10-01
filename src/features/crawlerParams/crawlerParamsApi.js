
import { axClinet } from "../../axiosUtil"

export function fethCrawlerParms() {

  
    
  return axClinet.get(`api/crl-parm`)
    .then(response => {
      return response.data
    })

}



export function updateCrawlerParmsPost(data) {

  return axClinet.post(`api/crl-parm`, data)
    .then(response => {
      return response.data
    })

}

