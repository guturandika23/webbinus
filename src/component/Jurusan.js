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
                    <h1 align="center">JURUSAN</h1>
                    <center>
                    
                </center><br/><hr/>
                    <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                            <img src="/TKJ.jpg" width="500" height="300"></img>
                                <h3 align="center">TEHNIK KOMPUTER JARINGAN</h3>
                                    <p>TKJ adalah singkatan dari Teknik Komputer Jaringan. TKJ merupakan sebuah kejurusan yang mempelajari tentang cara-cara merakit komputer dan menginstalasi program komputer.Kejurusan ini hanya ada di STM/SMK.Program keahlian TKJ berbeda dengan RPL(Rekayasa Perangkat Lunak).</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <img src="/TB.jpeg" width="500" height="300"></img>
                                <h3 align="center">TATA BUSANA</h3>
                                <p>Tata busana merupakan suatu disiplin ilmu dan seni mengenai penerapan desain, estetika, dan keindahan alami untuk pakaian dan hiasan tambahannya.</p>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>
                    <hr/>
                    <br/>
                    <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                            <img src="/TBSM.jpg" width="500" height="300"></img>
                                <h3 align="center">TEHNIK BISNIS SEPEDA MOTOR</h3>
                                    <p>Teknik dan Bisnis Sepeda Motor adalah kompetensi keahlian pada Bidang Studi Keahlian Teknologi dan Rekayasa Program Studi Keahlian Teknik Otomotif yang menekankan pada keterampilan pelayanan jasa mekanik kendaraan sepeda motor roda dua.</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <img src="/akl.jpg" width="500" height="300"></img>
                                <h3 align="center">AKUNTANSI</h3>
                              <p>Akuntansi dan Keuangan Lembaga (AKL) merupakan salah satu Kompetensi Keahlian dari Program Keahlian: Akuntansi dan Keuangan, dan Bidang Keahlian: Bisnis dan Manajemen. Berikut adalah daftar lengkap mata pelajaran Jurusan Akuntansi dan Keuangan Lembaga (AKL).</p>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>

            </div>
        )
    }
}

export default Sejarah;