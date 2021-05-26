import React from 'react';

class TeleworkerAnomalies2 extends React.Component{
render(){
    const teleworker_data = [
    {Action:"http://bleacherreport.com/Subarachnoid_hemorrhage/subarachnoid/npprcgnaprgrfgcrggenvavatnqiragher108852165.php",Anomaly_Score_Num_date_mday:0.000001,Anomaly_Score_Num_date_year:0,Date:"01/04/2010 07:22",Threat:"FALSE",User:"SVL0940",Vector:"http",_raw:"FALSE,http,01/04/2010 07:22,SVL0940,PC-0115,http://bleacherreport.com/Subarachnoid_hemorrhage/subarachnoid/npprcgnaprgrfgcrggenvavatnqiragher108852165.php",_time:"2018-06-30T07:22:00.000+0100",date_hour:7,date_mday:30,date_minute:22,date_month:"june",date_second:"",date_wday:"saturday",date_year:2018,date_zone:"local",eventtype:"",extracted_Source:"PC-0115",timeendpos:27,timestartpos:22},
    {Action:"http://forbes.com/Tech_Tower/crecine/genvavatobbx1039304836.htm",Anomaly_Score_Num_date_mday:0.000001,Anomaly_Score_Num_date_year:0,Date:"01/04/2010 07:14",Threat:"FALSE",User:"SVL0940",Vector:"http",_raw:"FALSE,http,01/04/2010 07:14,SVL0940,PC-0115,http://forbes.com/Tech_Tower/crecine/genvavatobbx1039304836.htm",_time:"2018-06-30T07:14:00.000+0100",date_hour:7,date_mday:30,date_minute:14,date_month:"june",date_second:"",date_wday:"saturday",date_year:2018,date_zone:"local",eventtype:"",extracted_Source:"PC-0115",timeendpos:27,timestartpos:22},
    {Action:"http://slickdeals.net/New_Zealand_national_rugby_union_team/kapa/fcbegfubefronpxraqhenaprevqvat1598049569.aspx",Anomaly_Score_Num_date_mday:0.000001,Anomaly_Score_Num_date_year:0,Date:"01/04/2010 07:12",Threat:"FALSE",User:"SVL0940",Vector:"http",_raw:"FALSE,http,01/04/2010 07:12,SVL0940,PC-0115,http://slickdeals.net/New_Zealand_national_rugby_union_team/kapa/fcbegfubefronpxraqhenaprevqvat1598049569.aspx",_time:"2018-06-30T07:12:00.000+0100",date_hour:7,date_mday:30,date_minute:12,date_month:"june",date_second:"",date_wday:"saturday",date_year:2018,date_zone:"local",eventtype:"",extracted_Source:"PC-0115",timeendpos:27,timestartpos:22},
    {Action:"http://wsj.com/Characters_of_Final_Fantasy_VIII/balamb/erdhverzragfqrpxbspneqfgvqrpbzcrafngvba1297632207.aspx",Anomaly_Score_Num_date_mday:0.000001,Anomaly_Score_Num_date_year:0,Date:"01/04/2010 07:08",Threat:"FALSE",User:"SVL0940",Vector:"http",_raw:"FALSE,http,01/04/2010 07:08,SVL0940,PC-0115,http://wsj.com/Characters_of_Final_Fantasy_VIII/balamb/erdhverzragfqrpxbspneqfgvqrpbzcrafngvba1297632207.aspx",_time:"2018-06-30T07:08:00.000+0100",date_hour:7,date_mday:30,date_minute:8,date_month:"june",date_second:"",date_wday:"saturday",date_year:2018,date_zone:"local",eventtype:"",extracted_Source:"PC-0115",timeendpos:27,timestartpos:22},
    {Action:"http://redfin.com/Dreadnought/cuniberti/graavffhesnpryrnqrefuvc1771633468.asp",Anomaly_Score_Num_date_mday:0.000001,Anomaly_Score_Num_date_year:0,Date:"01/04/2010 07:05",Threat:"FALSE",User:"SVL0940",Vector:"http",_raw:"FALSE,http,01/04/2010 07:05,SVL0940,PC-0115,http://redfin.com/Dreadnought/cuniberti/graavffhesnpryrnqrefuvc1771633468.asp",_time:"2018-06-30T07:05:00.000+0100",date_hour:7,date_mday:30,date_minute:5,date_month:"june",date_second:"",date_wday:"saturday",date_year:2018,date_zone:"local",eventtype:"",extracted_Source:"PC-0115",timeendpos:27,timestartpos:22},
    {Action:"http://mediafire.com/Nathu_La/yadong/gernqzvyyyrnqrefuvc679300522.asp",Anomaly_Score_Num_date_mday:0.000001,Anomaly_Score_Num_date_year:0,Date:"01/04/2010 07:05",Threat:"FALSE",User:"SVL0940",Vector:"http",_raw:"FALSE,http,01/04/2010 07:05,SVL0940,PC-0115,http://mediafire.com/Nathu_La/yadong/gernqzvyyyrnqrefuvc679300522.asp",_time:"2018-06-30T07:05:00.000+0100",date_hour:7,date_mday:30,date_minute:5,date_month:"june",date_second:"",date_wday:"saturday",date_year:2018,date_zone:"local",eventtype:"",extracted_Source:"PC-0115",timeendpos:27,timestartpos:22}
]

var anomaly_result = Object.keys(teleworker_data).length ;
return(
            <div>
                <h3> { anomaly_result }</h3>
            </div>
        )
}
}

export default TeleworkerAnomalies2;
