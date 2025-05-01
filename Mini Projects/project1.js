// The readline module in Node.js provides a way to read input
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Task");
    console.log("3: Exit");

// Asks the user a question Waits for the user to type a response and hit Enter. Then runs the callback function with the user's input.
    rl.question("choose an option: ", handleInput)
}

const handleInput = (option) => {
    if(option == 1){
        rl.question("Enter the task: ",(task)=>{
              todos.push(task)
              console.log("Task Added: ",task);
              showMenu();
        })
    }
    else if (option ==2){
        if(todos.length == 0){
            console.log('No tasks in Todo');
        }
        todos.forEach((task,index)=>{
            console.log(`Task ${index+1}: `,task);
        })
        showMenu()
    }
    else if(option==3){
        console.log("Good Bye....")
        // Closes the readline interface. Always call this when you're done reading input, or your program may keep running.
        rl.close();
    }
    else{
        console.log('Invalid option Pleas Try again....');
        showMenu()
    }
}
showMenu();