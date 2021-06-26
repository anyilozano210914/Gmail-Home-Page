import React, { useState, useEffect } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { GrRotateRight } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from 'axios';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FaBox, FaStar, FaClock } from "react-icons/fa";
import { AiOutlineUsergroupDelete, AiFillTag } from "react-icons/ai";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mails: null,
            activeTab: '1'
        }

        this.getApi = this.getApi.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.getApi();
    }

    getApi() {
        axios.get('/api/api.json')
            .then((res) => {
                this.setState({ mails: res.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    toggle(tab) {
        const {
            activeTab
        } = this.state;
        if (activeTab !== tab) this.setState({ activeTab: tab })
    }

    render() {
        const {
            activeTab,
            mails
        } = this.state;
        return (
            <div>
                <Row className="mt-3 d-flex justify-content-between">
                    <Col md="8" xs="6" className=" contan-boton generator-1">
                        <Row>
                            <Col md="2" className="container-checbox">
                                <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_white_20dp.png" />
                                <FiChevronDown color="#fff" />
                            </Col>
                            <Col md="3" xs="5">
                                <GrRotateRight className="profile-2" color="#fff" width="20" />
                                <BsThreeDotsVertical className="profile-5" color="#fff" width="20" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" xs="4" className="d-flex justify-content-end align-items-center text-center">
                        <span className="text-white  text-end">1-50 de 299</span>
                    </Col>
                    <Col md="2" className="chevrons">
                        <GoChevronLeft className="chevronleft" color="#fff" />
                        <GoChevronRight color="#fff" />
                    </Col>
                </Row>
                <Col md="12" className="tabs-container mt-4">
                    <Col md="12">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                > 
                                <FaBox  className="mr-3"/>
                                    Principal
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    <AiOutlineUsergroupDelete  className="mr-3" width="30"/>
                                    Social
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    <AiFillTag  className="mr-3" width="30"/>
                                    Promociones
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className="tab-1">
                                {
                                    mails != null ?
                                        mails.map((item, index) => (
                                            <Row className="tabs-row" key={index}>
                                                <Col md="3" xs="3" className="text-first">
                                                    <Row>
                                                        <Col md="1" className="container-checbox">
                                                            <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_black_20dp.png" />
                                                        </Col>
                                                        <Col md="1" className="container-checbox">
                                                            <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png" />
                                                        </Col>
                                                        <Col md="10" className="name">
                                                            <span><b>{item.name}</b></span>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col md="6" className="text-description">
                                                    <Row>
                                                        <span ><b>{item.description} -</b>{item.description} </span>
                                                    </Row>
                                                </Col>
                                                <Col md="3" className="d-flex justify-content-end text-date">
                                                    <span><b>{item.created_at}</b></span>
                                                </Col>
                                            </Row>

                                        )) : null
                                }

                            </TabPane>
                            <TabPane tabId="2" className="tab-1">
                            {
                                    mails != null ?
                                        mails.map((item, index) => (
                                            <Row className="tabs-row" key={index}>
                                                <Col md="3" xs="3" className="text-first">
                                                    <Row>
                                                        <Col md="1" className="container-checbox">
                                                            <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_black_20dp.png" />
                                                        </Col>
                                                        <Col md="1" className="container-checbox">
                                                            <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png" />
                                                        </Col>
                                                        <Col md="10" className="name">
                                                            <span><b>{item.name}</b></span>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col md="6" className="text-description">
                                                    <Row>
                                                        <span ><b>{item.description} -</b>{item.description} </span>
                                                    </Row>
                                                </Col>
                                                <Col md="3" className="d-flex justify-content-end text-date">
                                                    <span><b>{item.created_at}</b></span>
                                                </Col>
                                            </Row>

                                        )) : null
                                }
                            </TabPane>
                            <TabPane tabId="3" className="tab-1">
                            {
                                    mails != null ?
                                        mails.map((item, index) => (
                                            <Row className="tabs-row" key={index}>
                                                <Col md="3" xs="3" className="text-first">
                                                    <Row>
                                                        <Col md="1" className="container-checbox">
                                                            <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_black_20dp.png" />
                                                        </Col>
                                                        <Col md="1" className="container-checbox">
                                                            <img className="profile" src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png" />
                                                        </Col>
                                                        <Col md="10" className="name">
                                                            <span><b>{item.name}</b></span>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col md="6" className="text-description">
                                                    <Row>
                                                        <span ><b>{item.description} -</b>{item.description} </span>
                                                    </Row>
                                                </Col>
                                                <Col md="3" className="d-flex justify-content-end text-date">
                                                    <span><b>{item.created_at}</b></span>
                                                </Col>
                                            </Row>

                                        )) : null
                                }        
                            </TabPane>
                        </TabContent>
                    </Col>
                </Col>
                {/* footer */}
                <Col md="12"  className="d-flex justify-content-between mt-3 footer">
                    <Col md="4">
                        <span className="text-white">2.55 GB de 15 GB utilizado(s)</span>
                    </Col>
                    <Col md="4">
                        <span className="text-white">Condiciones · Privacidad · Políticas de programa</span>
                    </Col>
                    <Col md="4 d-flex justify-content-end">
                        <span className="text-white">Última actividad de la cuenta: hace 57 minutos</span>
                    </Col>
                </Col>
            </div>
        )
    }
}

export default Home
