import { AES, enc } from "crypto-js";
const secretKey = 'never give up'

export const encrypt = (value) => {
    if (typeof value == 'object') {
        if (Array.isArray(value)) {
            return value.map(el => encrypt(el))
        }
        Object.fromEntries(
            Object.entries(value).map(([key, val]) => [key, encrypt(val)])
        )
    }
    let data = typeof value == 'number' ? value.toString() : value
    return data.length > 0 ? AES.encrypt(data, secretKey).toString() : ''
}

export const decrypt = (value) => {
    if (typeof value == 'object') {
        if (Array.isArray(value)) {
            return value.map(el => decrypt(el))
        }
        Object.fromEntries(
            Object.entries(value).map(([key, val]) => [key, decrypt(val)])
        )
    }
    let decrypted = AES.decrypt(value, secretKey).toString(enc.Utf8)
    return decrypted.length > 0 ? decrypted : value
}