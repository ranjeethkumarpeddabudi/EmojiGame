import './index.css'

import {Component} from 'react'

class WinOrLoseCard extends Component {
  render() {
    const {isWon, score, onClickPlayAgain} = this.props
    const gameStatus = isWon ? 'You Won' : 'You Lose'
    const scoreText = isWon ? 'Best Score' : 'Score'
    const emoji = isWon
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    return (
      <div className="result-container">
        <div className="result-info">
          <h1 className="game-status">{gameStatus}</h1>
          <p className="score-text">{scoreText}</p>
          <p className="score">{isWon ? '12/12' : `${score}/12`}</p>
          <button
            className="play-button"
            type="button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img src={emoji} className="result-emoji" alt="win or lose" />
      </div>
    )
  }
}

export default WinOrLoseCard
