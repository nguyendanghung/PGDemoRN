
// const API = "https://ptminder.com/hapi"
const API = "http://dev2.pre.ptminder.com/hapi"
const URL_LOGIN = "auth/login/"
const URL_GET_LIST_CLIENT = "data/get/clients/"
const URL_GET_TRANSACTIONS = "data/get/transactions/"

async function postData(url, params) {
    try {
        let res = await fetch(`${API}/${url}`, {
            method: "POST",
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

export { postData, URL_GET_LIST_CLIENT, URL_LOGIN, URL_GET_TRANSACTIONS }