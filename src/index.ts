import * as fs from "node:fs"

const file = fs.readFileSync('./src/test/test.md', 'utf8')

const split = file.split("---")

console.log(split)

const matter = split[1].split(":") 
console.log(matter[0].replace(/$\r\n/,""))

