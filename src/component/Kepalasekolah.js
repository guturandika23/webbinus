import React, { Component } from 'react';
import * as Mui from '@material-ui/core';


class Kepalasekolah extends Component{
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
                    <br/>
                    <h1 align="center">KEPALA SEKOLAH</h1>
                    <br/>
                 
                    <Mui.Container fidex>

                        <center>
                            <img src="/pak eka.jpg" height="300" />

                        <p>Eka Aribawa,S.Pd.I</p>
                        <p>Kepala Sekolah</p>    
                        </center>
                </Mui.Container>
                </div>
        )
    }
}

export default Kepalasekolah;