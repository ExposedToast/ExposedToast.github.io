const dataDisplay = document.getElementById('data-display');

const fetchData = async () => {
    try {
        const response = await axios.get('https://www.dextools.io/shared/data/pair?address=0xa43fe16908251ee70ef74718545e4fe6c5ccec9f&chain=ether');
        dataDisplay.innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
    } catch (error) {
        console.error(error);
        dataDisplay.innerHTML = 'Error fetching data.';
    }
};

fetchData();

// Fetch data every 24 hours
setInterval(fetchData, 1000 * 60 * 60 * 24);
