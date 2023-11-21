import axios from "axios"

// function definition commonrequest
export const commonRequest = async (method, url, body) => {

    //  request configuration

    let reqConfig = {
        
        url,
        method,
        data: body,
        headers: {
            "content-type": "application/json"
            //  multipart form data
        }

    }

    // api clling using axios library

    return await axios(reqConfig).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}