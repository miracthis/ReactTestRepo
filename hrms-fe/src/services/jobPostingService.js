import axios from "../axios/axios"

export default class JobPostingService{
getjobPosting(){
    return axios.get("jobPostings/getActive/OrderByEndDate")
    }

}