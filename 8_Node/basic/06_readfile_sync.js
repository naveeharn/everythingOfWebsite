const fs = require('fs')

const input_path='/Users/naveeharntehmarn/Desktop/Sophomore/2_semester_1/everythingWeb/KongRuksiam_Official/8_Node/basic/files/input.txt'
const outut_path='/Users/naveeharntehmarn/Desktop/Sophomore/2_semester_1/everythingWeb/KongRuksiam_Official/8_Node/basic/files/output.txt'

const data = fs.readFileSync(input_path, 'utf-8')

console.log(data);

const write = 'Node.js'

fs.writeFileSync(outut_path,data +' '+ write + `\nupdate ${new Date().toUTCString()}`)
