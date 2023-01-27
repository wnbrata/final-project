const IPFS = require('ipfs-http-client')
const ipfs = new IPFS({ host: 'api.pinata.cloud', port: '443', protocol: 'https' }, { apiKey: 'db706ab6cd2f3b7aab6a' })

async function uploadToIpfs() {
  const file = document.getElementById("file").files[0];
  const reader = new FileReader();

  reader.onloadend = async function() {
    const buffer = Buffer.from(reader.result);
    const results = await ipfs.add(buffer);
    const hash = results[0].hash;
    document.getElementById("ipfs-link").innerHTML = `IPFS
