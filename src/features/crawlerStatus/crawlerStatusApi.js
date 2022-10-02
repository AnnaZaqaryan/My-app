
import { axClinet } from "../../axiosUtil"

export function fetchCrawlerStatus() {


  return axClinet.get(`/crawl/status`)
    .then(response => {
      return response.data
    })

}
