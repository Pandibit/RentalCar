const navbar = document.querySelector('.navbar');
const homeIcon = document.querySelector('.fa-house');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('navbar-scrolled');
    } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

const orderInputs = document.querySelectorAll('.order');

orderInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.outline = 'none';
  });
});

const loginInputs = document.querySelectorAll('.login-input');

loginInputs.forEach(inputs => {
  inputs.addEventListener('focus', () => {
    inputs.style.outline = 'none';
  });
});

const signInInputs = document.querySelectorAll('.sign-in');

signInInputs.forEach(input2 => {
  input2.addEventListener('focus', () => {
    input2.style.outline = 'none';
  });
});

document.querySelector('#signin-btn').onclick = () => {
    document.querySelector('.overlay').classList.toggle('active');
}


const overlay = document.querySelectorAll('.overlay')

for(let i=0;i<overlay.length;i++){
  overlay[i].addEventListener('click',function(){
    overlay[i].classList.remove('active')
  })
}






$(document).ready(function() {
  // Smooth scrolling when clicking on a scroll-link
  $('.scroll-link').on('click', function() {
      var target = $(this).data('target');
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });
});

function navigateToPage(page, targetDivClass) {
  // Add the target div class as a URL parameter
  var url = page + '?target=' + encodeURIComponent(targetDivClass);
  
  // Navigate to the new page
  window.location.href = url;
}


const starContainers = document.querySelectorAll('.stars');

starContainers.forEach((container) => {
  const stars = container.querySelectorAll('.fa-star');

  stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
      stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
      });
    });
  });
});




const carContent = document.querySelectorAll('.car-grade');
const carRate = document.querySelectorAll('.car-rate')


for(let i=0;i<carContent.length;i++){
  carContent[i].addEventListener('click',function(){
    carRate[i].classList.toggle('car-hidden')

  
 carRate[i].addEventListener('click',function(){
   carRate[i].classList.add('car-hidden')
 })

})}



const menuBar = document.querySelector('.menu-bar');
const menuIcon = document.querySelector('.menu-bar i')
const navTab = document.querySelector('.nav-tab');

let isMenuOpen = false;

menuBar.addEventListener('click', function() {
  if (!isMenuOpen) {
    navTab.style.display = 'flex';
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    navTab.style.display = 'none';
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }

  isMenuOpen = !isMenuOpen;
});


// Get the parent container for car elements
const parentContainer = document.querySelector('.whole-cars');

// Get the filter buttons
const priceButton = document.querySelector('.price-button');
const recommendedButton = document.querySelector('.recommended-button');

// Store the default order of the car elements
const defaultOrder = Array.from(parentContainer.querySelectorAll('.car-content'));

// Add click event listener to the price filter button
priceButton.addEventListener('click', () => {
  // Get all car elements
  const carElements = parentContainer.querySelectorAll('.car-content');

  // Convert car elements to an array for easier manipulation
  const carArray = Array.from(carElements);

  // Sort the car elements based on the price
  carArray.sort((a, b) => {
    const priceA = parseFloat(a.querySelector('.price-purchase h4').textContent.replace(/[^\d.]/g, ''));
    const priceB = parseFloat(b.querySelector('.price-purchase h4').textContent.replace(/[^\d.]/g, ''));
    return priceA - priceB;
  });

  // Clear the container before appending sorted car elements
  parentContainer.innerHTML = '';

  // Append the sorted car elements back to the container
  carArray.forEach(car => {
    parentContainer.appendChild(car);
  });
});

// Add click event listener to the recommended button
recommendedButton.addEventListener('click', () => {
  // Clear the container
  parentContainer.innerHTML = '';

  // Append the default ordered car elements back to the container
  defaultOrder.forEach(car => {
    parentContainer.appendChild(car);
  });
});

const rateWnds = document.querySelectorAll('.rate-wnd');

function updateRightRanges() {
  rateWnds.forEach(rateWnd => {
    const pElement = rateWnd.querySelector('p');
    const rightRange = rateWnd.querySelector('.right-range');
    const rate = parseFloat(pElement.textContent);
    const maxWidth = 100; // Maximum width in percentage

    // Calculate the width percentage based on the rate value
    const widthPercentage = (rate / 10) * maxWidth;
    rightRange.style.width = `${widthPercentage}%`;

    // Set the background color based on the rate value
    if (rate >= 7) {
      rightRange.style.backgroundColor = 'green';
    } else if (rate >= 4) {
      rightRange.style.backgroundColor = 'yellow';
    } else {
      rightRange.style.backgroundColor = 'red';
    }
  });

}
updateRightRanges();



const carContents = document.querySelectorAll('.car-content');

function updateCarGrades() {
  carContents.forEach(carContent => {
    const rateWnds = carContent.querySelectorAll('.rate-wnd');
    const carGradeButton = carContent.querySelector('.car-grade');

    let sum = 0;
    let count = 0;

    rateWnds.forEach(rateWnd => {
      const pElement = rateWnd.querySelector('p');
      const rate = parseFloat(pElement.textContent);
      sum += rate;
      count++;
    });

    const average = count > 0 ? sum / count : 0;
    carGradeButton.textContent = `${average.toFixed(1)}`;
  });
}

// Initial update based on the default values
updateCarGrades();



$(document).ready(function() {
  $('.select-window').on('click', function() {
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
  });
});



const mapOverlays = document.querySelectorAll('.map-overlay');

document.querySelector('.map-wnd').onclick = () => {
  mapOverlays.forEach((overlay) => {
    overlay.classList.add('active');
  });
};

mapOverlays.forEach((overlay) => {
  overlay.addEventListener('click', function() {
    this.classList.remove('active');
  });
});

var airports = [
  "John F. Kennedy International Airport (JFK)",
  "London Heathrow Airport (LHR)",
  "Charles de Gaulle Airport (CDG)",
  "Tokyo Haneda Airport (HND)",
  "Sydney Airport (SYD)",
  "Leonardo da Vinci–Fiumicino Airport (FCO)",
  // Add more airport names here
];

function search() {
  var query = document.getElementById("search-input").value.toLowerCase();
  var matchingAirports = getAirportsStartingWith(query);
  displayOptions(matchingAirports);

  // Show or hide the close icon based on input value
  var closeIcon = document.getElementById("close-icon");
  closeIcon.classList.toggle("show-close-icon", query.length > 0);
}

function getAirportsStartingWith(query) {
  return airports.filter(function(airport) {
    return airport.toLowerCase().startsWith(query);
  });
}

function displayOptions(airports) {
  var optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  airports.forEach(function(airport) {
    var option = document.createElement("div");
    option.classList.add("option");
    option.textContent = airport;
    option.addEventListener("click", function() {
      document.getElementById("search-input").value = airport;
      optionsContainer.innerHTML = "";
    });

    optionsContainer.appendChild(option);
  });
}

function clearInput() {
  var searchInput = document.getElementById("search-input");
  searchInput.value = "";
  search();
  searchInput.focus();
}

