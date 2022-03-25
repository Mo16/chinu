
function clickToCopyText(contentToCopy) {
  // get text within the element specified by id
       var textContent = document.getElementById(contentToCopy).innerText;
   // write to clipboard
  navigator.clipboard.writeText
                 (textContent);
         }
 