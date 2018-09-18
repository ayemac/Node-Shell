module.exports = function (){

    process.stdout.write('prompt >');

    process.stdin.on('data', (data) => { // .on is the addListener method for Node
        const cmd = data.toString().trim();
    
        if (data==='pwd'){
            process.toString.write()
        }
        process.stdout.write(`Current directory: ${process.cwd()}`);
        process.stdout.write('\nprompt > '); 
    
    });

}

function hello(string){

    return `hello + ${string}`;

}
console.log(hello(micaela));




