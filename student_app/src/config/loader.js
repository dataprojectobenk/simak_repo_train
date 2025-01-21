import axios from "axios"
import { decrypt } from "./crypto"
import { base_url } from "./app"

// middleware
const toLogin = new Response('', { status: 302, headers: { Location: '/' } })
export const authCheck = () => {
    if (!localStorage.getItem('auth')) return toLogin
    let auth = JSON.parse(decrypt(localStorage.getItem('auth')))
    return auth
}

export const loadTaskVocab = async () => {
    let auth = JSON.parse(decrypt(localStorage.getItem('auth')))
    let result = { status: true, data: [] }
    let page = '/'
    const { credential } = auth
    await axios({
        method: 'GET',
        url: base_url,
        params: {
            action: 'elu_get_task', token: credential.token
        }
    }).then(res => {
        if (res.data.status) { result['data'] = res.data.data }
        else {
            result['status'] = false
        }
    }).catch(err => {
        result['status'] = false
        page = '/page_error'
    })
    return result.status ? result.data : new Response('', { status: 302, headers: { Location: page } })
}