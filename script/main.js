 var dataEntry = {
	init: ()=> {
		dataEntry.retrieveData();
	},
	saveData: ()=> {
		let dataArray = [],
			newArr = [],
			fname = document.getElementById('fname'),
			lname = document.getElementById('lname'),
			phone = document.getElementById('phone'),
			email = document.getElementById('email');
		
		let personalInfo = {
			'fname': fname.value,
			'lname': lname.value,
			'phone': phone.value,
			'email': email.value
		};
			
		if(localStorage.getItem('dataEntry') != null){
			dataArray.push(JSON.parse(localStorage.getItem('dataEntry')));
		}
		if(fname.value != '' && lname.value != '' && phone.value != '' && email.value != ''){
			
			dataArray.push(personalInfo);
			//for loop to avoid multi dimensional array
			for(let value of dataArray){
				newArr = newArr.concat(value);
			}
			localStorage.setItem('dataEntry', JSON.stringify(newArr));
		}
		dataEntry.retrieveData();
		
	},
	retrieveData: ()=> {
		let obj = JSON.parse(localStorage.getItem('dataEntry')),		
			tableEl = document.createElement('table'),
			databaseContent = document.getElementById('databaseContent');
		
		if(localStorage.getItem('dataEntry') != null){
			
			for(let person of obj){

				let trEl = document.createElement('tr'),
					tdNameEl = document.createElement('td'),
					tdLnameEl = document.createElement('td'),
					tdPhoneEl = document.createElement('td'),
					tdEmailEl = document.createElement('td'),
					textNodeName = document.createTextNode(person.fname),
					textNodeLname = document.createTextNode(person.lname),
					textNodePhone = document.createTextNode(person.phone),
					textNodeEmail = document.createTextNode(person.email);
				
				tdNameEl.appendChild(textNodeName),
				tdLnameEl.appendChild(textNodeLname);
				tdPhoneEl.appendChild(textNodePhone);
				tdEmailEl.appendChild(textNodeEmail);
				
				trEl.appendChild(tdNameEl);
				trEl.appendChild(tdLnameEl);
				trEl.appendChild(tdPhoneEl);
				trEl.appendChild(tdEmailEl);
				
				tableEl.appendChild(trEl);
				
			}
			databaseContent.appendChild(tableEl);
		}
	},
	removeData: ()=> {
		localStorage.removeItem('dataEntry');
		location.reload();
	}
 };
 dataEntry.init();