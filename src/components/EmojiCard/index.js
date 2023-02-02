import './index.css'

import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emojisList, clickedEmojisList} = this.props
    const {id, emojiName, emojiUrl} = emojisList
    const clickedEmoji = () => {
      clickedEmojisList(id)
    }
    return (
      <li className="emoji-card" onClick={clickedEmoji}>
        <button type="button" className="emoji-button">
          <img src={emojiUrl} className="emoji" alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
