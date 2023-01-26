async function uploadToIpfs() {
        // Get the selected file from the input
        const file = document.getElementById("fileInput").files[0];
        // Create an IPFS instance
        const ipfs = await IpfsHttpClient({ host: 'ipfs.io', port: '443', protocol: 'https' })
        // Add the file to IPFS
        const addedFile = await ipfs.add(file);
        console.log("IPFS Hash: "+addedFile[0].hash);
        var date = new Date();
        console.log("Blockchain link: https://ipfs.io/ipfs/"+addedFile[0].hash);
        console.log("Time and date of the upload: " + date);
        document.getElementById("consoleOutput").innerHTML = "IPFS Hash: "+addedFile[0].hash + "<br>" + "Blockchain link: https://ipfs.io/ipfs/"+addedFile[0].hash + "<br>" + "Time and date of the upload: " + date;
}
