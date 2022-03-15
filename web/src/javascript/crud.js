import axios from 'axios';

/**
 * @function saveFormInputs
 * @summary - Will make a post or put http requisition using AXIOS
 * @param {String} url - url to http requisition
 * @param {Object} formData  - the data to post or put at the requisition
 */
export function saveFormInputs(url, formData) {
    axios['post'](url, formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export async function getDatas(url) {
    return axios['get'](url)
        .then(res => res.data)
}

export async function removeData(url, id) {
    axios['delete'](`${url}/${id}`)
}

export async function getViolationsData(url) {
    return axios['get'](url)
        .then(res => res.data)
}