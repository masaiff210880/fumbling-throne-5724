import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import Slider from '../../components/Slider'
import Electronics from './Electronics'
const HomePage = (props) => {
  return(
    <Layout>
      <Slider/>
      <Electronics/>
    </Layout>
   )
 }

export default HomePage