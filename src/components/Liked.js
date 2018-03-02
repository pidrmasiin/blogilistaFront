import React from 'react'

class Liked extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          visible: false,
          liked: false
        }
      }
    
      toggleVisibility = () => {
        this.setState({visible: !this.state.visible})
      }

      toggleLiked = () => {
        this.setState({liked: !this.state.liked})
      }
    
      render() {
        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        const hideWhenLiked = { display: this.state.liked? 'none' : '' }
        const showWhenLiked = { display: this.state.liked ? '' : 'none' }
    
        return (
          <div>
            <div style={hideWhenVisible}>
              <button style={{color: 'green'}} onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
              <button style={{color: 'green'}} onClick={this.toggleLiked}>Tykkää</button>
            </div>
            <div style={showWhenVisible}>
              {this.props.children}
              <button onClick={this.toggleVisibility}>Piilota</button>
            </div>
          </div>
        )
      }
    }

  export default Liked