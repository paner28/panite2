import { Link } from "gatsby"
import React from "react"
import "../styles/index.css"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"

import pic01 from '../../static/pic01.jpg'
import pic02 from '../../static/pic02.jpg'
import pic03 from '../../static/pic03.jpg'
import pic04 from '../../static/pic04.jpg'
import pic05 from '../../static/pic05.jpg'
import pic06 from '../../static/pic06.jpg'

export default function Home() {
  return(
    <Layout>
      <Seo title="Panite" description="Paner(完全数)のHPです。自分の気に入った数学パズルなどをまとめたQ-List、素数大富豪にまつわる様々な記事や、おすすめのアニメの紹介などをしています。" />
      <Hero/>
      <div id="one">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-6" style={{padding:"0",backgroundImage: `url(${pic01})`,backgroundSize:"cover"}}>
              <Link to="/list/1" className="link-text">
                <div className="section section1" >
                  <h3>Questions</h3>
                  <p>数学の問題や数学パズルなど</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-8 col-sm-6"  style={{padding:"0",backgroundImage: `url(${pic02})`,backgroundSize:"cover"}}>
              <Link to="/prime" className="link-text">
                <div className="section section2">
                  <h3>Prime</h3>
                  <p>素数大富豪に関するページ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-sm-6" style={{padding:"0",backgroundImage: `url(${pic03})`,backgroundSize:"cover"}}>
              <Link to="/math" className="link-text">
                <div className="section section3">
                  <h3>Math</h3>
                  <p>Panerが今までに勉強してきた数学やグラフ理論の紹介</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6" style={{padding:"0",backgroundImage: `url(${pic04})`,backgroundSize:"cover"}}>
              <Link to="/program" className="link-text">
                <div className="section section4">
                  <h3>Program</h3>
                  <p>学んできた言語や制作物</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-6" style={{padding:"0",backgroundImage: `url(${pic05})`,backgroundSize:"cover"}}>
              <Link to="/hobby" className="link-text">
                <div className="section section5">
                  <h3>hobby</h3>
                  <p>趣味に関するページ</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-8 col-sm-6" style={{padding:"0",backgroundImage: `url(${pic06})`,backgroundSize:"cover"}}>
              <Link to="/" className="link-text">
                <div className="section section6">
                  <h3>Others</h3>
                  <p>その他:鋭意制作中</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content" style={{textAlign:"center",paddingTop:"40px"}}>
        <h2>Introduction</h2>
        <p>数学科の学生である私が気に入ったクイズや数学パズルなどを共有していくサイトです。他にも、自分の興味のある分野や趣味についての内容も紹介していきます。</p>
        {/* <Link to="/introduction"><button type="button" className="btn btn-outline-dark">Learn more</button></Link> */}
      </div>
    </Layout>
  )
}
