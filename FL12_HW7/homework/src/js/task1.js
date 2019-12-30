let Email=prompt('Please,enter your email: ');
let UserGmail='user@gmail.com';
let AdminGmail='admin@gmail.com';
let Userpwd='UserPass';
let Adminpwd='AdminPass';
let Password;
let changePass;
let isCheckPassword = false;
let isCheckOldPass = false;
let RepeatPassword;
let newPassword;
let six=6;
let five=5;
if(Email === '' || Email === null){
	alert('Canceled.');
}else if(Email.length < five){
	alert("I don't know  any emails having name length less than 5 symbols")
}else if(Email === UserGmail || Email === AdminGmail){
	Password=prompt('Please,enter your password: ');
	isCheckPassword = true;
	
}else {
	alert('I don’t know you');
}
if(isCheckPassword){
if(Password === '' || Password === null){
	alert('Canceled.');
}else if( Email === UserGmail && Password === Userpwd || Email === AdminGmail && Password === Adminpwd ) {
	changePass=confirm('Do you want to change your password?');
}else {
	alert('Wrong password');
}
}
if(changePass === false ){
	alert('You have failed the change.');
}else if (changePass === true){
	Password=prompt('Please,enter your old password: ');
	isCheckOldPass=true;
}
if(isCheckOldPass){
if(Password === '' || Password === null){
	alert('Canceled.');
}else if( Email === UserGmail && Password === Userpwd || Email === AdminGmail && Password === Adminpwd ) {
	newPassword=prompt('Please,enter your new password');
}else {
	alert('Wrong password');
}
}
if(newPassword){
if(newPassword.length < six ){
	alert('It’s too short password. Sorry.');
}else if(newPassword === '' || newPassword === null){
	alert('Canceled');
}else {
	RepeatPassword=prompt('Please, enter new password again: ')
}
}
if(RepeatPassword){
	if( RepeatPassword !== newPassword){
		alert('You wrote the wrong password.');
	}else if(RepeatPassword === newPassword){
			alert('You have successfully changed your password.');
		}
}
		