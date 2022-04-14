const name0 = 'John';
const name1 = 'Matthew';
const length0 = name0.length;
const length1 = name1.length;

//determines which name is longer and by how much. prints results in a sentence.
if (length0 > length1) {
    let lenDiff = length0 - length1
    console.log(`The name ${name0} is longer than ${name1} by ${lenDiff} characters`);
} else {
    let lenDiff = length1 - length0
    console.log(`The name ${name1} is longer than ${name0} by ${lenDiff} characters`);
}