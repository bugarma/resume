import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';

const style = {
    img: {
        maxHeight: '100%',
        maxWidth: '80%',
        display: 'block',
        margin: 'auto',
        minHeight: 240
    },
    row: {
        marginTop: 50,
    }
}

const Course = ({ name, desc, link }) => (
    <Row style={style.row} type="flex" align="middle">
        <Col span={24}>
            <h3>{name}</h3>
            <p>{desc}</p>
            <a href={link}><Button type="circle" icon="link" />&nbsp;&nbsp;{link}</a>
        </Col>
    </Row>
)

Course.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Course;
