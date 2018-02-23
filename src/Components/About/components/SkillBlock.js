import React from 'react';
import {Progress, Row} from 'antd';
import styled from 'styled-components';

const Container = styled.div `
    .ant-progress-circle-path {
        stroke: #79ABB8;
    }
`;

const List = styled.ul`
    padding-left: 15px;
    font-size: 1.1em;
`

const SkillBlock = ({ title, tools, score }) => (
    <Container>
        <Row type="flex" align="middle" gutter={48}>
            <Progress type="circle" percent={score} format={(p) => p}/>
            <div style={{flex: 1}}>
                <h2>{title}</h2>
                <List>
                    {tools.map((t, i)=>(<li key={i}>{t}</li>))}
                </List>
            </div>
        </Row>
    </Container>
);

export default SkillBlock;
