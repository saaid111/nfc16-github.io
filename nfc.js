let filled = 0;
async function readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {

            if (decoder.decode(record.data) === "Apple.com") {
                
             const circles = document.querySelector(".circle");
              
             if (filled < circles.length) {
                circles[filled].style.backgroundColor = 'yellow';
                filled++;

              }
            }
              

            
            
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
      let timeoutId;

  function consoleLog(data) {
  const logElement = document.getElementById('log');
  logElement.innerHTML += data + '\n';

  if (data === "Web NFC is not supported.") {
    timeoutId = setTimeout(() => {
      logElement.innerHTML = "";
    }, 1400); // 5000ms = 5 seconds
  } else {
    clearTimeout(timeoutId);
  }
}
      
    }
  }
  
  async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.write("What Web Can Do Today");
        consoleLog("NDEF message written!");
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
    }
  }
  
  function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';

  }

 