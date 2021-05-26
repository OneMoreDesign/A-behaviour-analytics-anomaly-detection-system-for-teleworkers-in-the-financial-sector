/// this contains the call for teleworker name. It can be changed based on which 
/// teleworker is chosed.
/// future work can contain an automated solution based on the ability to search 
/// for the teleworker

// Case 1: Teleworker 3
// Case 2: Teleworker 8
// Case 3: Teleworker 5

import React, { Component } from 'react';
import data from "./osint_sample"; 


class Intro extends Component {
	render() {
		return (
            <div>
                {
					data.Teleworker5.map((teleworker, i) => {
						return (
							<div key={i}>
								<div>
                                    <h1>Welcome {teleworker.last_name},</h1>
								</div> 
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Intro;