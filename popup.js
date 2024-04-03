let table;
let Gluten;
let Glutenthin;


function preload() {
  table = loadTable("data/template_text.csv");
  console.log(table);
  Gluten = loadFont("fonts/Gluten-Black.ttf");
  Glutenthin = loadFont("fonts/Gluten-Thin.ttf");
}
function openPopups() {
  fetch('data/template_text.csv')
    .then(response => response.text())
    .then(data => {
      // Splitting CSV data into an array of lines
      const lines = data.split('\n');
      // Cycling through each line starting from the second row
      for (let i = 1; i < lines.length; i++) {
        // Displaying popup for each line
        const text = lines[i].trim();
        if (text) {
          // Delay after the first popup
          const delay = (i === 1) ? 0 : i * 3000;
          setTimeout(() => {
            // Opening new window with the text at a random position
            const popupWindow = window.open('', '_blank', 'width=400,height=200,left=' + Math.random() * (window.innerWidth - 400) + ',top=' + Math.random() * (window.innerHeight - 200));
            if (popupWindow) {
              // Set background image for the popup
              popupWindow.document.body.style.backgroundImage = "url('images/emptyroom.jpeg')";
              // Write HTML content into the popup
              popupWindow.document.write('<html><head><title>convo</title></head><body>');
              popupWindow.document.write('<h1>' + text + '</h1>');
              popupWindow.document.write('</body></html>');
            } else {
              alert('Popup blocked! Please allow popups for this site.');
            }
          }, delay);
        }
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}