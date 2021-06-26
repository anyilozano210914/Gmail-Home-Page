import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../components/pages/home/home';
import Header from '../components/molecules/header/header';
import Sidebar from '../components/molecules/sidebar/sidebar';
import SidebarRight from '../components/molecules/sidebar_right/sidebar_right';
import { Row, Col } from 'reactstrap';


export default function Routes() {
    return (
        <Router>
            <Header />
            <Row className="contain-routes">
                <Col md="2" className="sidebar-container-primary">
                    <Sidebar />
                </Col>
                <Col md="12" lg="9" className="contain-center">
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Col>
                <div className="right_sidebar d-flex justify-content-center">
                    <SidebarRight />
                </div>
            </Row>
        </Router>
    )
}