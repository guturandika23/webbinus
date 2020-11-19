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
                    <h1 align="center">Guru SMK Bina Nusantara</h1>
                    <br/>
                   
                    <br/>
                    <Mui.Container fidex>
                       
                    <Mui.Grid container spacing={10}>
                            <Mui.Grid item xs={1} sm={2}>
                    
                        <img src="/pak eka.jpg" height="240" />
                        <p >Eka Aribawa,S.Pd.I</p>
                        <p >Kepala Sekolah</p>  
                                       </Mui.Grid>
                            <Mui.Grid item xs={1} sm={2}> 
                        <img src="/Ari-dwi.jpg" height="240" />
                        <p>Ari Dwi Handoko,S.Pd</p>
                        <p>Waka Kesiswaan</p> 
                        </Mui.Grid>
                       
                            <Mui.Grid item xs={1} sm={2}>
                       <img src="/Septy.jpg" height="240" />
                        <p>Septi Muslikhah</p>
                        <p>Waka Kurikulum</p>
                         </Mui.Grid>
                         
                            <Mui.Grid item xs={1} sm={2}>
                        <img src="/Khusnul.jpg" height="240" />
                        <p>Khusnul Khotima,S.Pd</p>
                        <p>Waka Sarana dan Prasarana</p>
                        </Mui.Grid>
                       
                            <Mui.Grid item xs={1} sm={2}>
                        <img src="/Askuriati.jpg" height="240" />
                        <p>Askuriat,S.E</p>
                        <p>Waka SDM</p>
                        </Mui.Grid>
                        <Mui.Grid container spacing={1}>
                        <Mui.Grid item xs={3} sm={3 }>
                        <img src="/Arga.jpg" height="400" />
                        <p>Arga Dian SW,S.Kom</p>
                        <p>K3 Teknik Komputer dan Jaringan</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/linda.jpg" height="400" />
                        <p>Isti Malinda,S.Pd</p>
                        <p>K3 Tata Busana</p>
                        </Mui.Grid>
                    
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/wahyu.jpg" height="400" />
                        <p>Wahyu Ambikawati,S.Pd</p>
                        <p>K3 Teknik Bisnis Sepeda Motor</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/novita.jpg" height="400" />
                        <p>Novita Widyastutik,S.Pd</p>
                        <p>K3 Akuntansi dan Keuangan Lembaga</p>
                        </Mui.Grid>
                       
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/dian.jpg" height="400" />
                        <p>Dianing Ratri O,S.Pd</p>
                        <p>Sekretaris Jurusan Teknik Komputer dan Jaringan</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/soim-.jpg" height="400" />
                        <p>Soimatun,S.Pd</p>
                        <p>Sekretaris Jurusan Tata Busana</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/Rabisan.jpg" height="400" />
                        <p>Tri Rabisan,S.Pd</p>
                        <p>Sekretaris Jurusan Teknik Bisnis Sepeda Motor</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/vega.jpg" height="400" />
                        <p>Vega Nurmalita,S.Pd</p>
                        <p>Sekretaris Jurusan Akuntansi dan Keuangan Lembaga</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/taqi.jpg" height="400" />
                        <p>Taqius SA,S.Kom</p>
                        <p>Ka. Lab Jurusan Teknik Komputer dan Jaringan</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/aroem.jpg" height="400" />
                        <p>Aroem Santi L,S.Pd</p>
                        <p>Ka. Lab Jurusan Tata Busana</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/dandun.jpg" height="400" />
                        <p>Indah Noviani,S.Pd</p>
                        <p>Guru Mapel Bahasa Indonesia</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/ida.jpg" height="400" />
                        <p>Ida Fahru Roziyah,S.Pd</p>
                        <p>Guru Mapel Bahasa Jawa</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/dwi.jpg" height="400" />
                        <p>Indah Dwi Putri Banjarsari,S.Pd</p>
                        <p>Guru Mapel Matematika</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/arif.jpg" height="400" />
                        <p>Arif Adi Wijaya,S.Pd</p>
                        <p>Guru Mapel Penjasorkes</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/tito.jpg" height="400" />
                        <p>Tito Dwi Yulianto,S.Pd</p>
                        <p>Guru Mapel Bahasa Inggris</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/sholeh.jpg" height="400" />
                        <p>Muhammad Sholeh,S.Pd.I</p>
                        <p>Guru Mapel Agama Islam</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/ruroh.jpg" height="400" />
                        <p>Siti Masruroh,A.Md</p>
                        <p>Guru Mapel Bahasa Jepang</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/ruri.jpg" height="400" />
                        <p>Ruri Ayuning Lati,S.Pd</p>
                        <p>Guru BK</p>
                        </Mui.Grid>
                        <Mui.Grid item xs={3} sm={3}>
                        <img src="/rufi.jpg" height="400" />
                        <p>Rufi Tri Irianti,S.Pd</p>
                        <p>Guru Mapel Pendidikan Karakter</p>
                        </Mui.Grid>
                        </Mui.Grid>
                       </Mui.Grid>
                </Mui.Container>
                </div>
        )
    }
}

export default Kepalasekolah;