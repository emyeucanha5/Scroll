// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.querySelector('#date');
const year = new Date();
date.innerHTML = year.getFullYear();


// ********** close links ************

const btnToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
btnToggle.addEventListener('click', function(e) {
	const linksContainerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	if(linksContainerHeight === 0 ){
		linksContainer.style.height = `${linksHeight}px`;
	}
	else{
		linksContainer.style.height = 0;
	}

});



// ********** fixed navbar ************
const topLink = document.querySelector('.top-link');
const navbar = document.querySelector('#nav');
window.addEventListener('scroll', function(e) {
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if(scrollHeight > navHeight-30){
		navbar.classList.add('fixed-nav');
	}
	else{
		navbar.classList.remove('fixed-nav');
	}

	if(scrollHeight > 500){
		topLink.classList.add('show-link');
	}
	else{
		topLink.classList.remove('show-link');
	}

});

// ********** smooth scroll ************
// select links


const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		id = this.getAttribute("href");
		let position = document.querySelector(id).offsetTop;
		navHeight = navbar.getBoundingClientRect().height;
		fixnav = navbar.classList.contains("fixed-nav");
		const linksContainerHeight = linksContainer.getBoundingClientRect().height;
		position -= navHeight;
		if(!fixnav){
			position -= navHeight;
		}
		if(linksContainerHeight>82){
			position += linksContainerHeight;
		}
		
		window.scrollTo({
			left:0,
			top: position
		});
		linksContainer.style.height = 0;
	});
});






















