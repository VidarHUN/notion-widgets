async function fetchBitcoinPrice() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.usd;

        // Display the price and last updated time
        document.querySelector('.price').textContent = `$${bitcoinPrice.toLocaleString('en-US')}`;
        document.getElementById('last-updated').textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
      } catch (err) {
        console.error('Error fetching Bitcoin price:', err);
        document.querySelector('.price').textContent = 'Error';
        document.getElementById('last-updated').textContent = '';
      }
    }

    // Fetch the price initially and refresh every 60 seconds
    fetchBitcoinPrice();
    setInterval(fetchBitcoinPrice, 60000);