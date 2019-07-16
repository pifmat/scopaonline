import React, { Component } from "react";

class GameMaker extends Component {



  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem();
   
  };

  render() {
    const { gameId } = this.props;
    console.log(gameId);

    return (
      <div className="gameMaker">
        <h2>Crea una partita</h2>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Crea</button>
        </form>
        {gameId != null && (
          <div>
            <hr />
            <a href={"http://localhost:3000/game/host/" + gameId} target="_blank" rel="noopener noreferrer"> Vai alla tua partita </a>
          </div>
        )}

      </div>
    );
  }
}

export default GameMaker;
