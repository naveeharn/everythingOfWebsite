
const connect = true

const url_1 = 'naveeharn.github.io/img_1'
const url_2 = 'naveeharn.github.io/img_2'
const url_3 = 'naveeharn.github.io/img_3'
const url_4 = 'naveeharn.github.io/img_4'
const url_5 = 'naveeharn.github.io/img_5'

function downloading(url) {
    return new Promise(function (resolve, reject) {
        console.log('Downloading...');
        setTimeout(() => {
            if (connect) {
                resolve(`Successfully URL : ${url}`)
            } else {
                reject(`Successfully URL : ${url}`)
            }
        }, 1000);
    })
}

// Async & Await

async function start() {
    console.log(await downloading(url_1))
    console.log(await downloading(url_2))
    console.log(await downloading(url_3))
    console.log(await downloading(url_4))
    console.log(await downloading(url_5))

}

start()