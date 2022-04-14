
let message = prompt("Please insert a message "); //prompts user for message


//responds to message by comparing the message to itself if all upper or lower or neither.
if (message === message.toLowerCase()) {
    console.log('Please speak up! Your message was in all lowercase.');
} else if (message === message.toUpperCase()) {
    console.log("PLEASE STOP YELLING!! Your message was in all uppercase");
} else {
    console.log("What a pleasant volume! Your message was a mix of lower and upper case. ");
}