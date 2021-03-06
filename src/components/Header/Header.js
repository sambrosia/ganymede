import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import './Header.css'

class Header extends Component {
  render = () => (
    <nav className="Header level is-mobile">
      <div className="level-left">
        <Icon name="rocket" size="3x" />
        <h1 className="is-size-2 has-text-weight-bold is-hidden-mobile">
          Ganymede
        </h1>
      </div>

      <div className="level-right">
        <div className="field is-grouped">
          <div className="control">
            <a className="button is-primary is-outlined">
              <p>Add</p>
              <Icon name="feed" />
            </a>
          </div>
          <div className="control">
            {this.props.user ? (
              <a
                className="button is-primary"
                onClick={() => {
                  localStorage.removeItem('authToken')
                  this.props.setUser(null)
                }}
              >
                <Icon name="sign-out" />
                <p>Log out</p>
              </a>
            ) : (
              <Link className="button is-primary" to="/login">
                <Icon name="sign-in" />
                <p>Log in</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.oneOf(PropTypes.object, null)
}

export default Header
