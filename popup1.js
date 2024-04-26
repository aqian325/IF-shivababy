    // Function to open popups
    function openPopupsNew() {
        fetch('data/template_text.csv')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                for (let i = 1; i < 5; i++) { // Only show the first 4 rows
                    const columns = lines[i].split(',');
                    let text = '';
                    for (let j = 0; j < columns.length; j++) {
                        const columnText = columns[j].trim();
                        if (columnText) {
                            text += '<p>' + columnText + '</p>';
                        }
                    }
                    if (text) {
                        setTimeout(() => {
                            const title = text.match(/<p>(\w+)/)[1]; // Get the first word of the text
                            const popupWindow = window.open('', '_blank', 'width=400,height=200,left=' + Math.random() * (window.innerWidth - 400) + ',top=' + Math.random() * (window.innerHeight - 200));
                            if (popupWindow) {
                                popupWindow.document.write('<html><head><title>' + title + '</title>');
                                popupWindow.document.write('<style>* { background: black !important; color: bisque !important; font-family: "Courier New" !important; font-size: 16px !important; }</style>'); // Set background color and text color
                                popupWindow.document.write('</head><body>');
                                popupWindow.document.write(text);
                                popupWindow.document.write('</body></html>');
                                popupWindow.document.close(); // Close the document to prevent about:blank
                            } else {
                                alert('Popup blocked! Please allow popups for this site.');
                            }
                        }, i * 2000); // Delay each window by 3 seconds
                    }
                }
            })
            .catch(error => console.error('Error fetching data:', error));
      }