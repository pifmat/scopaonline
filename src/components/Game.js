import React, { Component } from 'react';
import firebase from "../utils/firebase";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: []
        };
    }
    componentDidMount = () => {
        const { params } = this.props.match;
        
        const db = firebase.firestore().collection('games');

        db.orderBy("timestamp").onSnapshot(snap => {
            const list = [];
      
            snap.forEach(doc => {
              const element = {
                id: doc.id,
                ...doc.data()
              };
              list.push(element);
            });
      
            this.setState({
              list: list
            });
        });

    }
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h1>Game Page {params.id}</h1>
            </div>
        );
    }
}

export default Game;