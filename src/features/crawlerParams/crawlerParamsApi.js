

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


// import { axClinet } from "../../axiosUtil"

// export function fethCrawlerParms() {
//   return axClinet.get(`api/check-keys`)
//     .then(response => {
//       return response.data
//     })

// }


// export function updateCrawlerParmsPost(data) {

//   return axClinet.post(`api/check-keys`, data)
//     .then(response => {
//       return response.data
//     })
// }




