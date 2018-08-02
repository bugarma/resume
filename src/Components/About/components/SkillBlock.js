import React from 'react';
import PropTypes from "prop-types";
import { Progress, Row, Col } from 'antd';
import styled from 'styled-components';

const Container = styled.div `
    .ant-progress-circle-path {
        stroke: #79ABB8;
    }
`;

const List = styled.ul`
    padding-left: 15px;
    font-size: 1.1em;
`;

const Content = styled.div`
    flex: 1;

    @media screen and (max-width: 768px){
        margin-top: 12px;
    }
`;

const SkillBlock = ({ title, tools, score }) => (
    <Container>
        <Row type="flex" align="top" gutter={48}>
            <Col xs={24} md={8}>
                <Progress
                    type="circle"
                    percent={score}
                    format={(p) => p}/>
            </Col>
            <Content>
                <h2>{title}</h2>
                <List>
                    {tools.map((t)=>(<li key={t}>{t}</li>))}
                </List>
            </Content>
        </Row>
    </Container>
);

SkillBlock.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillBlock;
