const burgerBtn = document.querySelector('.card-nav__burger-btn');
const barsBtn = document.querySelector('.card-nav__burger-btn--bars');
const XBtn = document.querySelector('.card-nav__burger-btn--x');
const nav = document.querySelector('.card-nav__nav');
const items = document.querySelectorAll('.card-nav__nav--item');
const cardServicesButtons = document.querySelector('.card-services__buttons');
const buttons = document.querySelectorAll(
	'.card-services__buttons__box__button'
);
const servicesTitle = document.querySelectorAll(
	'.card-services__buttons__box__button--title'
);
const footerYear = document.querySelector('.footer__year');
const logo = document.querySelector('.card-nav__logo');

const showNav = () => {
	nav.classList.toggle('activeNav');
	items.forEach((item) => {
		item.classList.toggle('showItems');
	});
	changeIcon();
};

const hideNav = () => {
	nav.classList.remove('activeNav');
	items.forEach((item) => {
		item.classList.remove('showItems');
	});

	changeIcon();
};
const hideNavByLogo = () => {
	nav.classList.remove('activeNav');
	items.forEach((item) => {
		item.classList.remove('showItems');
	});
	barsBtn.classList.remove('hideIcon');
	XBtn.classList.remove('activeIcon');
};

const changeIcon = () => {
	barsBtn.classList.toggle('hideIcon');
	XBtn.classList.toggle('activeIcon');
};

function expandPhoto() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
		this.classList.remove('changeBGC');
		colorChange()
		
	} else {
		collapsePhoto();
		this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('changeBGC');
		colorChange()
		
	}
}

const collapsePhoto = () => {
	const allExpandedPhotos = document.querySelectorAll('.card-services__buttons__box__photo');
	allExpandedPhotos.forEach((photo) => photo.classList.remove('active'));
	buttons.forEach((btn) => btn.classList.remove('changeBGC'));
	servicesTitle.forEach((st) => st.classList.remove('changeColor'));
};

const colorChange = (e) => {
	e.target.classList.toggle('changeColor')
		
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

burgerBtn.addEventListener('click', showNav);
items.forEach((item) => item.addEventListener('click', hideNav));
logo.addEventListener('click', hideNavByLogo);
buttons.forEach((btn) => btn.addEventListener('click', expandPhoto));
buttons.forEach((btn) => btn.addEventListener('click', colorChange));
