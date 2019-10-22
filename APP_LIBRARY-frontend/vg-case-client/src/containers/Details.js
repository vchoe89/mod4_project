import React from 'react'
import { Card, Image, Embed } from 'semantic-ui-react'
// import ImgsViewer from 'react-images-viewer'




const Details = (props) => (
      <Card className='ui centered card'>
        <Image src={props.game.front_cover} />
        <Card.Content>
        <Card.Header> {props.game.title} </Card.Header>
        <Card.Meta>
          <span className='system'> Platform: {props.game.system} </span>
        </Card.Meta>

        <Card.Description>
          {props.game.description}
        </Card.Description>
        <Card.Description>
          <span className='rating'> Rating: {props.game.rating} </span>
        </Card.Description>
        <Embed
          url={props.game.video_url}
          />
        </Card.Content>
        <button class='ui button' onClick={() => props.onChangeDetails({})}> Go Back </button>
        <button class='ui button' onClick={() => props.addUserGames(props.game)}> Add to your library</button>
      </Card>

)

export default Details;
