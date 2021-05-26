import React, { lazy } from 'react'
import {  CButton } from '@coreui/react'

import Intro from './Intro.js'
import Charts from '../charts/Charts.js'
import Tables from './Tables.js'
import Tableosint from './tables_osint.js'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  return (
    <>
    <Intro size="sm"></Intro>
    
    <div class="d-grid gap-2">
      <CButton component="a" color="primary" href="mailto:s5104082@bournemouth.ac.uk" role="button">
        Create Alert
      </CButton>
    </div>

    <br></br>
      <WidgetsDropdown />

      <Charts></Charts>
      <Tableosint></Tableosint>
      <Tables></Tables>

    </>
  )
}

export default Dashboard
