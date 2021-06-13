import axios from "../axios/axios"

export default class JobPositionService{

    
getResumes(){
    return axios.get("/resumes/getall")
    }

}