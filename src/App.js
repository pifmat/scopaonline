import React, { Component } from "react";
import firebase from "./utils/firebase";
import GameMaker from "./components/GameMaker";
import GameJoiner from "./components/GameJoiner";

const COLLECTION_NAME = 'game';
const CODE_PARTITA_LENGTH = 10;

var randHex = function(len) {
  var maxlen = 8,
      min = Math.pow(16,Math.min(len,maxlen)-1),
      max = Math.pow(16,Math.min(len,maxlen)) - 1,
      n   = Math.floor( Math.random() * (max-min+1) ) + min,
      r   = n.toString(16);
  while ( r.length < len ) {
     r = r + randHex( len - maxlen );
  }
  return r;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.stackCarte = [
      {number:1,type:'bastoni'},{number:2,type:'bastoni'},{number:3,type:'bastoni'},{number:4,type:'bastoni'},{number:5,type:'bastoni'},{number:6,type:'bastoni'},{number:7,type:'bastoni'},{number:8,type:'bastoni'},{number:9,type:'bastoni'},{number:10,type:'bastoni'},
      {number:1,type:'coppe'},{number:2,type:'coppe'},{number:3,type:'coppe'},{number:4,type:'coppe'},{number:5,type:'coppe'},{number:6,type:'coppe'},{number:7,type:'coppe'},{number:8,type:'coppe'},{number:9,type:'coppe'},{number:10,type:'coppe'},
      {number:1,type:'spade'},{number:2,type:'spade'},{number:3,type:'spade'},{number:4,type:'spade'},{number:5,type:'spade'},{number:6,type:'spade'},{number:7,type:'spade'},{number:8,type:'spade'},{number:9,type:'spade'},{number:10,type:'spade'},
      {number:1,type:'denari'},{number:2,type:'denari'},{number:3,type:'denari'},{number:4,type:'denari'},{number:5,type:'denari'},{number:6,type:'denari'},{number:7,type:'denari'},{number:8,type:'denari'},{number:9,type:'denari'},{number:10,type:'denari'}
    ];
    this.state = {
      list: [],
      gameId : null,
      gameStatus: null,
    };
  }

  componentDidMount = () => {

  };

  checkItem = event => {
    const { name, checked } = event.target;
    const db = firebase
      .firestore()
      .collection(COLLECTION_NAME)
      .doc(name);

    db.update({
      done: checked
    });
  };

  addItem = () => {
    const db = firebase.firestore().collection(COLLECTION_NAME);
    var id = randHex(CODE_PARTITA_LENGTH);
    db.add({
      id : id,
      stackCarte: this.stackCarte.sort( () => Math.random() - 0.5),
      timestamp: new Date().getTime()
    });
    this.setState({
      gameId: id
    });
  };

  searchGame = code => {
    const db = firebase.firestore().collection(COLLECTION_NAME);
    db.orderBy("timestamp").onSnapshot(snap => {
      this.setState({
        gameStatus: false
      });
      snap.forEach(doc => {
        if(doc.data().id === code) {
          this.setState({
            gameStatus: true
          });
        }
      });

      
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Gioco Carte Online</h1>
        <GameMaker
          gameId={this.state.gameId}
          addItem={this.addItem}
        />
        <GameJoiner
          gameStatus={this.state.gameStatus}
          searchGame={this.searchGame}
        />
      </div>
    );
  }
}

export default App;
