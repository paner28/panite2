import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Introduction(){
    return(
    <Layout>
        <Seo title="Who am I ? | Panite" description="Paner(完全数)についての紹介" />
        <section id="banner" className="style6" style={{height:"300px"}}>
            <div className="inner">
                <header className="major">
                    <h1>Who am I?</h1>
                </header>
            </div>
        </section>

        <div style={{textAlign: "center", padding: "10%"}} id="main">
            <div className="content">
                <div>好きな日常系ラノベ：学校の階段</div>
                <div>好きなギャグラノベ：生徒会の一存</div>
                <div>好きな異世界系ラノベ：Re:ゼロから始める異世界生活</div>
            </div>
        </div>
        <div style={{textAlign:"center"}}>
            <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
        </div>
    </Layout>
    )
}