const jsonDataUrl = "https://www.dextools.io/shared/data/pair?address=0xa43fe16908251ee70ef74718545e4fe6c5ccec9f&chain=ether";

function copyJsonData() {
  fetch(jsonDataUrl)
    .then(response => response.json())
    .then(data => {
      const jsonData = JSON.stringify(data, null, 2);
      document.getElementById("json-data").textContent = jsonData;
      setTimeout(copyJsonData, 24 * 60 * 60 * 1000); // run every 24 hours
    })
    .catch(error => console.error(error));
}

copyJsonData();
