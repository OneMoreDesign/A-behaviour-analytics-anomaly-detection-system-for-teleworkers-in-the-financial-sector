import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol
} from '@coreui/react'

import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import PiiLevel from './PiiLevel'
//import TeleworkerAnomalies1 from '../Splunk_data/aam0685_anomalies_count'
//import TeleworkerAnomalies2 from '../Splunk_data/svl0940_anomalies_count'
import TeleworkerAnomalies3 from '../Splunk_data/cca0046_anomalies_count'


const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="4" lg="4">
        <CWidgetDropdown
          color="gradient-danger" //warning - yellow, danger - red, success - green
                                   // case 3: danger
                                   // case 1&2: warning
          header="High"
          text="Risk level"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="4" lg="4">
        <CWidgetDropdown
          color="gradient-warning"
                                  // case 1&3: danger
                                  // case 2: success
          header={
           // <TeleworkerAnomalies1></TeleworkerAnomalies1> //Case1:
           //<TeleworkerAnomalies2></TeleworkerAnomalies2> //Case2:
           <TeleworkerAnomalies3></TeleworkerAnomalies3> //Case3:
           
          }
          text="Number of Detected Anomalies"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="4" lg="4">
        <CWidgetDropdown
          color="gradient-danger"  //warning - yellow, danger - red, success - green
                                   // case 1&3: danger
                                   // case 2: warning
          header={<PiiLevel></PiiLevel>}
          text="Availalble Personal Identifiable Information"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
            />
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
