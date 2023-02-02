/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    topScore: 0,
    gameEnded: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmojisList = id => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    if (clickedEmojis.includes(id)) {
      this.finishGame(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGame = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
    this.isGameEnd(true)
  }

  isGameEnd = value => {
    this.setState({gameEnded: value})
  }

  restart = () => {
    this.setState({clickedEmojis: []})
    this.isGameEnd(false)
  }

  renderEmojis = () => {
    const shuffledEmojis = this.shuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffledEmojis.map(each => (
          <EmojiCard
            key={each.id}
            emojisList={each}
            clickedEmojisList={this.clickedEmojisList}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLoseCard = () => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojis.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        onClickPlayAgain={this.restart}
      />
    )
  }

  render() {
    const {clickedEmojis, topScore, gameEnded} = this.state
    const currentScore = clickedEmojis.length
    return (
      <div className="game-container">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          gameEnded={gameEnded}
        />
        {gameEnded ? this.renderWinOrLoseCard() : this.renderEmojis()}
      </div>
    )
  }
}

export default EmojiGame
