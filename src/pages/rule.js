import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/prime.css"

export default function Prime(){
    return(
    <Layout>
        <Seo title="Prime / Rule | Panite" description="素数大富豪のルールや基本用語をまとめています" />
        <section id="banner" className="style2" style={{height:"300px"}}>
            <div className="inner">
                <header className="major">
                    <h1>ルール</h1>
                </header>
                <div className="content">
                    <p>素数大富豪のルールや基本用語をまとめています</p>
                </div>
            </div>
        </section>

        <section>
            <div className="content">
                <h2>ゲームの流れ<span style={{fontSize:"small"}}> (Wikipedia参考)</span></h2>
                <ul class="list-group">
                <li class="list-group-item">1. 山札をよくシャッフルし, カードをプレイヤー全員に均等に配る. 初期手札は素数枚であることが望ましい. </li>
                <li class="list-group-item">2. じゃんけん等の方法を利用して, プレイヤーがカードを出す順序を決める.</li>
                <li class="list-group-item">3. 最初の手番のプレイヤーがカードを場に出し, 続いて次の手番のプレイヤーがカードを場に出して重ねていく. ただし, カードの出し方については 4 に従うものとする. カードを出す際に伴う計算は暗算で行わなければならず, カンニング行為を行ってはならない.</li>
                <li class="list-group-item">4. カードは場にあるカードより強いカードしか出すことができない (数字が大きいものほど強い). また, 場に 2 枚組み合わせてカードが出されている場合は, それより強いカードを 2 枚組でしか出すことができない.同様に, n 枚組で場にカードが出ている場合は, それより強い n 枚組でしかカードを出すことができない. なお, カードを組み合わせて出す場合は 4 と J を出した場合は 411 のようになる. </li>
                <li class="list-group-item">5. 出せるカードがない場合や, 戦略上カードを出したくない場合は「パス」を宣言することにより, 手番を次のプレイヤーに回すことができる.</li>
                <li class="list-group-item">6. 他のプレイヤー全員がパスし, 再び場にあるカードを出したプレイヤーの手番となった場合, 場にあるカードは流され, そのプレイヤーの手番からゲームを再開する. このとき, 後述 のルールに従った上で, 自由にカードを場に出すことが出来る. 流されたカードは山札の下に随時追加する.</li>
                <li class="list-group-item">7. プレイヤーは自分の手番に (山札がある場合は) 山札からカードを 1 枚引いて手札に加えることが出来る. 山札からカードを引いた後にカードを場に出してもよい. ただし, パスを宣言した後や, カードを場に出した後に山札からカードを引くことはできない.</li>
                <li class="list-group-item">8. プレイヤーがカードを場に出す度, 素数判定員はプレイヤーが反則を行っていないかチェックする. 反則の場合にはペナルティを与え, 次のプレイヤーに手番を回す.</li>
                <li class="list-group-item">9. 以上を繰り返し, 一番早く手札が無くなったプレイヤーが勝者となる. </li>
                <li class="list-group-item">
                    <h5>特殊な出し方</h5>
                    <p>合成数も条件付きで出すことが出来る(<b>合成数出し</b>). 合成数を出す場合はまず, その数を素因数分解する. そして, 手札にその素因数を表現するカードを全て持っている場合に限り, それらのカードを捨てることにより合成数を表現するカードを場に出すことが出来る. なお, 指数を用いての合成数出しも可能となっている. </p>
                    <p>57はグロタンディーク素数と呼ばれ場を強制的に流す働きをする. 57を出すときに「<b>グロタンカット</b>」と言うことが推奨されている. </p>
                    <p>1729は<b>ラマヌジャン革命</b>と呼ばれ, カードの強弱を反転させる. 例えば, 通常であれば K が最も大きい1枚出しの素数であるが, 革命下では 2 が最強となる. </p>
                </li>
                <li class="list-group-item">
                    <h5>反則(ペナルティ)</h5>
                    <p>素数判定員は各プレイヤーのカードの出し方が正しいかどうかを判定する. 正しくない場合 (具体的には素数として出したがそれが素数でなかった場合, 合成数出しにおける素因数分解の計算間違いなど) は反則として, 場に出したカードを全て手札に戻し (合成数出しの場合は捨てたカードも含む), その枚数だけ更に山札からカードを引いて手札に加えて, 次のプレイヤーに手番を移す. 多くのカードを組み合わせて出す場合は多くのペナルティを受けるリスクが大きくなる. </p>
                </li>
                </ul>
                <div className="text-danger" style={{margin:"20px 0 10px 0",fontSize:"larger"}}>※※他にも二世さんやななみさんがイラストで分かりやすくルールを紹介しています！(写真を押すと元ツイートに飛びます)※※</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <a href="https://twitter.com/kmn573/status/1426799157486841856">
                                <img src="https://pbs.twimg.com/media/E80CRafVIAMaHWb.jpg" alt="" style={{maxWidth:"100%",padding:"5px",border:"solid black"}}/>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://twitter.com/m_2sei/status/893664042153164800">
                                <img src="https://pbs.twimg.com/media/DGyspTyUQAIHVUR?format=jpg&name=medium" alt="" style={{maxWidth:"100%",padding:"5px",border:"solid black"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="content">
                <h2>用語一覧(後日追加予定)</h2>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            カマトト
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            故意にペナルティを受けること。上がりからは遠ざかるが手札を一度に大量に補充することができ、戦略の幅を広げる効果がある。
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            HNP
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            「Hello New Prime」の略。ネット上での対戦でプレーヤーが素数に出会ったときに使われる。HNP杯をきっかけに生まれた言葉。「Happy New Prime」の意味もある。
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            overKJQJ(おばけ)
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                素数大富豪において4枚出し最大のKJQJに対し、合成数出しをすることでそれより大きい数を出せるようにしたものの総称。おばけとも言う。例えば、KQJQ=2^3×3×101×5413などがある。強豪プレイヤーは何種類かのおばけを覚えている。また、相全出し下でも一度に大量の札を消費する必殺技ともなりうる。
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            おばあちゃん
                        </button>
                        </h2>
                        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>overKJQJを出せるチャンス</strong>を略しておばあちゃんと言う。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div style={{textAlign:"center"}}>
            <Link to="/prime"><button type="button" className="btn btn-outline-dark" style={{marginRight:"10px"}}>Primeに戻る</button></Link>
            <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
        </div>
    </Layout>
    )
}