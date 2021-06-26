import React from 'react'
import { Col } from 'reactstrap'

function SidebarRight() {
    return (
        <div className="sidebar_right">
            <Col md="12"  className="mt-3 d-flex justify-content-center">
                <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" width="20" height="20"/>
            </Col>
            <Col md="12"  className="mt-3 d-flex justify-content-center">
                <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" width="20" height="20"/>
            </Col>
            <Col md="12"  className="mt-3 d-flex justify-content-center">
                <img src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" alt="" width="20" height="20"/>
            </Col>
            <Col md="12"  className="mt-3 d-flex justify-content-center">
                <img src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" alt="" width="20" height="20"/>
            </Col> 
            <Col md="12" className="class-border separation"></Col>

            <Col md="12"  className="mt-5 d-flex justify-content-center">
                <img src="https://ci5.googleusercontent.com/proxy/pEe_-o6dQUaCqmyxKGMuDITj5lvj9Fx69vYLQaG4owwecxPVa-ZNkL0hVvWg8Ctn7eR5JdJ6YWaFy-sJDrD0RJ_hzCelqsvi_Htv5I4lP7-bTs82VQUXwTIPB5XIgIN7ND4J0qx55UyKJE9mj-2iEqs=s48" alt="" width="20" height="20"/>
            </Col> 
            <Col md="12"  className="mt-4 d-flex justify-content-center">
                <img src="https://www.gstatic.com/images/icons/material/system/1x/add_white_24dp.png" alt="" width="20" height="20"/>
            </Col> 
        </div>
    )
}

export default SidebarRight
