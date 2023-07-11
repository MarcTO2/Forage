// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


function fetchVideos() {
  const apiKey = 'AJiL9tUDNwtVv1RiyaA44mN7z5lzJiMRc'; 
  const searchInput = document.getElementById('form-control').value;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchInput}&maxResults=5`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayVideos(data.items);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function displayVideos(videos) {
  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = '';

  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      <h3>${video.snippet.title}</h3>
    `;

    videoContainer.appendChild(videoElement);
  });
}
