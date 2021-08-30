import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Prime(){
    return(
    <Layout>
            <Seo title="Prime / Strategy | Panite" description="素数大富豪の戦略についてまとめたページです" />
        <section id="banner" className="style2" style={{height:"300px"}}>
            <div className="inner">
                <header className="major">
                    <h1>戦略</h1>
                </header>
                <div className="content">
                    <p>素数大富豪の戦略についてまとめたページです</p>
                </div>
            </div>
        </section>

        <section>
            <div className="content">
                <p>　Panerが設立した素数大富豪同好会では、素数大富豪だけでなく、初心者も楽しめるような素数関連トランプゲームの開発も行ってきました。まだまだルールもあやふやなものが多いですが、アイディア次第で面白くなったり、素数大富豪のインフレを防ぐものになるかもしれません。また、2019年に行た大学対抗戦では、素数大富豪の団体戦の可能性も見えてきました。団体戦において主催者によって好きな素数ゲームを選び、対戦するようになると各大会の色が出て新たな面白さも味わえると思います。今後の素数大富豪の発展のためにも、新しいゲームやルールの改良案などをPaner(<Link to="https://twitter.com/tus_1213">完全数</Link>)までお知らせください！</p>
            </div>
        </section>

        <div style={{textAlign:"center"}}>
            <Link to="/prime"><button type="button" className="btn btn-outline-dark" style={{marginRight:"10px"}}>Primeに戻る</button></Link>
            <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
        </div>
    </Layout>
    )
}