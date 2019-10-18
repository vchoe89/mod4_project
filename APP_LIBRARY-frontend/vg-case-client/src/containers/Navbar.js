import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

class NavBar extends Component {
 
    render(){
        return (
            <Menu secondary>
            <Menu.Item
              name='home'

            />
            <Menu.Item
              name='All Games'

            />
            <Menu.Item
              name='Add Game'

            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
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