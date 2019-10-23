import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
    
    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://i7.pngguru.com/preview/971/114/559/8-bit-color-heart-clip-art-8-bit.jpg' as='a' href="https://www.translationparty.com/" /> Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Totally Secure Password'
                    type='password'
                  />
        
                  <Button color='teal' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                Wanna be a hacker? <a href='http://hackertyper.com/'>Click Here</a>
              </Message>
            </Grid.Column>
          </Grid>
        )
    }
}

export default Login 
