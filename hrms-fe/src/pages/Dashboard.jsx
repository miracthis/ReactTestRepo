import React from 'react'
import Content from '../layouts/Content'
import Footer from '../layouts/Footer'
import HeaderMain from '../layouts/HeaderMain'
import {Route} from "react-router"
import Header from '../layouts/Header'
import Employer from './Employer'
import EmployerView from './EmployerView'

export default function Dashboard() {
    return (
        <div>
            
          
            <Route exact path="/" component={HeaderMain}></Route>
             <Route exact path="/" component={Content}></Route>
            <Route exact path="/deneme" component={Header}></Route>
            <Route exact path="/deneme" component={Employer}></Route>
            <Route exact path="/deneme2" component={EmployerView}></Route>
            <Route exact path="*" component={EmployerView}></Route>
            <Footer/>
            
        </div>
    )
}
