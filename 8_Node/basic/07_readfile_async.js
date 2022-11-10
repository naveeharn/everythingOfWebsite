const fs = require('fs')

const input_path = '/Users/naveeharntehmarn/Desktop/Sophomore/2_semester_1/everythingWeb/KongRuksiam_Official/8_Node/basic/files/async_input.txt'
const output_path = '/Users/naveeharntehmarn/Desktop/Sophomore/2_semester_1/everythingWeb/KongRuksiam_Official/8_Node/basic/files/async_output.txt'

fs.readFile(input_path, 'utf-8', (error, response) => {
    if (error) {
        console.log('= = = =\n',error);
    } else {
        console.log(response);
        const write = `${response} \nUpdate ${new Date().toUTCString()}`
        fs.writeFile(output_path, write, err=>{
            if (err) {
                return console.log('Error\n',err);
            }
            console.log('Successfully write file');
        })
    }
})
console.log('End Task');