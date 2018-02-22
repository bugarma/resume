import React, {Component} from 'react';
import {Progress, Row, Col} from 'antd';
import styled from 'styled-components';

const Container = styled.div `
    .ant-progress-circle-path {
        stroke: #79ABB8;
    }
`;

const List = styled.ul`
    padding-left: 15px;
`

const SkillBlock = ({ title, tools, score }) => (
    <Container>
        <Row type="flex" align="middle" gutter={48}>
            <Progress type="circle" percent={score}/>
            <Col>
                <h2>{title}</h2>
                <List>
                    {tools.map((t, i)=>(<li key={i}>{t}</li>))}
                </List>
            </Col>
        </Row>
    </Container>
);

export default SkillBlock;
