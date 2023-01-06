import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './projek.css'
import projek4 from './foto/projek4.png'
import projek2 from './foto/projek2.png'
import projek3 from './foto/projek3.png';

function Projek(){
    return(
        <><div className="projek">
            <blockquote class="blockquote fs-1 text-center ">
                <p id="projek">PROJEK</p>
            </blockquote>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={projek4} class="card-img-top" alt="projek4" />
                        <div class="card-body">
                            <h5 class="card-title">Font End & Back End</h5>
                            <p class="card-text">
                                - Membuat Website CRUD dengan MVC
                            </p>
                            <p class="card-text">
                                - Menggunakan HTML dan CSS
                            </p>
                            <p class="card-text">
                                -  Membuat Dashboard dan tampilan list, detail dan beranda
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">November - Desember 2022</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projek2} class="card-img-top" alt="projek2" />
                        <div class="card-body">
                            <h5 class="card-title">Website Personal Branding</h5>
                            <p class="card-text z-index-2">
                                - Menggunakan HTML dan CSS
                            </p>
                            <p class="card-text z-index-2">
                                - Berisis data diri dan hasil kerja yang telah dibuat
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Agustus - September 2022</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projek3} class="card-img-top" alt="projek3" />
                        <div class="card-body">
                            <h5 class="card-title">Form Login</h5>
                            <p class="card-text">
                                - Menggunakan HTML dan CSS
                            </p>
                            <p class="card-text z-index-2">
                                - Menggunakan tag from dan table
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Februari 2022</small>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="pembates">
            
                </div>
                <br />
                <br />
            </div></>
    )
}

export default Projek