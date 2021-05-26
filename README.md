# A-behaviour-analytics-anomaly-detection-system-for-teleworkers-in-the-financial-sector
Prototype of a system created for the dissertation project.

## Usage
`npm i` - to install dependencies (dependencies should be already installed)


## Sctipts 
In the terminal go to the project's file path and run:
`npm start` for developing (it runs webpack-dev-server)  OR
`yarn start` (can be used as alternative)

`npm run build` (optiona) to run a dev build  

## Visualise the dashboard
The dashboard will be available by default at http://localhost:3000/#/dashboard

## Dataset 
The CERT dataset used can be found here: https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099

The Pre-Process Data guide followed can be found here: https://towardsdatascience.com/insider-threat-detection-with-ai-using-tensorflow-and-rapidminer-studio-a7d341a021ba

## Splunk Machine Learning Toolkit
Splunk's Machine learning toolkit can be found here: https://splunkbase.splunk.com/app/2890/

The Pre-Prorcessed Data resulted from following the guide above is used within Splunk to benchmark algorithms and train the model into detecting user behaviour anomalies.

## CORE UI Documentation
The template used for the project is CORE UI

Helpful Documentation can be found here: https://coreui.io/docs/getting-started/introduction/

## Case Studies 
The dashboards are presenting three scenarios. For changing each scenario parts of code need to be changed.
Comments are added with the data it needs changing into. 
At this stage the process is not automated.

The three scenarios are:
1. The prototype shows the teleworker “AAM0658” to conduct anomalous activities at unusual hours. This can be a threat actor who got hold of the teleworker’s personally identifiable 8 information.
2. The teleworker “SVL0940” does not pose any threat to the company regarding logs. The system presents some anomalies in the logs; however, they are not malicious. The risk posed by this teleworker lies in the high number of private personal information available. The teleworker can be a victim of identity theft or social engineering attacks.
3. The teleworker “CCA0046” has a high number or anomalies detected, however the level of PII is low. The detected anomalies consist in downloaded executables, weekend working, web searches on keyloggers and their use.


Files that need to be changed are:

    - Widgets
    
    - PIILevel
    
    - Charts
    
    - Intro
    
    - Tables
    
    - tables_osint
