export const delay = (ms = 1000) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

export const isUndefined = (d: any) => {
    return typeof d === 'undefined'
}