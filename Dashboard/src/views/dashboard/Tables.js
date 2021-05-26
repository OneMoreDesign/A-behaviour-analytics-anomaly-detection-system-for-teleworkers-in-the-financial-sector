import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

//import Teleworkerlog_1 from '../Splunk_data/AAM0658.js'
//import Teleworkerlog_2 from '../Splunk_data/SVL0940.js'
import Teleworkerlog_3 from '../Splunk_data/CCA0046.js'

const fields = ['Date', 'Threat', 'date_hour', 'date_minute', 'date_wday','Vector', 'Action']

const Tables = () => {
  return (
    <>
 <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Detected anomalies
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={Teleworkerlog_3}  // change depending on the teleworker ( for now till the next update that will automate it)
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

export default Tables
