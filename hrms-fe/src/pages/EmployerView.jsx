import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import JobPositionService from '../services/jobPosition';
import 'react-toastify/dist/ReactToastify.css'


export default function EmployerView() {
    
    const [data, setdata] = useState({
        position: "",
       
    })

    const [result, setResult] = useState({
        message:"",
        detail: "",
        success: "",
    })

    useEffect(() => {
        toastSender();
    }, [result])

    function handle(e) {

        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        
        
    }
    
    function submit(e) {
        e.preventDefault();
        let jobPositionService= new JobPositionService();
        jobPositionService.addJobPosition(data.position).then(response => setResult({message: response.data.message, success: response.data.success})).catch(error => setResult({message: error.response.data.message, detail: error.response.data.details, success: error.response.data.success}))
        
    }

    const toastSender = () => {
    if (result.success === "") {
        console.log("boş amk")
    }
    else{
        if (result.success) {
            toast.success(result.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            }
            else{
                if (result.success != null && result.success!==undefined && result.detail != null && result.detail !== undefined) {
                    toast.error(result.message + ": " + result.detail, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
                }
                 if(result.success != null && result.success!==undefined &&result.detail == null && result.detail === undefined) {
                    toast.error(result.message , {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
                 }   
                
                }
    }
                            }

    

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <label className="form-label-outside">Job Title</label>
                <input onChange={(e) => handle(e)} id="position" value={data.position} type="text" placeholder="positon"  ></input>
                <button className="button button-secondary" type="submit" >Submit</button>
            </form>
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>

        
    )
}
