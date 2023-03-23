
import { axClinet } from "../../axiosUtil"

export function fetchAllKeys() {
  return axClinet.get(`/api/check-keys`)
    .then(response => {
      return response.data
    })

}


export function scrapApi(scrapKeywords, ignoreKeywords, urlMaxLength) {



  const scrapedKeywordsAr = scrapKeywords.split('\n');
 
  const ignoreKeywordsAr = ignoreKeywords.split('\n');


  const obj  = {
    scrapeKeywords :scrapedKeywordsAr,
    ignoreKeywords: ignoreKeywordsAr,
    urlMaxLength : urlMaxLength
  }

  return axClinet.post(`/scrape/scr-start`, obj)
    .then(response => {
      return response.data
    })

}

export function stopApi() {
  
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