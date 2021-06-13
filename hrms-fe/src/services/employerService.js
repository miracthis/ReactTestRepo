import axios from "../axios/axios"

export default class EmployerService{
    async getEmployer(){
    return await axios.get("/employers/getall")
    }

    

}