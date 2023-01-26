   async function uploadToIpfs() {
    // Get the selected file from the input
    const file = document.getElementById("fileInput").files[0];
    // Create an IPFS instance
    const ipfs = IpfsHttpClient({ host: 'ipfs.io', port: '443', protocol: 'https' })
    // Add the file to IPFS
    const addedFile = await ipfs.add(file);
    console.log("IPFS Hash: "+addedFile[0].hash);
    console.log("Blockchain link: https://ipfs.io/ipfs/"+addedFile[0].hash);
}
