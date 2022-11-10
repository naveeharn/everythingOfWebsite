
let isConnected = true

const download = new Promise(function (resolve, reject) {
    if (isConnected) {
        console.log('complete connect');
    }
}).then(response => {
    console.log('Successfully');
}).catch(response => {
    console.log('Unsuccessfully');
}).finally(response => {
    console.log('End Task');
});

console.log('- - - - - - - - - - - -');

const connect = true
const url_1 = 'naveeharn.github.io/img_1'
const url_2 = 'naveeharn.github.io/img_2'
const url_3 = 'naveeharn.github.io/img_3'
const url_4 = 'naveeharn.github.io/img_4'
const url_5 = 'naveeharn.github.io/img_5'

function downloading(url) {
    return new Promise(function (resolve, reject) {
        if (connect) {
            console.log(`Successfully Downloaded url : ${url}`);
        } else {
            console.log(`Error url : ${url}`);
        }
    })
}
downloading(url_1)

console.log('- - - - - - - - - - - -');

function downloading_timeout(url) {
    return new Promise(function (resolve, reject) {
        console.log('Downloading...');
        setTimeout(() => {
            if (connect) {
                resolve(`[TO] Successfully Downloaded url : ${url}`)
            } else {
                reject(`[TO] Error url : ${url}`)
            }
        }, 1500);
    })
}
// downloading_timeout(url_1).then(response=>{
//     console.log(response);
// }).catch(response=>{
//     console.log(response);
// }).finally(()=>{
//     console.log('End Task');
// })

console.log('- - - - - - - - - - - -');

function downloading_hell_loop(url) {
    return new Promise(function (resolve, reject){
        console.log('File Downloading...');
        setTimeout(() => {
            if (connect) {
                resolve(`Successfully URL: ${url}`);
            } else {
                reject(`Failed URL : ${url}`);
            }
        }, 1500);
    })
}
// downloading_hell_loop(url_1).then(response=>{
//     console.log(response);
//     downloading_hell_loop(url_2).then(response=>{
//         console.log(response);
//     })
// })

// downloading_hell_loop(url_1).then(function(response){
//     console.log(response);
//     downloading_hell_loop(url_2).then(function(response){
//         console.log(response);
//     })
// })

// downloading_hell_loop(url_1).then(response=>{
//     console.log(response);
// }).then(()=>{
//     downloading_hell_loop(url_2).then(response=>{
//         console.log(response);
//     })
// }).then(()=>{
//     downloading_hell_loop(url_3).then(response=>{
//         console.log(response);
//     })
// })

// downloading_hell_loop(url_1).then(function(response){
//     console.log(response);
// }).then(()=>{
//     downloading_hell_loop(url_2).then(function(response){
//         console.log(response);
//     })
// }).then(()=>{
//     downloading_hell_loop(url_3).then(function(response){
//         console.log(response);
//     })
// })

downloading_hell_loop(url_1).then(function (response) {
    console.log(response);
    return downloading_hell_loop(url_2)
}).then(function (response) {
    console.log(response);
    return downloading_hell_loop(url_3)
}).then(function (response) {
    console.log(response);
    return downloading_hell_loop(url_4)
}).then(function (response) {
    console.log(response);
    return downloading_hell_loop(url_5)
}).then(response=>{
    console.log(response);
})