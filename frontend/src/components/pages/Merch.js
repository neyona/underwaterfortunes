import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Tote_First from '../static/Tote_First.jpg';
import Stolen_Memories from '../static/Stolen_Memories.jpg';
import Toad_Fortune_Shirt from '../static/Toad_Fortune_Shirt.jpg';
import Demon_Fortune from '../static/Demon_Fortune.jpg';
import './HomePage.css';


export default class Merchandise extends Component {
  render() {
    return (
      <div>
           <Jumbotron className="jumbotron-merch">
             <u><a href="https://www.teepublic.com/user/neyona" target="_blank" rel="noopener noreferrer">
               <h2>Merchandise of ME!</h2>
            </a></u>
           <Row>
             <Col xs={12} sm={9} className="main-section">
               <p>
                 Did you enjoy this site? I hope you did. Merchandise of me, the Fortune Giver, can be found here at <u><a href="https://www.teepublic.com/user/neyona" target="_blank" rel="noopener noreferrer" className="link">Tee Public</a></u>.
                    See, it's me on the merchandise and I am gorgeous, cuttlefish are awesome! You can click on the pictures on this page to get to the store and these items. These fun items use art made by Meghan Myers.
                  </p>
             </Col>
             <Col xs={12} sm={3} className="sidebar-section">
               <a href="https://www.teepublic.com/tote/5134290-underwater-fortune-giver-cuttlefish-eye-with-light" target="_blank" rel="noopener noreferrer">
               <Image src={Tote_First} alt="A tote bag" className="img-blue" fluid />
               </a>
             </Col>
         </Row>
          <Row>
             <Col xs={12} sm={4} className="sidebar-section">
               <a href="https://www.teepublic.com/t-shirt/5134680-underwater-fortune-giver-cuttlefish-with-stolen-me?store_id=225161" target="_blank" rel="noopener noreferrer">
               <Image src={Stolen_Memories} className="img-purple" alt="Stolen memories" fluid />
               </a>
             </Col>
               <Col xs={12} sm={4} className="main-section">
                 <a href="https://www.teepublic.com/sticker/5127891-underwater-fortune-giver-cuttlefish-with-fire-demo" target="_blank" rel="noopener noreferrer">
                   <Image src={Demon_Fortune} alt="Demon Fortune Shirt" className="img-purple" fluid />
                 </a>
               </Col>
               <Col xs={12} sm={4} className="sidebar-section">
                 <a href="https://www.teepublic.com/t-shirt/5129246-underwater-fortune-giver-cuttlefish-eye-with-toad-?store_id=225161" target="_blank" rel="noopener noreferrer">
                 <Image src={Toad_Fortune_Shirt} alt="Toad Shirt" className="img-purple" fluid />
                 </a>
               </Col>
           </Row>
           </Jumbotron>
      </div>
    )
  }
}
