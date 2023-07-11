// Function to fetch videos using YouTube Data API
function fetchVideos() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual YouTube API key
    const searchInput = document.getElementById('search-input').value;
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
  
  // Function to display videos in HTML
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
  
