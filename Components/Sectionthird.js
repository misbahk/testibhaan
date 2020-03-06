import React, { Component } from 'react'
import Hexagon from '../Images/hexagon.png'
import Certificate from '../Images/certificate.png'
import Holdinghands from '../Images/holdinghands.png'
import Hands from '../Images/hands.png'
import Community from '../Images/community.webp'
import Mind from '../Images/mind.png'

export default class Sectionthird extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                <div className="mx-auto">
                   <img src ={Hexagon} style={{height:"70px",width:"70px"}}/>
                   </div>
                </div>
                <div className="row mt-2">
                <div className="mx-auto">
                <h2 style={{color:"#3cb4e2"}}>Our Ideolgy</h2>
                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1">

                    </div>
                    <div className="col-md-2">
                    <center>
                    <img src ={Certificate} style={{height:"70px",width:"70px"}}/>
                    <p className="mt-4" style={{color:"grey"}}>Simplified protocols for authorities to issue tamperproof certificates</p>
                    </center>
                    </div>
                    <div className="col-md-2">
                    <center>
                    <img src ={Holdinghands} style={{height:"70px",width:"70px"}}/>
                    <p className="mt-4" style={{color:"grey"}}>Providing ownership of certificate data without depending on intermediaries.Ability to share certificates with other parties</p>
                    </center>
                    </div>
                    <div className="col-md-2">
                    <center>
                    <img src ={Hands} style={{height:"70px",width:"70px"}}/>
                    <p className="mt-4" style={{color:"grey"}}>Open for all consumer mechanism to verify certificates</p>
                    </center>
                    </div>
                    <div className="col-md-2">
                    <center>
                    <img src ={Community} style={{height:"70px",width:"70px"}}/>
                    <p className="mt-4" style={{color:"grey"}}>Secure & immutable way to store and share valued certification data</p>
                    </center>
                    </div>
                    <div className="col-md-2">
                    <center>
                    <img src ={Mind} style={{height:"70px",width:"70px"}}/>
                    <p className="mt-4" style={{color:"grey"}}>Identify & discourage counterfeiting in real-time.</p>
                    </center>
                    </div>
                    <div className="col-1">
                        
                    </div>
                </div>
            </div>
        )
    }
}
