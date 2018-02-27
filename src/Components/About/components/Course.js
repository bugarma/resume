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
    }
}

const Course = ({ name, desc, link, photo }) => {
    return (
        <Row type="flex" align="middle">
            <Col span={8}><img style={style.img} src={photo} alt=""/></Col>
            <Col span={16}>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href={link}><Button type="circle" icon="link" />&nbsp;&nbsp;{link}</a>
            </Col>
        </Row>
    );
}


Course.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};

export default Course;
