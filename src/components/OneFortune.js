// src/components/OneFortune.js
import React, { Component } from 'react';
import axios from 'axios';

import './CustomJumbotron.css';


export default class OneFortune extends Component {
  state = {
    error: null,
    isLoaded: false,
    fortunes: []
  };

    componentDidMount() {
      axios.get("/api/").then(
        result => {
          this.setState({
            isLoaded: true,
            fortunes: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        );
    }

    render() {
      const { error, isLoaded, fortunes } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        const fortuneItems = this.state.fortunes.map(fortune => (
             <span>{fortune.body}</span>
         ));
         const randomId = Math.floor(Math.random() * fortuneItems.length);

         return (
             <>
                 <span className="span-fortune-match">{fortuneItems[randomId]}</span>
             </>

         );
      }
    }
  }

// information from https://www.andreasreiterer.at/rest-api-react-component/ was very helpful
// as was info from W. S. Vincent's Build Rest API's with Django book.
