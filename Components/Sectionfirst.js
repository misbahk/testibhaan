import React, { Component } from 'react'
import Banner from '../Images/ilogo.jpg'
import Rightbanner from '../Images/flowdiag.png'

export default class Sectionfirst extends Component {
    render() {
        return (
            <div className="">
                <img src={Banner}/>
                <div className="container">
                <div className="row">
                   < div className="col-6" style={{position:"relative"}}>
                       <div className="child" style={{position:"relative",top:"50%",transform:"translateY(-50%)"}}>
<span style={{fontSize:"4rem",fontWeight:"700",color:"#3cb4e2"}}> IMAGINE</span>
<p style={{color:"grey"}} className="mt-2">Being able to own & share authentic, unchanged
valid credentials without any interventions.</p>
                       </div>
                       </div>
                       <div className="col-6">
                           <img src={Rightbanner} sty/>
                       </div>
                </div>
                </div>
            </div>
        )
    }
}
