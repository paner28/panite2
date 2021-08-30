import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import pic08 from '../../static/primegame.jpg'
import pic09 from '../../static/primehunter.jpg'
import pic10 from '../../static/quatron.jpg'
import html from "../../static/html.png"
import css from "../../static/css.png"
import javascript from "../../static/javascript.png"
import sass from "../../static/sass.png"
import python from "../../static/python.png"
import react from "../../static/react.png"
import vue from "../../static/vue.png"
import gatsby from "../../static/gatsby.png"
import bootstrap from "../../static/bootstrap.png"

const language = [
    ["HTML",html,"ハイパーテキストを記述するためのマークアップ言語の1つで、主にウェブページを表現するために用いられる。大学1年生の授業で初めて学ぶ。Bootstrapを学んだことで最近再び触り始めた。"],
    ["CSS",css,"ウェブページのスタイルを指定するための言語。HTMLと同時に学び、もっとも苦しまされてきたと言っても過言ではないやつ。"],
    ["JavaScript",javascript,"プロトタイプベースのオブジェクト指向スクリプト言語。HTMLやCSSと合わせて用いることで動的な処理が可能になる。"],
    ["Bootstrap",bootstrap,"フロントエンドWebアプリケーションフレームワークで、HTMLやCSSベースのデザインテンプレートとして用意されている。このサイトも用いてるが、簡単に美しいデザインを用いることができる。","https://getbootstrap.jp/"],
    ["Sass",sass,"CSSを拡張し、書きやすく、見やすくされたスタイルシート。変数やif文なども使うことが出来るため、慣れれば非常に扱いやすい。","https://sass-lang.com/"],
    ["Python",python,"インタープリタ型の高水準汎用プログラミング言語で、コードの可読性が非常に高い。素数判定などのパッケージも豊富で重宝している。コロナ下で学んだ。PyGameを用いて素数大富豪RPGやLINEBot、Discordの素数判定Botなども作成した。","https://www.python.org/"],
    ["brython",,"PythonをWebブラウザ上で動かすことができるようにするJavaScriptのライブラリ。web上で高速に素数判定をするために用いた。素数Hunterはこれを用いている。","https://brython.info/"],
    ["Django",,"Pythonで実装されたWebアプリケーションフレームワーク。ブログポストなどが充実しており、日本語の記事も豊富。Paner's Blogはこれを用いて作成した。","https://docs.djangoproject.com/ja/3.2/"],
    ["React",react,"ユーザインタフェース構築のためのJavaScriptライブラリ。シングルページアプリケーションやモバイルアプリケーション(React Native)の開発におけるベースとして使用できる。素数判定アプリを作ろうとして学んだ。このサイトも基本はReactで作られている。","https://ja.reactjs.org/"],
    ["Vue",vue,"Webアプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースのJavaScriptフレームワーク。SPAを作るために学んだが、React派に寝返った。","https://jp.vuejs.org/index.html"],
    ["Gatsby",gatsby,"React向けの静的サイトジェネレータ。多様なテンプレートやプラグインが用意されており、爆速でサイトを作ることができる。また、データベースや複雑なコーディングも不要で徐々に人気を集めている。このサイトもGatsbyで作成している。","https://www.gatsbyjs.com/"],
]

export default function Prime(){
    return(
    <Layout>
        <Seo title="Program | Panite" description="Panerが今までに作成してきたものや学んできた言語をまとめています" />
        <section id="banner" className="style4" style={{height:"300px"}}>
            <div className="inner">
                <header className="major">
                    <h1>プログラム</h1>
                </header>
                <div className="content" style={{marginTop:"20px"}}>
                    <p>Panerが今までに作成してきたものや学んできた言語をまとめています</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="content">
                    <p>　Panerが今迄に学んできた言語や、作成した言語を紹介します。大学1年生の時にプログラムに初めて触れ、その後コロナ自粛が始まった春休みに次々と新しい言語を学び、Botやゲームなどを作ってきました。</p>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        {language.map((k) => 
                            <div className="col-lg-4 col-sm-6">
                                <a href={k[3]} style={{textDecoration:"none"}}>
                                    <div className="card">
                                        <div class="card-body">
                                            <h4 class="card-title link-text">{k[0]}<img src={k[1]} style={{width:"30px"}} alt=""/></h4>
                                            <p class="card-text link-text">{k[2]}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section id="two" className="spotlights">
                <div className="content">
                    <h2 style={{textAlign:"center"}}>制作物一覧</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5" style={{padding:"0"}}>
                            <Link to="https://paner28.github.io/primegame/" className="image">
                                <img className="picture" src={pic08} alt="あああ" style={{width:"100%"}}/>
                            </Link>
                        </div>
                        <div className="content col-lg-7" style={{padding:"0"}}>
                            <div className="content">
                                <header className="major">
                                    <h3>素数ゲーム</h3>
                                </header>
                                <p>小さい素数を覚えたいという動機から作成されたゲームです。数字をタップして、素数であれば色が変わるといういたってシンプルなルールです。ステージをクリアしたときに1つの絵のようになるのが楽しいです。</p>
                                <Link to="https://paner28.github.io/primegame/"><button type="button" className="btn btn-outline-dark">Go Site</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 order-lg-2" style={{padding:"0"}}>
                            <Link to="https://paner28.github.io/primehunter/" className="image">
                                <img className="picture" src={pic09} alt="" style={{width:"100%"}}/>
                            </Link>
                        </div>
                        <div className="content col-lg-7 order-lg-1" style={{padding:"0"}}>
                            <div className="content">
                                <header className="major">
                                    <h3>素数ハンター</h3>
                                </header>
                                <p>読んで字のごとく素数を探すアプリです。普段はコマンドプロンプトで実行していますが、それをウェブ上で行いたいという気持ちとBrythonで遊びたいということから作成しました。4つ子素数の探索機能など、まだまだ修正箇所はあります。</p>
                                <Link to="https://paner28.github.io/primehunter/"><button type="button" className="btn btn-outline-dark">Go Site</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5" style={{padding:"0"}}>
                            <Link to="https://paner28.github.io/quattron/" className="image">
                                <img className="picture" src={pic10} alt="" style={{width:"100%"}}/>
                            </Link>
                        </div>
                        <div className="col-lg-7" style={{padding:"0"}}>
                            <div className="content">
                                <header className="major">
                                    <h3>クワトろん</h3>
                                </header>
                                <p>Prime Hunterを作成したはいいものの、それを覚えるための物を作りたいと思い、4つ子素数に限って覚えるための物を作りました。strageを使うなど少しずつレベルアップしているはず。素数のリストが手入力なので要検討。</p>
                                <Link to="https://paner28.github.io/quattron/"><button type="button" className="btn btn-outline-dark">Go Site</button></Link>
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