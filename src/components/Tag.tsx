import React, { SyntheticEvent } from 'react'
import './Tag.scss'

interface TagProps {
  onClick?: (ev: SyntheticEvent) => void
}

export const Tag: React.FC<TagProps> = (props) => {
  return (
    <span className="tag" onClick={props.onClick}>{props.children}</span>
  )
}