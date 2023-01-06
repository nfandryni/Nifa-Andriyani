import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './tentang.css'
function Tentang(){
    return(
        <>
        <div className="tentang">
        <blockquote class="blockquote fs-1 text-center ">
              <p id="tentang">TENTANG</p>
          </blockquote>
        </div>
        <div className="disp">
        <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Keahlian</li>
            <li class="list-group-item">HTML & CSS</li>
            <li class="list-group-item">PHP</li>
            <li class="list-group-item">Java Script</li>
            <li class="list-group-item">MySQL</li>
        </ul>
        <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Sertifikat</li>
                <li class="list-group-item">Java fundamental</li>
                <li class="list-group-item">(Oracle Academy)</li>
                <li class="list-group-item">LKKB PASKIBRA</li>
                <li class="list-group-item">-</li>
            </ul>
            
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Riwayat Pendidikan</li>
                <li class="list-group-item">SMK Negeri 1 Kota Bekasi</li>
                <li class="list-group-item">Rekayasa Perangkat Lunak</li>
                <li class="list-group-item">2021-2024</li>
                <li class="list-group-item">-</li>
            </ul>
            </div>
            <br /><br></br><br /><br /><br /><br /><br /><br />
            <div className="bates"></div>
            
            </>
    )
}
export default Tentang