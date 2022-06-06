let tel = document.querySelector('#tel');
let name = document.querySelector('#name')
let reg = /[A-Za-zA-Яа-яЁё]/g;
let regex = /[0-9]/g;

tel.oninput = function () {
	this.value = this.value.replace(reg, '');
}

name.oninput = function () {
	this.value = this.value.replace(regex, '');
}