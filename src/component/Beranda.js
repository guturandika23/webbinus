import React, { Component } from 'react';
import * as Mui from '@material-ui/core';


class Home extends Component{
    render(){
        return(
            <div>
                
                    <br/>
                    <h1 align="center">SELAMAT DATANG</h1>
                    
                    <h1 align="center">SMK BINA NUSANTARA SEMARANG</h1>
                    <Mui.Container fidex>

                        <center>
                            <img src="/smkbinus.jpg" height="300" />
                        </center>
                        
                    
                </Mui.Container>
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
                </div>
        )
    }
}

export default Home;