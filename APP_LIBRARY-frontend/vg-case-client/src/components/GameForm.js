import React, {Component} from 'react'

import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

const GameForm = () => (
  <Grid centered={true}>
    <Form>
      <Form.Field width={16}>
        <label>Title</label>
        <input placeholder='Enter Title of Game' />
      </Form.Field>
      <Form.Field width={16}>
        <label>Front Cover</label>
        <input placeholder='Enter Front Cover URL' />
      </Form.Field>
      <Form.Field width={16}>
        <label>Back Cover</label>
        <input placeholder='Enter Back Cover URL' />
      </Form.Field>
      <Form.Field width={16}>
        <label>Screenshot</label>
        <input placeholder='Enter Screenshot URL' />
      </Form.Field>
      <Form.Field width={16}>
        <label>Video</label>
        <input placeholder='Enter Video URL' />
      </Form.Field>
      <Form.Field width={16}>
        <label>Description</label>
        <input placeholder='Enter Description' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </Grid>
)

export default GameForm
