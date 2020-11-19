import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Sejarah extends Component{
    render(){
        return(
            <div>
                         <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Alamat_sekolah">Alamat</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/Guru">Guru</Mui.Button>
                        <Mui.Button href="/Kepalasekolah">Kepala Sekolah</Mui.Button>
                       
                    </Mui.ButtonGroup>
                
                    </center>
                    <h1 align="center">ALAMAT KONTAK</h1>
                    <hr/>
                    <h2 align="center">SMK BINA NUSANTARA SEMARANG adalah sekolah menenengah kejuruan yang berdiri pada tanggal 18 mei 2010 dibawah Yayasan Bina Nusantara</h2>
                    <h2 align="center">SMK BINA NUSANTARA SEMARANG beralamat di jl.Kemantren No.5 wonosari Ngaliyan Semarang. Dengan luas lokasi  4004 m2, sarana dan prasarana yang memadai, suasana belajar yang nyaman karena berada di tengah perkamampungan masyarakat yang jauh dari kebisingan.</h2>
                    <h2>Email: <a href="/Alamat">smkbinusasmg@yahoo.com</a></h2>
                    <h2> Telp: (024) 8662971</h2>
                    <h1 align="center">PETA SMK BINA NUSANTARA SEMARANG</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.285919478718!2d110.29925951421212!3d-6.97555387024191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fe5d592f89b:0x43f079c6e22e9733!2sSmk Bina Nusantara Mangkang!5e0!3m2!1sid!2sid!4v1605772859493!5m2!1sid!2sid" width="1270" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        )
    }
}

export default Sejarah;