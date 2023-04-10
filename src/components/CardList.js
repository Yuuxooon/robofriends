import React, { Fragment } from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  // texting error boundrys
  if (false) {
    throw new Error('Oooof')
  }

  const cardArray = robots.map((user, index) => {
    return (
      <Card
        key={robots[index].id}
        id={robots[index].id}
        name={robots[index].name}
        email={robots[index].email}
      />
    )
  })
  return <Fragment>{cardArray}</Fragment>
}

export default CardList
