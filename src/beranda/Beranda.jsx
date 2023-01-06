import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './beranda.css';
import foto from './foto2.jpg'
function Beranda(){
  return(
    <><><figure>
        <br /><br /><br />
          <blockquote class="blockquote fs-1 text-center ">
              <p id="beranda">NIFA ANDRIYANI</p>
          </blockquote>
          <figcaption class="blockquote-footer fs-5 text-center">
              <cite title="Source Title">Rekayasa Perangkat Lunak</cite>
          </figcaption>
      </figure>
      <div className="turun">
      <img src={foto} alt="foto" />
          <dl class="row d-flex ">
              <dt class="col-sm-2 ms-5">Nama Lengkap</dt>
              <dd class="col-sm-9">Nifa Andriyani</dd>

              <dt class="col-sm-2 ms-5">Tempat,Tanggal Lahir</dt>
              <dd class="col-sm-9">
                  <p>Bekasi,17 Januari 2006</p>
              </dd>

              <dt class="col-sm-2 ms-5">Alamat</dt>
              <dd class="col-sm-9">
                  <p>Jl.Beringin 7 Rt 06/04</p>
                  <p>Kranji,Bekasi Barat,Kota Bekasi</p></dd>

              <dt class="col-sm-2 ms-5 text-truncate">Email</dt>
              <dd class="col-sm-9">nifaandriyani@gmail.com</dd>

              <dt class="col-sm-2 ms-5">No.Telephone</dt>
              <dd class="col-sm-9">0857-1877-0778</dd>
          </dl>
          </div>

          <div className="pembates" id="garis"></div>
      </></>
    )
}
 export default Beranda