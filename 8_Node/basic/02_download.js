
const url_1 = 'naveeharn.github.io/url_1'
const url_2 = 'naveeharn.github.io/url_2'
const url_3 = 'naveeharn.github.io/url_3'



function downloading(url) {
    console.log(`Downloading ${url}`);
}

function complete() {
    console.log('Successfully Downloaded');
}

downloading(url_1)
complete()

console.log('- - - - - - - - - - -');

function downloading_callback(url, callback) {
    console.log('Downloading...');
    setTimeout(() => {
        console.log(`url = ${url}`);
        callback(url)
    }, 1500);
}

function complete_callback(response) {
    console.log(`response url = ${response}`);
    console.log('Successfully Downloaded');
}

downloading_callback(url_1, function (response) {
    console.log(`response url = ${response}`);
    console.log('Successfully Downloaded');
    downloading_callback(url_2, function (response) {
        console.log(`response url = ${response}`);
        console.log('Successfully Downloaded');
    })
})

// downloading_callback(url_1, complete_callback)