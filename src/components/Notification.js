import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({message, color}) => {
   
        const divStyle = {
            color: 'orange',
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        if (message === '' ) {
            return null
            }
      return (
        <div style={divStyle}>
        {message}
        </div>
      )
    }

    Notification.propTypes = {
        message: PropTypes.string.isRequired
      }

export default Notification