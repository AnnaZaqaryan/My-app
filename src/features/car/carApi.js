
import { axClinet } from "../../axiosUtil"

export function fethAllCars(data) {
  return axClinet.get(`/api/listings?isQualified=${data.isQualified}&make=${data.make}&page=${data.currentPage}&size=10&sortBy=${data.sort.field}&sortDir=${data.sort.dir}`)
    .then(response => {
      return response.data
    })

}


export function exportDataApi(data) {
  console.log(3333333333333333333333)
  return axClinet.get(`api/listings-export?isQualified=${data.isQualified}&make=${data.make}`, { responseType: 'blob'})
    .then(response => {
      const href = URL.createObjectURL(response.data);

    // create "a" HTLM element with href to file & click
    const link = document.createElement('a');
    link.href = href;

    console.log(JSON.stringify(response));
    link.setAttribute('download', 'export.csv'); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    })

}


