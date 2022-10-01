
import { axClinet } from "../../axiosUtil"

export function fethAllCars(data) {
  return axClinet.get(`/api/listings?isQualified=true&make=${data.make}&page=${data.currentPage}&size=10&sortBy=qualifiedTime&sortDir=asc`)
    .then(response => {
      return response.data
    })

}
