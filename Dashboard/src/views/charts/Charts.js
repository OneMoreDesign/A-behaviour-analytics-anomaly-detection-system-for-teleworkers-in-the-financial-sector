//the file contains the code for the bar charts showing anomalies 
//based on the splunk json files
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartPie,
} from '@coreui/react-chartjs'

const Charts = () => {

  return (
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Anomalies Bar Chart
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                backgroundColor: '#6564DB',
            //    Case 1:
            //    data: [4, 3, 1, 0, 1, 1, 3, 0, 0, 2, 0, 0, 5, 1, 0, 0, 3, 0, 1, 1, 5, 0, 0, 0],
            //    Case2:
            //    data:[0,0,0,0,0,6,0],
            data: [0,2,18,4,11,22,12], // case 3, 
            label: 'Activities'
              }
            ]}
            // Case 1:
            // labels={["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"]}
            // Case 2&3:
            labels={["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>
          Activity Pie Chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#202C39',
                  '#B8B08D',
                  '#F29559',
                  '#6564DB',
                  '#89D2DC'
                ],
              // case1: 
              // data: [10, 3, 1, 17,0] 
              // case2:
              // data: [0,6,0,0,0]
              // case3:
              data: [13,9,4,25,18]
              }
            ]}
            labels={['Device', 'HTTP', 'Log', 'Email', 'File']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

    </CCardGroup>
  )
}

export default Charts
