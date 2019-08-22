import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const twitterLink = (
  <a href="https://twitter.com/parmsang" alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/" alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:john@doe.com" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <nav className="flex items-center justify-between flex-wrap bg-indigo-700 p-6">
    <p className={'text-white'}>2019</p>
  </nav>
)

export default Footer
