import React, { Component } from "react";

class GameJoiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputField: ""
        };
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
          inputField: value
        });
    };
    

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchGame(this.state.inputField);
   
  };

  render() {
    const { inputField } = this.state;
    const { gameStatus } = this.props;
    console.log(gameStatus);

    return (
      <div className="gameJoiner">
        <h2>Partecipa ad partita</h2>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="inputField"
            placeholder="Inserisci il codice"
            value={inputField}
            onChange={this.handleInputChange}
          />
          <button type="submit">Unisciti</button>
        </form>
        {gameStatus !== null && gameStatus === true && (
          <div>
            <hr />
            <a href={"http://localhost:3000/game/guest/" + inputField} target="_blank" rel="noopener noreferrer"> Uniscti alla partita </a>
          </div>
        )}
         {gameStatus !== null && gameStatus === false && (
          <div>
            <hr />
            Partita non trovata
          </div>
        )}

      </div>
    );
  }
}

export default GameJoiner;
