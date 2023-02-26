
import { axClinet } from "../../axiosUtil"

export function fetchAllKeys() {
  return axClinet.get(`/api/check-keys`)
    .then(response => {
      return response.data
    })

}


export function scrapApi(e) {
  const ar = e.split('\n');
  //ar.push(e)
  return axClinet.post(`/scrape/scr-start`, ar)
    .then(response => {
      return response.data
    })

}

export function stopApi(e) {
  
  //ar.push(e)
  return axClinet.get(`/scrape/scr-stop`)
    .then(response => {
      return response.data
    })

}




// export function deleteKeyReq(e) {
//  const  data = {id : e}
//   return axClinet.post(`/api/check-key-remove`, data)
//     .then(response => {
//       return response.data
//     })

// }