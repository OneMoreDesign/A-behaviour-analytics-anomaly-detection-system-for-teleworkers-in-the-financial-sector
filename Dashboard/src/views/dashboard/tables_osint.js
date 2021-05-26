// teleworker3 - Case 1
// teleworker5 - Case 2
// teleworker8 - Case 3

import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

//import teleworker3 from '../Teleworker_Osint/Teleworker_3.js'
import teleworker5 from '../Teleworker_Osint/Teleworker_5.js'
//import teleworker8 from '../Teleworker_Osint/Teleworker_8.js'

const fields = ['FirstName','LastName', 'DateofBirth', 'UserId', 'Email', 'Role', 'FunctionalUnit', 'Address' ,'City', 'Postal', 'Phone']

const Tableosint = () => {
  return (
    <>
    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Available PII
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={teleworker5}  // teleworker3 - Case 1
                                   // teleworker5 - Case 2
                                   // teleworker8 - Case 3
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination>

              </CDataTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tableosint
