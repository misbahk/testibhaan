import React, { Component } from 'react'
import Group from '../Images/group.png'
import Validation from '../Images/validation.png'
import Secure from '../Images/secure.png'
export default class Sectionfifth extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="mx-auto mb-4">
                    <center>
                        <h2 style={{color:"#3cb4e2"}}>Create & Manage Blockchain based credentials</h2>
                        </center>
                    </div>
                    <center><p className="mb-4">A smart solution that give institutions, people and all parties involved with a highly secure, web based dashboard to create, manage and issue digital,
                    blockchain-based credentials (e.g.transcripts, diplomas, certificates, etc.) and to verify them online in real-time basis.</p></center>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <center>
                    <img src={Group} style={{height:"50px",width:"50px"}}/>
                        <h3 className="mt-2" style={{color:"#3cb4e2"}}>Issuing</h3>
                        <p>Only verified issuing authorities will issue smart blockchain based certificates with unique hash signature.</p>
                        </center>
                    </div>
                    <div className="col-md-4">
                    <center>
                    <img src={Validation} style={{height:"50px",width:"50px"}}/>
                        <h3 className="mt-2" style={{color:"#3cb4e2"}}>Validation</h3>
                        <p>Rightful owner or anyone he/she shares the unique hash with, will be able to verify the authenticity of issued certificate online.</p>
                        </center>
                    </div>
                    <div className="col-md-4">
                    <center>
                    <img src={Secure} style={{height:"50px",width:"50px"}}/>
                        <h3 className="mt-2" style={{color:"#3cb4e2"}}>Secure Storage</h3>
                        <p>Trustless decentralized nature of blockchain technology used to digitize and store data with fraud proof encryption via IPFS.</p>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}
