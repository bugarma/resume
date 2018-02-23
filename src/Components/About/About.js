import React, { Component } from 'react';
import { Divider, Row, Col, Button } from 'antd';
import avatar from './avatar.jpg';
import style from './About.css';
import * as data from './Data';
import SkillBlock from './components/SkillBlock';
import Work from './components/Work';

class About extends Component {
    render() {
        const SkillBlocks = data.skillData.map((e, i) => {
            console.log(e.tools);
            return (
                <SkillBlock key={i} title={e.title} tools={e.tools} score={e.score}></SkillBlock>
            );
        })

        return (
            <div className={style.container}>
                <Row type="flex" justify='center' align='middle'>
                    <Col span={8}>
                        <div style={{textAlign: 'center'}}>
                            <img className={style.avatar} src={avatar} alt=""/>
                        </div>
                    </Col>
                    <Col span={16}>
                        <h1>任精瑋, Aaron Jen</h1>
                        <h3>勇於嘗試，持續學習，用程式便利自己的人生。</h3>
                        <h3>土木系畢業生，但想從事資訊相關的產業，有許多實作與實習的經驗，擅長的領域有網頁前後端工程、資料處理、機器學習。</h3>
                        <br/>
                        <h4>
                            <a href="https://github.com/bugarma">
                                <Button icon="github" type="circle"/>&nbsp;&nbsp;
                                https://github.com/bugarma
                            </a>
                        </h4>
                        <h4>
                            <a href="https://bugarma.github.io">
                                <Button icon="layout" type="circle"/>&nbsp;&nbsp;
                                https://bugarma.github.io
                            </a>
                        </h4>
                        <h4>
                            <a href="mailto:aaron821124@gmail.com">
                                <Button icon="mail" type="circle"/>&nbsp;&nbsp;
                                aaron821124@gmail.com
                            </a>
                        </h4>
                    </Col>
                </Row>
                <Divider></Divider>
                <br/>

                <h2>Skills</h2>
                <br/>
                <Row type="flex">
                    <Col span="12">{SkillBlocks[0]}</Col>
                    <Col span="12">{SkillBlocks[1]}</Col>
                </Row>
                <br/>
                <Row type="flex">
                    <Col span="12">{SkillBlocks[2]}</Col>
                    <Col span="12">{SkillBlocks[3]}</Col>
                </Row>
                <br/>
                <Divider></Divider>

                <h2>Experience</h2>
                <br/>
                <Work></Work>
                <br/>
                <Divider></Divider>

                <h2>Selected Courses & Projects</h2>
                <br/>
                <h3>機器學習及其深層與結構化</h3>
                <p>
                    在這門課當中，我學會了資料處理、機器學習與深度學習的模型設計、Tensorflow模型實作，學期中經歷四次大型作業與期末專題，每一次作業都是模型設計並與課堂同學比賽準確度，實作了CNN、LSTM、GAN等模型，也使用了NLTK、Gensim等自然語言處理工具，在課堂上的表現不錯，所設計的模型至少都有過課堂要求的baseline，最好的一次還拿到了課堂評分的前三名。
                    <br/>
                    Projects Link: https://github.com/bugarma/MLDS2017
                </p>

                <h3>自然語言處理</h3>
                <p>
                    學習自然語言處理基礎與理論。期末Project使用NLTK、Gensim、Tensorflow...等Python Package建立語意模型，判斷飯店評論回復的面向與好壞。
                    Project Link:
                </p>

                <h3>視覺化技術在工程上之應用</h3>
                <p>
                    學習遊戲引擎Unity來建立模型與場景，模擬工程上的情況。課程中學了許多Unity的使用與操作。期末Project為建立有重力的3D俄羅斯方塊，希望能讓玩的同學訓練3D空間概念與結構支撐。
                    Project Link:
                </p>
            </div>
        );
    }
}

export default About;
