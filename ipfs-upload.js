const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadToIpfs() {
  const file = document.getElementById("file").files[0];
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = async () => {
    const buffer = await Buffer.from(reader.result);
    const ipfsHash = await ipfs.add(buffer);
    const ipnsHash = await ipfs.name.publish(ipfsHash[0].hash);
    document.getElementById("ipfsHash").innerHTML = "IPFS Hash: " + ipfsHash[0].hash;
    document.getElementById("blockchainLink").innerHTML = "Blockchain Link: " + "https://ipfs.io/ipns/" + ipnsHash.name;
  }
}
