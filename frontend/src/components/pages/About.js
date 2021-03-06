import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Meg_Avatar from '../static/Meg_Avatar.jpg';
import MBD_KM_Top_of_Airplane from '../static/MBD_KM_Top_of_Airplane.jpg';
import MDB_KM_Castle from '../static/MDB_KM_Castle.jpg';
import MD_Cover from '../static/MD_Cover.jpg';
import './HomePage.css';


export default class About extends Component {
  render() {
    return (
      <div>
           <Jumbotron className="jumbotron-about">
         <h2>Did you like your fortune, land dweller?</h2>
           <Row>
             <Col xs={12} sm={3} className="sidebar-section">
               <a href="https://neyonajones.com" target="_blank" rel="noopener noreferrer">
               <Image src={Meg_Avatar} alt="My Avatar" roundedCircle fluid />
               </a>
             </Col>
             <Col xs={12} sm={9} className="main-section">
               <p>
                 I hope you did! This site was made with Django, the Django Rest Framework, React, React Hooks, React-Bootstrap, Redux, React-Redux, Axios, etc.
                 The maker also knows a lot of Python beyond Django.
               </p>
               <p>
                 The <u><a href="https://www.monsterdreamsbook.com" target="_blank" rel="noopener noreferrer">Monster Dreams</a></u> book art is by Kerri Marshall, the other art on these pages is by Meghan Myers.
               </p>
               <p>
                 Meghan Myers made this site and is looking for work, and if you are interested in hiring her, use the <u><a href="/contact">contact page</a></u> to make contact.
                Check out her <u><a href="https://github.com/neyona?tab=repositories" target="_blank" rel="noopener noreferrer">github repo</a></u> and her
                Wordpress site, <u><a href="https://neyonajones.com" target="_blank" rel="noopener noreferrer">neyonajones.com</a></u> and a demo site of a project made for a client (posted with permission) at <u><a href="https://prek-eval-demo.herokuapp.com" target="_blank" rel="noopener noreferrer">prek-eval-demo.herokuapp.com</a></u>.
             </p>
             </Col>
         </Row>
         <hr color="white" />
            <Row>
              <Col xs={12} sm={3} className="sidebar-section">
                <a href="https://www.monsterdreamsbook.com" target="_blank" rel="noopener noreferrer">
                <Image src={MBD_KM_Top_of_Airplane} alt="Book Airplane Picture" fluid />
                </a>
                <hr color="white" />
                <a href="https://www.monsterdreamsbook.com" target="_blank" rel="noopener noreferrer">
                <Image src={MDB_KM_Castle} alt="Book Castle Picture" fluid />
                </a>
              </Col>
                <Col xs={12} sm={6} className="main-section">
                    <p>
                      The maker of this site also wrote a children's book and illustrated it with a friend who is an excellent art teacher.
                       Check it out here at <u><a href="https://www.monsterdreamsbook.com" target="_blank" rel="noopener noreferrer">monsterdreamsbook.com</a></u>.
                      It is available for purchase on <u><a href="https://www.amazon.com/Monster-Dreams-Meghan-Myers/dp/1548187410/ref=sr_1_3?keywords=monster+dreams+meghan+myers&qid=1558826227&s=gateway&sr=8-3" target="_blank" rel="noopener noreferrer">Amazon</a></u>
                      and on <u><a href="https://www.barnesandnoble.com/w/monster-dreams-meghan-myers/1126678255" target="_blank" rel="noopener noreferrer" className="link">Barnes & Noble</a></u>.
                    </p>
                    <p>Contact me using the <u><a href="/contact">contact page</a></u> if you have comments or questions.</p>
                </Col>
                <Col xs={12} sm={3} className="sidebar-section">
                  <a href="https://www.amazon.com/Monster-Dreams-Meghan-Myers/dp/1548187410/ref=sr_1_3?keywords=monster+dreams+meghan+myers&qid=1558826227&s=gateway&sr=8-3" target="_blank" rel="noopener noreferrer">
                    <Image src={MD_Cover} alt="Book Cover" fluid />
                  </a>
                </Col>
            </Row>
            </Jumbotron>
      </div>
    )
  }
}
