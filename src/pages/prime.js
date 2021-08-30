import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/prime.css"

import pic10 from '../../static/pic10.jpg'
import pic09 from '../../static/pic09.jpg'
import pic08 from '../../static/pic08.jpg'
import pic51 from '../../static/pic51.png'
import pic52 from '../../static/pic52.png'
import pic53 from '../../static/pic53.png'

const intro =[
    ["素数大富豪普及協会はこちら","https://primeqk.themedia.jp/","https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/1162493/91f01012df459e3a46d0d92a519f5efe_77c6f7bb756a027b47c7c8b020d676f3.png?option=crop&width=96&height=96"],
    ["素数大富豪研究会はこちら","https://sig-prime-d.localinfo.jp/","https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/493689/878a1f92e72e6c27632e0b1322c7c7ed_8def9b565b2f6481182d23607bea9ae3.jpg?width=2560"],
    ["CPUと練習したい方はこちら","http://searial.web.fc2.com/tools/sosutop.html",pic51],
    ["オンライン対戦ははこちら","https://permil.net/pd/",pic52],
    ["初心者向けの素数大富豪Lv.0","http://fukuroudou.info/game/primedaifugou-lv0","http://fukuroudou.info/wp-content/uploads/2018/10/4884112f0560d154fa370ba4d30e2432-768x538.png"],
    ["Android向けの素数判定機","https://play.google.com/store/apps/details?id=jp.sosuu.SDD&hl=ja&gl=US",pic53],
]

export default function Prime(){
    return(
    <Layout>
        <Seo title="Prime | Panite" description="素数大富豪(PrimeQK)というゲームについての記事一覧です" />
        <section id="banner" className="style2" style={{height:"300px"}}>
            <div className="inner">
                <header className="major">
                    <h1>Prime</h1>
                </header>
                <div className="content">
                    <p>素数大富豪(PrimeQK)というゲームについての記事一覧です</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="content">
                    <header className="major">
                        <h2>素数大富豪ってどんなゲーム？</h2>
                    </header>
                    <p>有名なトランプゲームである「大富豪」に, 「素数」の要素をかけ合わせた戦略型対戦ゲーム. 素数だけでなく合成数も出せたり, 8切りと似た「グロタンカット」や, 革命と同様の「ラマヌジャン革命」など, 数学要素が詰まったゲームです. 2014年に開発され以来, 世界大会も行われるなど盛り上がりを見せている新時代の遊びです. 
                    </p>
                </div>
            </section>
            <section id="one">
                <h2 style={{padding:"10px 0 10px 30px"}}>素数大富豪について詳しく知りたい方はこちら</h2>
                <div className="container-fluid">
                    <div className="row">
                        {intro.map((k) =>
                            <div className="col-lg-3 col-sm-4">
                            <a href={k[1]} style={{textDecoration:"none"}}>
                                <div className="card">
                                <img src={k[2]} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text" style={{textAlign:"center"}}>{k[0]}</p>
                                </div>
                                </div>
                            </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section id="two" className="spotlights">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5" style={{padding:"0"}}>
                            <Link to="/rule" className="image">
                                <img src={pic08} alt=""/>
                            </Link>
                        </div>
                        <div className="content col-lg-7" style={{padding:"0"}}>
                            <div className="content">
                                <header className="major">
                                    <h3>ルール</h3>
                                </header>
                                <p>素数大富豪の公式のルールやその他の情報についてまとめています</p>
                                <Link to="/rule"><button type="button" className="btn btn-outline-dark">Learn more</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="content col-lg-7 order-2 order-lg-1" style={{padding:"0"}}>
                            <div className="content">
                                <header className="major">
                                    <h3>戦略(後日追加予定)</h3>
                                </header>
                                <p>素数大富豪はただ素数を出すだけでなく, どのような素数を覚えるのか, どのような順で出すのかなど様々な戦略要素があります. 素数大富豪の最強プレイヤーたちが編み出してきた戦略やブログなどをまとめています. </p>
                                <Link to="/prime"><button type="button" className="btn btn-outline-dark">Learn more</button></Link>

                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2" style={{padding:"0"}}>
                            <Link to="/prime" className="image">
                                <img src={pic09} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5" style={{padding:"0"}}>
                            <Link to="/games" className="image">
                                <img src={pic10} alt=""/>
                            </Link>
                        </div>
                        <div className="content col-lg-7" style={{padding:"0"}}>
                            <div className="content">
                                <header className="major">
                                    <h3>その他の素数ゲーム</h3>
                                </header>
                                <p>Panerが設立した東京理科大学素数大富豪同好会では, 素数大富豪だけでなく素数大富豪ダブルスや, 素数ポーカーなど新しい素数関連ゲームを考案してきました. また, 素数大富豪団体戦に関する案などをまとめています. </p>
                                <Link to="/games"><button type="button" className="btn btn-outline-dark">Learn more</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div style={{textAlign:"center",marginTop:"30px"}}>
            <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
        </div>
    </Layout>
    )
}