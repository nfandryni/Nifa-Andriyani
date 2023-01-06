import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './kontak.css'

function Kontak(){
    return(
//     <><div className="kontak">
//             <blockquote class="blockquote fs-1 text-center ">
//                 <p id="kontak">KONTAK</p>
//             </blockquote>
//         </div>
//         <div class="container">

// <div class="card-container">
//     <div class="left">
//         <div class="left-container">
//             <div class="txt"><i class="uil uil-map-marker">Jl.Beringin 7 Rt 06/04, Kranji,Bekasi Barat,Kota Bekasi. 17135</i> 
//             <div class="txt"><i class="uil uil-phone">+62 857 1877 0778</i> 
//             <div class="txt"><i class="uil uil-envelope-alt"></i>nifaandriyani@gmail.com</div>
//             </div>
//             </div>
//         </div>
//     </div>
   
//     <div class="right">
//         <div class="right-container">
//         <a href="mailto:nifaandriyani@gmail.com"></a>
//             <form action="">
//                 <h2 class="lg-view">Hubungi Saya</h2>
//                 <h2 class="sm-view">Hubungi Saya</h2>
//                 <input type="text" placeholder="Nama"/>
//                 <input type="email" placeholder="Alamat Email"/>
//                 <input type="text" placeholder="Perusahaan" autocomplete="off"/>
//                 <input type="phone" placeholder="Telepone" autocomplete="off"/>
//                 <textarea rows="10" placeholder="Pesan"></textarea>
//                 <button>Kirim</button>
//             </form>
//         </div>
//     </div>
// </div>

// </div></>
        
               <><div className="kontak">
                         <blockquote class="blockquote fs-1 text-center ">
                             <p id="kontak">KONTAK</p>
                           </blockquote>
                     </div>
            <div className="contact__info">
                <div className="contact__card">
                    <i class="uil uil-envelope"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data"></span>

                    <a href="nifaandriyani@gmail.com" className="contact__button">
                        Write me
                        <i class="uil uil-arrow-right"></i>
                    </a>
                    
                </div>
           
            <div className="contact__card">
            <i class="uil uil-phone-alt"></i>

                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data"></span>

                <a href="https://wa.me/6285718770778" className="contact__button">
                    Write me
                    <i class="uil uil-arrow-right"></i>
                </a>
            </div>

            <div className="contact__card">
            <i class="uil uil-instagram"></i>

                <h3 className="contact__card-title">Instagram</h3>
                <span className="contact__card-data"></span>

                <a href="https://www.instagram.com/nfandryni" className="contact__button">
                    Write me
                    <i class="uil uil-arrow-right"></i>
                </a>
            </div>

            <div className="contact__card">
            <i class="uil uil-linkedin"></i>

                <h3 className="contact__card-title">Linkedin</h3>
                <span className="contact__card-data"></span>

                <a href="https://www.linkedin.com/in/nifa-andriyani-362744246/" className="contact__button">
                    Write me
                    <i class="uil uil-arrow-right"></i>
                </a>
            </div>

            <div className="contact__card">
            <i class="uil uil-github"></i>

                <h3 className="contact__card-title">GitHub</h3>
                <span className="contact__card-data"></span>

                <a href="https://github.com/nfandryni" className="contact__button">
                    Write me
                    <i class="uil uil-arrow-right"></i>
                </a>
            </div>
            </div>
            <br /><br /><br /><br /><br /></>
    )
}

export default Kontak