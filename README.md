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

## CORE UI Documentation
The template used for the project is CORE UI

Helpful Documentation can be found here: https://coreui.io/docs/getting-started/introduction/

## Case Studies 
The dashboards are presenting three scenarios. For changing each scenario parts of code need to be changed.
Comments are added with the data it needs changing into. 
At this stage the process is not automated.

Files that need to be changed are:
    - Widgets
    
    - PIILevel
    
    - Charts
    
    - Intro
    
    - Tables
    
    - tables_osint
