
import { axClinet } from "../../axiosUtil"

export function fetchAllKeys() {
  return axClinet.get(`/api/check-keys`)
    .then(response => {
      return response.data
    })

}


export function addNewKeyReq(e) {
  const ar = e.split(',');
  //ar.push(e)
  return axClinet.post(`/api/check-key-add`, ar)
    .then(response => {
      return response.data
    })

}


export function deleteKeyReq(e) {
 const  data = {id : e}
  return axClinet.post(`/api/check-key-remove`, data)
    .then(response => {
      return response.data
    })

}