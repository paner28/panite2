import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import pic31 from '../../static/pic31.jpg'
import pic32 from '../../static/pic32.jpg'
import pic33 from '../../static/pic33.jpg'
import pic34 from '../../static/pic34.jpg'
import pic35 from '../../static/pic35.jpg'

export default function Prime(){
    return(
    <Layout>
        <Seo title="Hobby | Panite" description="Paniteの趣味に関するページです" />
        <section id="banner" className="style5" style={{height:"300px"}}>
            <div className="inner">
            <header className="major">
                <h1>趣味</h1>
            </header>
            <div className="content">
                <p>趣味に関するページです</p>
            </div>
            </div>
        </section>
            <div className="content">
                <h2>アニメ</h2>
                <p>SAOや俺妹、ごちうさからアニメに本格的にハマる。グロ系以外は基本的に何でも見ている。Panerが気に入っているアニメや、凄いと思ったアニメを紹介するリストです。</p>
                <Link to="/anime/1"><button type="button" className="btn btn-outline-dark">Anime-List</button></Link>
            </div>
            <div className="content">
                <h2>スポーツ観戦</h2>
                <p>スポーツをするのは昔から苦手だったが、高校生になってからスポーツを見るのにハマる。<br/>特に野球は昔から応援していたが、受験期から時間があるときはほぼすべての試合をテレビやラジオ、実況アプリで観戦している。他にも、サッカーやバスケ、バレー、卓球、クライミング、カーリング、スケボーなどの観戦も好き。<br/>最近では散歩をして体力を着けつつ、友達と卓球をしたり人生初の野球をしたり少しずつプレイにも興味を持ち始めている。</p>
            </div>
            <div className="content">
                <h2>ラーメン</h2>
                <p>大学生になってからラーメンにハマり、様々なラーメンを食べてきたが、その中でも特に美味しかったと思う物を紹介します。</p>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{maxWidth:"600px"}}>
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={pic31} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>天下一品</h5>
                                <p>ラーメンにハマった最大の原因。こってりの前に人類は敗北。</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic35} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>自家製麵 純</h5>
                                <p>奇跡から生まれた最高の麵と、それに合う優しい味わいのスープ。<br/>ハーフ和え玉も最高級。</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic32} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>陽はまた昇る</h5>
                                <p>にぼしラーメン。美味しいが和え玉が量がある。</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic33} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>博多風龍</h5>
                                <p>替え玉無料の博多ラーメン。うまい。<br/>人によって好みが分かれるので注意。</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic34} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>つきひ</h5>
                                <p>これが完成された濃厚にぼし。にぼにぼ。</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        <div style={{textAlign:"center"}}>
            <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
        </div>    
    </Layout>
    )
}