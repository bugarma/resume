import React from 'react';
import { Divider, Row, Col } from 'antd';
import styled from "styled-components";

import * as data from './Data';
import Introduction from "./components/Introduction";
import SkillBlock from './components/SkillBlock';
import Work from './components/Work';
import Course from './components/Course';

const Container = styled.div`
    max-width: 1050px;
    margin: auto;
    margin-top: 30px;
`;

const About = () => {
    const SkillBlocks = data.skillData.map((e) => (
        <SkillBlock key={e.title} title={e.title} tools={e.tools} score={e.score} />
    ))

    return (
        <Container>
            <Introduction/>
            <br/>
            <Divider />
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
            <Divider />
            <br/>

            <h2>Experience</h2>
            <br/>
            <Work />
            <br/>
            <Divider />
            <br/>

            <h2>Selected Courses & Projects</h2>
            {data.courseData.map((e) => (
                <Course key={e.name} name={e.name} desc={e.desc} link={e.link} photo={e.photo || ""} />
            ))}

            <br/>
            <br/>
            <br/>
        </Container>
    );
};

export default About;
