import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Input, Menu} from 'semantic-ui-react'

class NavBar extends Component {


    render(){
        return (
            <Menu secondary>
            <Menu.Item
              as={Link}
              to='/allgames'
              name='home'
            />

            <Menu.Item
              as={Link}
              to='/yourgames'
              name='Your Games'
            />
            <Menu.Item
              as={ Link }
              to='/addgame'
              name='Add Game'
            />
            <Menu.Item
              position='right'
              as={ Link }
              to='/'
              name='login'
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input onChange={this.props.onChangeSearch} icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='logout'
              />
            </Menu.Menu>
          </Menu>
        )
      }
}

export default NavBar
