import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Game = (props) => (

  <Card>
    <Image src={props.game.front_cover} size="medium" wrapped onClick={() => props.onChangeDetails(props.game)}/>
  </Card>
)



export default Game;
