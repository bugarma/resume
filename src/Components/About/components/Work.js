import React, { Component } from 'react';
import styled from 'styled-components';
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

const timeline = timelineData.map(function(e, i){
    return (
        <Container key={i}>
            <LeftCol>
                {e.date}
                <Dot className="fa fa-circle" aria-hidden="true"/>
            </LeftCol>
            <RightCol>
                <Title>{e.title}</Title>
                <div style={{margin: '10px 0'}}>
                    <FlexBlock>
                        <div style={{marginRight: 10}}>
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div>{e.content}</div>
                    </FlexBlock>
                    <FlexBlock>
                        <div style={{marginRight: 10}}>
                            <i className="fa fa-wrench" aria-hidden="true"></i>
                        </div>
                        <div>{e.tools}</div>
                    </FlexBlock>
                </div>
            </RightCol>
        </Container>
    );
});



class Work extends Component {
    render() {
        return (
            <div>
                {timeline}
            </div>
        );
    }

}

export default Work;
