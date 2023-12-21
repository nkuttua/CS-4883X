document.addEventListener('DOMContentLoaded', function() {
    var selectedMenu;
    document.getElementById("tablinkContainer").addEventListener("click", async function(e) {
      selectedMenu;
      if (selectedMenu) {
        // hide previously selected menu content
        document.getElementById(selectedMenu).classList.add('hidden');
        if (selectedMenu == "trip") {
          
        } else if (selectedMenu == "bookmark") {
          const res = await fetch(`https://vay-k.herokuapp.com/trips`);
          const data = await res.json();
          console.log(data);
        }

      }
      // show currently selected menu content
      selectedMenu = e.target.dataset.link;
      document.getElementById(selectedMenu).classList.remove('hidden');
    });
  });

  async function getCurrentTabURL() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true})
    let url = tabs[0].url;
    return url;
  }

  async function addBookmarkPhoto() {
    fetch(`https://vay-k.herokuapp.com/add/photo/id`, {
        body: JSON.stringify(await getCurrentTabURL())
    })   
  }

  async function addBookmarkWebpage() {
    fetch(`https://vay-k.herokuapp.com/add/webpage/` + id, {
        body: JSON.stringify(await getCurrentTabURL())
    })   
  }
  
  // as soon as button on trips tab gets hit, getCurrentTabURL is called
  // right now, it only gets the url of the chrome extension and not whatever tab we want to save
  document.getElementById("trip-button").addEventListener("click", function() {
    var url = getCurrentTabURL();
    window.onclick = getCurrentTabURL();
    document.getElementById("justatest").innerHTML = url;
    console.log(url);
  });
