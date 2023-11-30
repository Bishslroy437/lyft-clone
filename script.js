const words = ['visitors', 'people' , 'students' , 'VIPs' , 'essential goods', 'customers', 'ideas' , 'business' , 'interviewees']; // Array of words to cycle through
  let index = 0;

  function changeWord() {
    document.getElementById('changingWord').textContent = words[index];
    index = (index + 1) % words.length; // Move to the next word cyclically
    setTimeout(changeWord, 1000); // Change word after 2000ms (2 seconds)
  }

  // Initial call to start changing words
  setTimeout(changeWord, 1000); // Start after 2 seconds
