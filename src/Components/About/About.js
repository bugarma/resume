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
                        <h1>任精瑋 Aaron Jen</h1>
                        <h3>勇於嘗試，持續學習，用程式便利自己的人生。</h3>

                        <h3>土木系畢業生，但想從事資訊相關的產業，有許多實作與實習的經驗，擅長的領域有網頁前後端工程、資料處理、機器學習。</h3>

                        <h4>
                            <a href="https://bugarma.github.io">
                                <Button icon="github" type="circle"/>&nbsp;&nbsp;
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
                <Divider></Divider>

                <h2>Experience</h2>
                <br/>
                <Work></Work>
            </div>
        );
    }
}

export default About;
