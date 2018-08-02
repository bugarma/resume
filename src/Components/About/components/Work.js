import React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";
import { timelineData } from '../Data';


const Container = styled.div`
    display: flex;
    width: 100%;
`;

const LeftCol = styled.div`
    width: 200px;
    position: relative;
    border-right: #78ABB9 solid 3px;
    text-align: end;
    padding-right: 2em;
`;

const RightCol = styled.div`
    flex: 1;
    margin-left: 2em;
    white-space: pre-line;
    margin-bottom: 1em;
`;


const Dot = styled.i`
    color: #78ABB9;
    position: absolute;
    top: 2px;
    right: -7px;

    &::before {
        font-size: 12px;
    }
`;

const Title = styled.div`
    color: #787878;
    font-weight: bold;
    margin-bottom: 0.5em;
    font-size: 1.05em;
`;

const FlexBlock = styled.div`
    display: flex;
`;

const timeline = timelineData.map((e) => (
    <Container key={e.title}>
        <LeftCol>
            {e.date}
            <Dot className="fa fa-circle" aria-hidden="true"/>
        </LeftCol>
        <RightCol>
            <Title>{e.title}</Title>
            <div style={{margin: '10px 0'}}>
                <FlexBlock>
                    <div style={{marginRight: 10}}>
                        <i className="fa fa-briefcase" aria-hidden="true"/>
                    </div>
                    <div>{e.content}</div>
                </FlexBlock>
                <FlexBlock>
                    <div style={{marginRight: 10}}>
                        <i className="fa fa-wrench" aria-hidden="true"/>
                    </div>
                    <div>{e.tools}</div>
                </FlexBlock>
            </div>
        </RightCol>
    </Container>
));

const MobileContainer = styled.div`
    width: 100%;
    text-align: center;
    max-width: 400px;
    margin: auto;
    
    div {
        line-height: 2em;
    }
`;

const Line = styled.div`
    border-right: #78ABB9 solid 3px;
    height: 20px;
    width: 0px;
    margin: auto;
`;

const mobileTimeline = timelineData.map(e => (
    <MobileContainer key={e.title}>
        <Line/>
        <div>
            <i className="far fa-calendar-alt" />
            &nbsp;&nbsp;
            {e.date}
        </div>
        <div>
            <i className="fa fa-briefcase" aria-hidden="true"/>
            &nbsp;&nbsp;
            {e.title}
        </div>
        <div>
            <i className="fa fa-wrench" aria-hidden="true"/>
            &nbsp;&nbsp;
            {e.content}
        </div>
        <Line/>
    </MobileContainer>
))


const Work = () => (
    <MediaQuery minDeviceWidth={768}>
        {(match) => <div>
            {match? timeline : mobileTimeline}
        </div>}
    </MediaQuery>
);

export default Work;
