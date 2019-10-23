import React, {Component} from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'
const URL = "http://localhost:3000/games"

class GameForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, game ) {
    let newGame = {
      title: game.title.value,
      front_cover: game.frontcover.value,
      back_cover: game.backcover.value,
      rating: 5,
      screenshot: game.screenshot.value,
      video_url: game.video.value,
      description: game.description.value,
      system: game.system.value
    }
    this.postGame(event, newGame)
  }

  postGame = (event, newGame) => {
    event.preventDefault();
    event.target.reset();
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newGame)
    })
  }
        
  



  render(){
    return(
      <Grid centered={true}>
        <Form onSubmit={(e) => this.handleSubmit(e, e.target)}>
          <Form.Field width={16}>
            <label>Title</label>
            <input name="title" placeholder='Enter Title of Game' />
          </Form.Field>
          <Form.Field width={16}>
            <label>System</label>
            <input name="system" placeholder='Enter Gaming Platform' />
          </Form.Field>
          <Form.Field width={16}>
            <label>Front Cover</label>
            <input name="frontcover" placeholder='Enter Front Cover URL' />
          </Form.Field>
          <Form.Field width={16}>
            <label>Back Cover</label>
            <input name="backcover" placeholder='Enter Back Cover URL' />
          </Form.Field>
          <Form.Field width={16}>
            <label>Screenshot</label>
            <input name="screenshot" placeholder='Enter Screenshot URL' />
          </Form.Field>
          <Form.Field width={16}>
            <label>Video</label>
            <input name="video" placeholder='Enter Video URL' />
          </Form.Field>
          <Form.Field width={16}>
            <label>Description</label>
            <input name="description" placeholder='Enter Description' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Grid>
    )
  }
}

export default GameForm
