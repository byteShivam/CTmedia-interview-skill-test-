
//************* Corusel       ****************
// Get the circle nav elements and image container
const navItems = document.querySelectorAll('.nav-item');
const carouselImages = document.querySelectorAll('.carousel-image');

// Add click event listeners to each nav item
navItems.forEach((navItem, index) => {
  navItem.addEventListener('click', () => {
    // Remove the 'active' class from all nav items and images
    navItems.forEach(item => item.classList.remove('active'));
    carouselImages.forEach(image => image.classList.remove('active'));

    // Add the 'active' class to the clicked nav item and corresponding image
    navItem.classList.add('active');
    carouselImages[index].classList.add('active');
  });
});



//**************hid team history  */
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
  }
  
  function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'none';
  }
  

//************************** msecton script ***********************
const tabs = document.querySelectorAll('.tab');
const images = document.querySelectorAll('.image');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');

    // Remove the active class from all tabs and hide all images
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.style.backgroundColor = 'rgb(35, 65, 95)';
    });
    images.forEach(image => image.style.display = 'none');

    // Add the active class to the clicked tab and show the corresponding image
    tab.classList.add('active');
    tab.style.backgroundColor = 'darkgray';
    document.getElementById(target).style.display = 'block';
  });
});

// Display the Mountain 1 image by default on page load
document.getElementById('mountain1').style.display = 'block';
document.querySelector('.tab[data-target="mountain1"]').classList.add('active');
document.querySelector('.tab[data-target="mountain1"]').style.backgroundColor = 'darkgray';

