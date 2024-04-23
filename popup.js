function openPopups() {
  fetch('data/template_text.csv')
      .then(response => response.text())
      .then(data => {
          const lines = data.split('\n');
          for (let i = 1; i < lines.length; i++) {
              const columns = lines[i].split(',');
              let text = '';
              for (let j = 0; j < columns.length; j++) {
                  const columnText = columns[j].trim();
                  if (columnText) {
                      text += '<p>' + columnText + '</p>';
                  }
              }
              if (text) {
                  const title = text.match(/<p>(\w+)/)[1]; // Get the first word of the text
                  const popupWindow = window.open('', '_blank', 'width=400,height=200,left=' + Math.random() * (window.innerWidth - 400) + ',top=' + Math.random() * (window.innerHeight - 200));
                  if (popupWindow) {
                      popupWindow.document.body.style.backgroundImage = "url('images/emptyroom.jpeg')";
                      popupWindow.document.write('<html><head><title>' + title + '</title></head><body style="font-family: Courier New; font-size: 16px;">');
                      popupWindow.document.write(text);
                      popupWindow.document.write('</body></html>');
                      popupWindow.document.close(); // Close the document to prevent about:blank
                  } else {
                      alert('Popup blocked! Please allow popups for this site.');
                  }
              }
          }
      })
      .catch(error => console.error('Error fetching data:', error));
}
