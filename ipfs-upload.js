import Ipfs from 'ipfs-api';
async function uploadToIpfs() {
    // Get the selected file from the input
    const file = document.getElementById("fileInput").files[0];
    // Create an IPFS instance
    const ipfs = new Ipfs({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

    // Add the file to IPFS
    const addedFile =
