import React from 'react';
import { Row, Col, Button } from 'antd';
import styled from "styled-components";

import avatar from '../avatar.jpg';

const AvatarContainer = styled.div`
    text-align: center;
    margin-bottom: 16px;

    .avatar {
        width: 200px;
        border-radius: 50%;
    }
`;


const Introduction = () => (
    <Row type="flex" justify='center' align='middle'>
        <Col xs={24} md={8}>
            <AvatarContainer>
                <img className="avatar" src={avatar} alt=""/>
            </AvatarContainer>
        </Col>
        <Col xs={24} md={16}>
            <h1>任精瑋 Aaron Jen</h1>
            <h3>勇於嘗試，持續學習，用程式便利自己的人生。</h3>
            <h3>土木系畢業生，但想從事資訊相關的產業，有許多實作與實習的經驗，擅長的領域有網頁前後端工程、資料處理、機器學習。</h3>
            <br/>
            <h4><Button icon="book" type="circle"/>&nbsp;&nbsp;台大土木系畢業 / 台大土木研究所電腦輔助工程組肄業</h4>
            <h4>
                <a href="https://github.com/bugarma">
                    <Button icon="github" type="circle"/>&nbsp;&nbsp;
                    https://github.com/bugarma
                </a>
            </h4>
            <h4>
                <a href="https://www.linkedin.com/in/ching-wei-jen-a8818810a/">
                    <Button icon="linkedin" shape="circle"/>&nbsp;&nbsp;
                    https://www.linkedin.com/in/ching-wei-jen-a8818810a/
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
);

export default Introduction;