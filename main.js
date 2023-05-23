import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Job listings data (example data)
var jobListings = [
  {
    title: 'Software Developer Intern',
    company: 'ABC Corporation',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-20',
    experienceLevel: 'intermediate'
  },
  {
    title: 'Web Development Intern',
    company: 'XYZ Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-18',
    experienceLevel: 'entry'
  },
  {
    title: 'Software Developer Intern',
    company: 'ABC Corporation',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-20',
    experienceLevel: 'intermediate'
  },
  {
    title: 'Web Development Intern',
    company: 'XYZ Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-18',
    experienceLevel: 'entry'
  },
  {
    title: 'Frontend Developer Intern',
    company: '123 Web Development',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-17',
    experienceLevel: 'entry'
  },
  {
    title: 'Backend Developer Intern',
    company: 'Tech Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-16',
    experienceLevel: 'entry'
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Innovative Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-15',
    experienceLevel: 'entry'
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Creative Designs',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-14',
    experienceLevel: 'entry'
  },
  {
    title: 'Graphic Design Intern',
    company: 'Design Studio',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-13',
    experienceLevel: 'intermediate'
  },
  {
    title: 'Software Developer Intern',
    company: 'ABC Corporation',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-20',
    experienceLevel: 'intermediate'
  },
  {
    title: 'Web Development Intern',
    company: 'XYZ Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-18',
    experienceLevel: 'intermediate'
  },
  {
    title: 'Software Developer Intern',
    company: 'ABC Corporation',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-20',
    experienceLevel: 'intermediate'
  },
  {
    title: 'Web Development Intern',
    company: 'XYZ Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-18',
    experienceLevel: 'senior'
  },
  {
    title: 'Frontend Developer Intern',
    company: '123 Web Development',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-17',
    experienceLevel: 'senior'
  },
  {
    title: 'Backend Developer Intern',
    company: 'Tech Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-16',
    experienceLevel: 'senior'
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Innovative Solutions',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-15',
    experienceLevel: 'senior'
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Creative Designs',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-14',
    experienceLevel: 'senior'
  },
  {
    title: 'Graphic Design Intern',
    company: 'Design Studio',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum faucibus ipsum, a gravida mauris eleifend et. Nullam vehicula velit vitae semper vestibulum.',
    postedDate: '2023-05-13',
    experienceLevel: 'senior'
  }
];

// Function to display job listings
function displayJobListings() {
  var jobListingsContainer = document.querySelector('.job-listings');
  jobListingsContainer.innerHTML = '';

  if (jobListings.length === 0) {
    jobListingsContainer.innerHTML = '<p>No job listings found.</p>';
    return;
  }

  for (var i = 0; i < jobListings.length; i++) {
    var jobListing = jobListings[i];
    var jobElement = document.createElement('div');
    jobElement.classList.add('job');
    jobElement.innerHTML = `
      <h2>${jobListing.title}</h2>
      <p>Company Name: ${jobListing.company}</p>
      <p>Location: ${jobListing.location}</p>
      <p>Job Description: ${jobListing.description}</p>
      <p>Posted Date: ${jobListing.postedDate}</p>
      <p>Experience Level: ${jobListing.experienceLevel}</p>
      <a href="#" class="btn btn-primary">Apply</a>
    `;

    jobListingsContainer.appendChild(jobElement);
  }
}

// Function to filter job listings based on search input
function filterJobListings() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();
  var filteredJobListings = jobListings.filter(function(jobListing) {
    var jobTitle = jobListing.title.toLowerCase();
    return jobTitle.includes(searchInput);
  });

  displayFilteredJobListings(filteredJobListings);
}

// Function to display filtered job listings
function displayFilteredJobListings(filteredJobListings) {
  var jobListingsContainer = document.querySelector('.job-listings');
  jobListingsContainer.innerHTML = '';

  for (var i = 0; i < filteredJobListings.length; i++) {
    var jobListing = filteredJobListings[i];
    var jobElement = document.createElement('div');
    jobElement.classList.add('job');
    jobElement.innerHTML = `
      <h2>${jobListing.title}</h2>
      <p>Company Name: ${jobListing.company}</p>
      <p>Location: ${jobListing.location}</p>
      <p>Job Description: ${jobListing.description}</p>
      <p>Posted Date: ${jobListing.postedDate}</p>
      <p>Experience Level: ${jobListing.experienceLevel}</p>
      <a href="#" class="btn btn-primary">Apply</a>
    `;

    jobListingsContainer.appendChild(jobElement);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const applyFiltersButton = document.getElementById("applyFilters");
  applyFiltersButton.addEventListener("click", filterJobListings);
});

document.addEventListener("DOMContentLoaded", function() {
  displayJobListings();

  // Event listener for search button
  document.getElementById('searchButton').addEventListener('click', filterJobListings);
});




// Add animations on both pages
window.addEventListener('DOMContentLoaded', function() {
  animateOnLoad();
});

function animateOnLoad() {
  // Add animations or transitions on page load
  // For example, you can animate the header and advice cards
  const header = document.querySelector('header');
  header.classList.add('animate-header');

  const adviceCards = document.querySelectorAll('.advice-card');
  adviceCards.forEach(function(card) {
    card.classList.add('animate-card');
  });
  displayJobListings();
}

// Navigation between pages
const homeLink = document.querySelector('a[href="index.html"]');
const adviceLink = document.querySelector('a[href="advice.html"]');

homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  navigateToPage('index.html');
});

adviceLink.addEventListener('click', function(event) {
  event.preventDefault();
  navigateToPage('advice.html');
});

function navigateToPage(page) {
  // Apply exit animation before navigating to the next page
  // For example, you can animate the header and advice cards
  const header = document.querySelector('header');
  header.classList.remove('animate-header');
  header.classList.add('exit-header');

  const adviceCards = document.querySelectorAll('.advice-card');
  adviceCards.forEach(function(card) {
    card.classList.remove('animate-card');
    card.classList.add('exit-card');
  });

  // Navigate to the next page after a delay to allow the exit animation to finish
  setTimeout(function() {
    window.location.href = page;
  }, 500); // Adjust the delay as needed
}

// Initialize AOS library
AOS.init();

/******************************************************************************************************************************************************** */


/***************************************************************************************************************************************************************** */
/****************************************************************************************************************************************************************** */
/*create scene to hold all animated objects to be shown on convas*/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var drawingSurface = document.getElementById( 'draw' );
const renderer = new THREE.WebGL1Renderer({
  antialias: true,
  canvas: drawingSurface
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const spaceTexture = new THREE.TextureLoader().load('"C:\Users\naled\OneDrive\Desktop\istockphoto-1319763895-612x612.jpg"');
scene.background = spaceTexture;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();


function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();



//#############################################################################################
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');

  burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();