import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import './Header.css'

class Header extends Component {
  render = () => (
    <nav className='Header level is-mobile'>
      <div className='level-left'>
        <Icon name='rocket' size='3x'/>
        <h1 className='is-size-2 has-text-weight-bold is-hidden-mobile'>
          Ganymede
        </h1>
      </div>

      <div className='level-right'>
        <div className='field is-grouped'>
          <div className='control'>
            <a className='button is-primary is-outlined'>
              <p>Add</p>
              <Icon name='feed'/>
            </a>
          </div>

          <div className='control'>
            <a className='button is-primary'>
              <Icon name='user-circle'/>
              <p>Sign in</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
