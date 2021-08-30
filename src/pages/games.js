import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Prime(){
    return(
    <Layout>
        <Seo title="Prime / Game | Panite" description="東京理科大学素数大富豪同好会などで開発したその他の素数ゲーム" />
        <section id="banner" className="style2" style={{height:"300px"}}>
            <div className="inner">
                <header className="major">
                    <h1>ゲーム</h1>
                </header>
                <div className="content">
                    <p>東京理科大学素数大富豪同好会などで開発したその他の素数ゲーム</p>
                </div>
            </div>
        </section>

        <section id="one">
            <div className="content">
                <p>　Panerが設立した素数大富豪同好会では、素数大富豪だけでなく、初心者も楽しめるような素数関連トランプゲームの開発も行ってきました。まだまだルールもあやふやなものが多いですが、アイディア次第で面白くなったり、素数大富豪のインフレを防ぐものになるかもしれません。また、2019年に行た大学対抗戦では、素数大富豪の団体戦の可能性も見えてきました。団体戦において主催者によって好きな素数ゲームを選び、対戦するようになると各大会の色が出て新たな面白さも味わえると思います。今後の素数大富豪の発展のためにも、新しいゲームやルールの改良案などをPaner(<Link to="https://twitter.com/tus_1213">完全数</Link>)までお知らせください！</p>
            </div>
        </section>

        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4" style={{padding:"0"}}>
                        <img className="picture" src="https://pbs.twimg.com/media/EDZfvWUU0AAVcPI.jpg" alt="素数大富豪ダブルスの写真" style={{width:"100%"}}/>
                    </div>
                    <div className="content col-lg-8" style={{padding:"0"}}>
                        <div className="content">
                            <header className="major">
                                <h3>素数大富豪ダブルス</h3>
                            </header>
                            <p>同好会のメンバーが考案し、その後「素数大富豪で遊ぼう会in関東」や「素数大富豪大学交流会」などでルール―が改良されている。今後の進化に期待。</p>
                            <p>ルール</p>
                            <p>①2人1組となり、各プレーヤーに手札を7枚程度配る。じゃんけんをし、勝ったプレイヤーとその対面のプレイヤーはアシスト、残りのプレイヤーはショットという役職となる。<br/>②各プレーヤーは手札を確認し、任意のカードを捨て、捨てた分だけ山札から手札を補充する。<br/>③親から順番にチップを賭け、ポーカーのようにコール・レイズ・ドロップのいずれかの行為を選択する。<br/>④残ったプレイヤーは同時に手札を任意の順番で公開し、素数判定を行い、素数である数の中で最も大きい数を出したプレイヤーが全てのチップを回収する</p>
                            <a href="https://twitter.com/9WDIl8WCktlIPKH/status/1127496993738186752"><button type="button" className="btn btn-outline-dark">詳しく見る(Twitter)</button></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 order-lg-2" style={{padding:"0"}}>
                        <img className="picture" src="https://japan.cnet.com/storage/2019/07/12/fa4c989b5f5e74cced7e814e62e2ca94/t/584/438/d/large-105308.jpg" alt="ポーカーの写真" style={{width:"100%"}}/>
                    </div>
                    <div className="content col-lg-8 order-lg-1" style={{padding:"0"}}>
                        <div className="content">
                            <header className="major">
                                <h3>素数ポーカー</h3>
                            </header>
                            <p>素数とポーカーの要素を合わせたゲームです。素数インディアンポーカーなど応用もできます。<br/>用意するもの：トランプとチップと素数判定機</p>
                            <p>ルール</p>
                            <p>①各プレイヤーに手札を5枚配る<br/>②各プレーヤーは手札を確認し、任意のカードを捨て、捨てた分だけ山札から手札を補充する。<br/>③親から順番にチップを賭け、ポーカーのようにコール・レイズ・ドロップのいずれかの行為を選択する。<br/>④残ったプレイヤーは同時に手札を任意の順番で公開し、素数判定を行い、素数である数の中で最も大きい数を出したプレイヤーが全てのチップを回収する<br/>①から④を何回か繰り返し行い、最もチップの量が多いプレイヤーが勝者となる。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4" style={{padding:"0"}}>
                        <img className="picture" src="https://preview.free3d.com/img/2020/04/2374258290470159893/yupx4fuu-900.jpg" alt="チェスクロックの写真" style={{width:"100%"}}/>
                    </div>
                    <div className="content col-lg-8" style={{padding:"0"}}>
                        <div className="content">
                            <header className="major">
                                <h3>チェスクロック付き素数大富豪</h3>
                            </header>
                            <p>将棋やチェスなどで用いられているチェスクロックを使い、素数大富豪の思考時間を適度にコントロールできるゲームです。手札配布後の1分間の思考時間の後、例えば各々3分以内に全ての試合を修了しなければなりません。時間以内に手札が無くなる、または相手がタイムオーバーすると勝利となります。</p>
                            <a href="https://twitter.com/search?q=%E3%83%81%E3%82%A7%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%83%E3%82%AF%E3%80%80%E7%B4%A0%E6%95%B0%E5%A4%A7%E5%AF%8C%E8%B1%AA&src=typed_query&f=live"><button type="button" className="btn btn-outline-dark">About(Twitter)</button></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 order-lg-2" style={{padding:"0"}}>
                        <img className="picture" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="素数表付き素数大富豪の写真" style={{width:"100%"}}/>
                    </div>
                    <div className="content col-lg-8 order-lg-1" style={{padding:"0"}}>
                        <div className="content">
                            <header className="major">
                                <h3>素数表付き素数大富豪</h3>
                            </header>
                            <p>素数表を見ながら素数大富豪をプレイするゲームです。適度な難易度設定をすれば、初心者が素数大富豪の楽しさを体験しつつ、かつ強豪プレイヤーとも楽しみながらプレイすることが可能になると思います。例えば、お化けや多数枚出しなどを含む50個程度の素数を入れるなど、主催者による工夫が見られ、違った面白さが体験できると思います。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div style={{textAlign:"center",marginTop:"40px"}}>
            <Link to="/prime"><button type="button" className="btn btn-outline-dark" style={{marginRight:"10px"}}>Primeに戻る</button></Link>
            <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
        </div>
    </Layout>
    )
}