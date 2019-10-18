import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const Game = (props) => (

    
  <Card>
    <Image src={props.game.front_cover} wrapped ui={false} size="medium" onClick={() => props.onChangeDetails(props.game)}/>
  </Card>
)



export default Game;