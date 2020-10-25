function backend(number) {
    const promise = new Promise((resolve, reject)=> {
        if (number % 2 === 0) {
            resolve('number is even')    
        } else {
            reject('number is odd')
        }
    })   
    return promise
}

function builtInFuncs() {
    const promise = backend(20)
    promise.then((data)=> {

        console.log('in then(), promise resolved')
        console.log(data)

    }).catch((data)=> {

        console.log('in then(), promise resolved')
        console.log(data)
    })
}

async function asyncAwait() {
    const promise = await backend(21).catch((error) => {
        console.log(error)
        return
    })
   console.log(promise)
    
}

asyncAwait()