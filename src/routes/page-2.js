import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { paths } from './'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to={paths.home}>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
