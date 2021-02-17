import {
    toast
} from 'react-toastify'

export function showSuccess(msg) {
    toast.success(msg)
}

export function showInfo(msg) {
    toast.info(msg)
}

export function showWarnings(msg) {
    toast.warn(msg)
}

export function handleError(error) {
    console.log('error is', error)
    debugger;
    let errMsg = "Something went wrong"
    let err = error.response //http ko response lai parse garera
    if (err && err.data) {
        errMsg = err.data.msg
    }
    toast.error(errMsg)
}

