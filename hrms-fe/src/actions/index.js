
import EmployerService from "../services/employerService"
import CityService from '../services/cityService';
import JobPositionService from "../services/jobPosition";

export const getEmployers = () => dispatch =>{
    let employerService = new EmployerService();
    employerService.getEmployer().then(sonuc => dispatch({ type: 'GET_EMPLOYERS' , payload: sonuc.data.data}));
}


export const getCities = () => dispatch => {
    let cityService = new CityService();
    cityService.getCities().then(sonuc => dispatch({type: 'GET_CITIES', payload: sonuc.data.data}));
}


export const addJobPosition = () => dispatch => {
    let jobPositionService = new JobPositionService();
    jobPositionService.addJobPosition().then(sonuc => dispatch({type: 'ADD_POSITION', payload: sonuc.data}))
}