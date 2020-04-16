import React from 'react'

import './PlayCard.scss'

interface PlayCardProps {
  items?: string[]
}

const fillArray = (array: string[], count: number = 25) => {
  for (let i = array.length; i < count; i++) {
    array.push('')
  }

  return array
}

export const PlayCard: React.FC<PlayCardProps> = ({ items = []}) => {
  console.log(items)
  const displayItems = [...items]
  if (displayItems.length < 25) {
    fillArray(displayItems)
  }

  console.log(items)

  return (
    <div className="play-card" id="play-card">
      {displayItems.map((item, i) => (
        <div key={i} className="play-card__item">
          <span className="play-card__item-text">{item}</span>
        </div>    
      ))}
    </div>
  )
}