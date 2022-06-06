let offset = 0; //переменная для смещения от левого края
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_one').addEventListener('click', function () { //это слушатель, по клику запускает функцию
	//при нажатии я должен увеличить offset
	offset = offset + 1398;
	//решаем проблемы с пустым слайдером
	if (offset > 2796) {
		offset = 0;
	} // таким образом мы зациклили картинки
	//теперь мы сдвигаем slider-line на ширину offset
	sliderLine.style.left = -offset + 'px';
});

//создаем все тоже самое, только для другой кнопки
document.querySelector('.slider_two').addEventListener('click', function () {
	offset = offset - 1398;
	if (offset < 0) {
		offset = 2796;
	}
	sliderLine.style.left = -offset + 'px';
});