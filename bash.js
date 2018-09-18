// process.stdout.write('prompt >');

// process.stdin.on('data', (data) => { // .on is the addListener method for Node
//     const cmd = data.toString().trim();

//     process.stdout.write('You typed; ' + cmd);
//     process.stdout.write('\nprompt > '); 

// });



// process.stdout.write('prompt >');

// process.stdin.on('data', (data) => { // .on is the addListener method for Node
//     const cmd = data.toString().trim();

//     if (){
//         process.toString.write();
//         process.stdout.write(`Current directory: ${process.cwd()}`);
//         process.stdout.write('\nprompt > '); 
//     } else {
//     process.stdout.write('You typed; ' + cmd);
//     process.stdout.write('\nprompt > '); 
//     }
// });


process.stdout.write('prompt >');

process.stdin.on('data', (data) => { // .on is the addListener method for Node
    const cmd = data.toString().trim();

    if (data==='pwd'){
        process.toString.write()
    }
    process.stdout.write(`Current directory: ${process.cwd()}`);
    process.stdout.write('\nprompt > '); 

});