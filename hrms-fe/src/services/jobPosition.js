import axios from "../axios/axios"

export default class JobPositionService{
getjobPosition(){
    return axios.get("/jobs/getall")
    }

    addJobPosition(jobPosition){
        return axios.post("/jobs/add",{position : jobPosition})
        
    }

}