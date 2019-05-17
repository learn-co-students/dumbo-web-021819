import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Icon, Segment } from 'semantic-ui-react'

const HomeContainer = props => (
  <Segment
    inverted
    textAlign='center'
    style={{minHeight: 750, padding: '1em 0em'}}
  >
    <Container text>
      <Header
        as='h1'
        content='Hip-Hip Store'
        inverted
        style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '3em',
        }}
      />
      <Header
        as='h2'
        content='[Arrays of various goods]'
        inverted
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          margin: '1.5em 0',
        }}
      />
      <Link to="/products" primary="true" className="ui button huge blue">
        Show Now
      <Icon name='right arrow' />
      </Link>
    </Container>
  </Segment>
)

export default HomeContainer