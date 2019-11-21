const API = "https://ptminder.com/hapi"


async function postData (url, params) {
    try {
        let res = await fetch(`${API}/${url}`, {
            method : "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        let resJson = await res.json();
        return await resJson
    } 
    catch (e) {
        console.log(`Error: ${e}`)
    }
}

export { postData }