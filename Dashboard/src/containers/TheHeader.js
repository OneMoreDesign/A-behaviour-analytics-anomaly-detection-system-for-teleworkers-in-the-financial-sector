import React from 'react'
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeader = () => {

  return (
    <CHeader withSubheader>

      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="px-3">
      </CHeaderNav>

    </CHeader>
  )
}

export default TheHeader
