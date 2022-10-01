
import { axClinet } from "../../axiosUtil"

export function fethAllCars(data) {
  return axClinet.get(`/api/listings?isQualified=${data.isQualified}&make=${data.make}&page=${data.currentPage}&size=10&sortBy=${data.sort.field}&sortDir=${data.sort.dir}`)
    .then(response => {
      return response.data
    })

}
