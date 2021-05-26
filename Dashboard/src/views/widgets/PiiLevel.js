// teleworker 3 - case1
// teleworker 5 - case 3
// teleworker 8 - case 2
import React from 'react';

class PiiLevel extends React.Component{
render(){
    var myArray = {
     "Teleworker3": {"First Name":"Abel Adam", "Last Name":"Morton", "Email":"Abel.Adam.Morton@dtaa.com", "Role":"Technician", "Functional Unit":"Sales And Marketing", "Department":"Field Service", "Team":" Regional Field Service", "Supervisor":"Hedwig Regina Livingston", "Nino":"BR401068C", "Address":"2732 Bostock St #1", "City":"St. Enoder", "Conuty":"Cornwall", "Postal":"TR9 6NJ", "Phone":"01716-613102", "Date of Birth":"08/01/1996"},
     "Teleworker5": {"First Name":"Cyrus Connor", "Last Name":"Atkinson","Email":"Cyrus.Connor.Atkinson@dtaa.com", "Role":"IT Admin", "Functional Unit":" Adminstration", "Department":" Security", "Team":" Electronic Security", "Supervisor":"Frances Alisa Wiggins", "Address":"41 Canning St", "City":"Steornabhagh a Deas Ward", "Conuty":"Western Isles", "Postal":"HS1 2PZ", "Phone":"01710-616480", "Date of Birth":"11/01/1995"},
     "Teleworker8": {"First Name":"September Vielka", "Last Name":"Livingston", "Email":"September.Vielka.Livingston@dtaa.com", "Role":"Software Engineer", "Nino":"MR439451A", "Address":"1 Milton St", "City":"Little Missenden", "Conuty":"Buckinghamshi", "Date of Birth":"07/24/1993"}
    }

var result = Object.keys(myArray.Teleworker5).length ;
return(
            <div>
                <h3> { result }</h3>
            </div>
        )
}
}

export default PiiLevel;