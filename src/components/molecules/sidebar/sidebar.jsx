import React from 'react'
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaBox, FaStar, FaClock } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsFillChatQuoteFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdDrafts, MdLabel, MdMail, MdKeyboard, MdPhone } from "react-icons/md";
import { Button, Col, Row } from 'reactstrap';

const routes = [
  {
    title: 'Recibidos',
    itemId: '/',
    elemBefore: () => <FaBox color="#fff" />
  },
  {
    title: 'Destacados',
    itemId: '/#1',
    elemBefore: () => <FaStar color="#fff" />
  },
  {
    title: 'Pospuestos',
    itemId: '/#2',
    elemBefore: () => <FaClock color="#fff" />
  },
  {
    title: 'Enviados',
    itemId: '/#3',
    elemBefore: () => <RiSendPlane2Fill color="#fff" />
  },
  {
    title: 'Borradores',
    itemId: '/#4',
    elemBefore: () => <MdDrafts color="#fff" />
  },
  {
    title: 'Mas',
    subNav: [
      {
        title: 'Importantes',
        itemId: '/#',
        elemBefore: () => <MdLabel color="#fff" />
      },
      {
        title: 'Chats',
        itemId: '/#',
        elemBefore: () => <BsFillChatQuoteFill color="#fff" />
      },
      {
        title: 'Programados',
        itemId: '/#',
        elemBefore: () => <img src="https://www.gstatic.com/images/icons/material/system/1x/schedule_send_white_20dp.png" />
      },
      {
        title: 'Todos',
        itemId: '/#',
        elemBefore: () => <MdMail color="#fff" />
      },
      {
        title: 'Spam',
        itemId: '/#',
        elemBefore: () => <img src="https://www.gstatic.com/images/icons/material/system/1x/report_white_20dp.png" />
      },
    ]
  },
]



const Sidebar = () => {
  return (
    <div className="contain-sidebar">
      <Col md="12" className="mt-3 mb-3 ml-1 contan-boton">
        <Button className="buton">Redactar</Button>
      </Col>
      <Navigation
        className="sidebar mt-3"
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
        }}
        items={routes}
      />
      <Col md="12" className="mt-3 mb-3 ml-1 contan-boton">
        <span className="text-white">Meet</span>
      </Col>
      <Col md="12" className="mt-3 mb-3 ml-1 contan-boton">
        <BsFillCameraVideoFill color="#fff" className="mr-2" />
        <span className="text-white">Nueva reunión</span>
      </Col>
      <Col md="12" className="mt-3 mb-3 ml-1 contan-boton clase" >
        <MdKeyboard color="#fff" className="mr-2" />
        <span className="text-white">Unirte a una reunión</span>
      </Col>
      <Col md="12" className="class-border"></Col>


      {/* perfil */}
      <Col md="12" className="mt-4 mb-3 ml-1 contan-boton">
        <span className="text-white">Hangoust</span>
      </Col>
      <Col md="12" className="mt-4 mb-3 ml-1 contan-boton">
        <img className="profile" src="https://lh3.googleusercontent.com/ogw/ADea4I7tnMdo0AElhcj7mQUUtEdmd3toAY_PmU-UkyyiSw=s32-c-mo" />
        <span className="text-white">Anyi Lozano</span>
      </Col>
      <Col md="12" className="class-border"></Col>

      {/* Hangoust */}
      <Col md="12" className="mt-5 mb-3 ml-1 d-flex justify-content-center align-items-center">
        <img className="profile_photo" src="https://elblogdelaagencia.files.wordpress.com/2013/06/hangouts_destacada.png?w=480" />
      </Col>
      <Col md="12" className="d-flex justify-content-center align-items-center">
        <span className="text-white">No hay chats recientes. <br /> Inicia uno nuevo</span>
      </Col>

      {/* Footer */}
      <Col md="12" className="class-border sseparation"></Col>
      <Row className="mt-3 d-flex justify-content-center align-items-center">

        <Col md="1" xs="1" className="contan-boton generator">
          <img className="profile" src="//ssl.gstatic.com/ui/v1/icons/mail/wbt/contacts_white_icon21.png" />
        </Col>
        <Col md="1" xs="1" className="contan-boton">
          <img className="profile-2" src="https://elblogdelaagencia.files.wordpress.com/2013/06/hangouts_destacada.png?w=480" width="20" />
        </Col>
        <Col md="1" xs="1" className="contan-boton">
          <MdPhone color="#fff" className="mr-2" />
        </Col>
      </Row>

    </div>
  )
}

export default Sidebar
