
function encrypt(data){
    return "encrypted data";
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`${encryptedData} is being send ${url}`)
}

export {
    send
}