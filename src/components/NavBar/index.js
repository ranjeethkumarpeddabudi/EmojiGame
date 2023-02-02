import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, gameEnded} = this.props
    if (gameEnded) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="scores-label">Score: {currentScore}</p>
        <p className="scores-label">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        <div>{this.renderScores()}</div>
      </nav>
    )
  }
}
export default NavBar
