# Problem sloving using C
**Unit 2. Control statements:**
- Decision making statements: if, if else, else if ladder, switch statements. 
- Loop control statements: while loop, for loop and do-while loop. 
- Jump Control statements: break, continue and goto.

**Unit 2. Control statements:**
Index
- [Decision control and looping Statements](#decision-control-and-looping-statements)
- [if Statement](#if-statement)
- [if-else Statement](#if-else-statement)
- [if else if else Ladder (else if ladder)](#if-else-if-else-ladder-(else-if-ladder))
- [Switch Statements](#switch-statements)
- [Loop Control Statements](#loop-control-statements)
- [While Loop in C](#while-loop-in-c)
- [do-while Loop](#do-while-loop)
- [for Loop In C](#for-loop-in-c)
- [Jump Control statements](#jump-control-statements)
- [break Statement](#break-statement)
- [continue Statement:](#continue-statement)
- [goto Statement](#goto-statement)

# Decision control and looping Statements
-> C program is executed sequentially.
- Sequentially from the first line of the program to its last line, that is the second statement is executed after the first, the third statement is executed is after the second.
- But it some cases we want only selected statements to be executed.
- C supports two types of definite decision control statements that can alter the flow of the sequences these "Branching".

**Selection / branching statement:**
| Conditional Type | Unconditional Type |
|------------------|--------------------|
| if               | switch             |
| if-else          |                    |
| if-else-if       |                    |

**Conditional branching Statement**

# if Statement
The conditional branching statements help to jump from one part of the program to another, depending on either a particular conditional is satisfied & not. These decision control statements include,
**Syntax:**
``` pseudocode
if (test expression)
{
Statement 1;
Statement n;
}
Statement x;
```
```
        ┌────────────┐
        │ Test Expr  │
        └──────┬─────┘
               │
       ┌───────┴────────┐
     True             False
      │                  │
┌────────────┐            │
│Stmt Block 1│            │
└──────┬─────┘            │
       │                  │
       └──────────► Statement x
```
**Examples:**
``` c
#include <stdio.h>
int main() {
    int num = 3;
    
    if (num % 2 == 0) {
        printf("Even number");
    } else {
        printf("Odd number");
    }
    
    return 0;
}
```
# if-else Statement
-> According to if statement, if the result is true the statements follow by the expression is executed else if the expression is false. the statement skipped by the compiler.
- According to the if-else construct of statement, the first text expression is evaluated. if the expression is true statement block<sub>1</sub> is executed and statement block<sub>2</sub> is skipped otherwise, if the expression is true false statement block 2 is executed and statement block 1 is ignored

**Syntax of if-else statement:**
```c
#include <stdio.h>
main()
{
    if (test expression)
    {
        Statement Block 1;
    }
    else
    {
        Statement block 2;
        Statement x;
    }
}
```
<img width="509" height="662" alt="image-1" src="https://github.com/user-attachments/assets/ec69b92b-d82d-4f9c-b791-989ebbc7831c" />

```
True --> Statement Block 1 --> Statement x
False --> Statement Block 2 --> Statement x
```

# if else if else Ladder (else if ladder)
This is used to check multiple conditions in sequence.
As soon as one condition is met, its block is executed, and the rest of the "ladder" is skipped. The final else block is optional and runs if none of the previous conditions were true.

**Syntax:**
``` c
if(test_expression)
{
    //execute your code
}
else if(test_expression n)
{
    //execute your code
}
else
{
    //execute your code
}
```
**Example:**
```c
#include <stdio.h>
int main() {
    int marks = 75;

    if (marks >= 90) {
        printf("Grade: A");
    } else if (marks >= 75) {
        printf("Grade: B");
    } else if (marks >= 50) {
        printf("Grade: C");
    } else {
        printf("Fail");
    }
 return 0;
}
```
**Output:**
``` bash
Grade: B
```
**Unconditional Type**

# Switch Statements
The switch case statement is an alternative to the if else if ladder that can be used to execute the conditional code based on the value of the variable specified in the switch statement. The switch block consists of cases to be executed based on the value of the switch variable.
* case: Defines a value to check against.
*  break: It stops the execution and "breaks" out of the switch block.
*  default: This is like the final else. It runs if no other case matches.

**Syntax:**
``` psudocode
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```
**Example**
```c
#include <stdio.h>
int main() {
    int day = 3;

    switch(day) {
        case 1: printf("Monday"); break;
        case 2: printf("Tuesday"); break;
        case 3: printf("Wednesday"); break;
        case 4: printf("Thursday"); break;
        case 5: printf("Friday"); break;
        default: printf("Weekend");
    }

    return 0;
}
```

Output: 
```bash
Wednesday
```

# Loop Control Statements
Loop control statements are used to repeat a block of code multiple times, until a certain condition is met. They help to avoid writing repetitive code.

**Types of Loops in C:**

Depending upon the position of a control statement in a program, looping statement in C is classified into two types:
1.  Entry controlled loop
2.  Exit controlled loop
- In an entry control loop in C, a condition is checked before executing the body of a loop. It is also called as a pre-checking loop.
- In an exit controlled loop, a condition is checked after executing the body of a loop. It is also called as a post-checking loop.

'C' programming language provides us with three types of loop constructs:
* The while loop
* The do-while loop
* The for loop

# While Loop in C
The while loop is the most basic loop. It repeats a block of code as long as a given condition is true. The condition is checked before each iteration.
**Syntax**
``` c
while (condition) {
    statements;
}
```
**Example:**
```c
#include <stdio.h>
int main() {
    int i = 1; // Initialization

    while (i <= 5) { // Condition check
        printf("%d\n", i);
        i++; // Increments
    }
    //This loop prints numbers from 1 to 5.

    return 0;
}
```
**Output:**
``` bash
1
2
3
4
5
Loop finished.
```

# do-while Loop
A do while loop in C is similar to the while loop except that the condition is always executed after the body of a loop. It is also called an exit-controlled loop.

**Syntax:**
``` c
do {
    // statements
} while (condition);
```

**Example:**
```c
#include <stdio.h>
int main() {
    int i = 1; // Initialization

    do {
        printf("%d\n", i);
        i++; // 3. Update
    } while (i <= 5); // Condition check (at the end)

    printf("Loop finished.\n");
    // This example also prints 1 to 5. 
    // The behavior is identical to the while loop in this case.

    return 0;
}
```
**Output:**
``` bash
1
2
3
4
5
Loop finished.
```
The do while loop executes the body at least once, even if the condition is false.

# for Loop In C
A for loop is a more efficient loop structure in 'C' programming:
- The initial value of the for loop is performed only once.
- The condition is a Boolean expression that tests and compares the counter to a fixed value after each iteration, stopping the for loop when false is returned.
- The incrementation/decrementation increases (or decreases) the counter by a set value.

**Syntax:**
``` c
for (initialization; condition; update) {
    // Code to be executed
}
```
1. Initialization: Runs once at the very beginning. (e.g., int i = 1)
2. Condition: Checked before every iteration. (e.g., i <= 5)
3. Update: Runs at the end of every iteration. (e.g., i++)
**Example:** 
```c
#include <stdio.h>
int main() {
    // (1. Init; 2. Condition; 3. Update)
    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }
    //This is the cleanest way to print numbers from 1 to 5.
    printf("Loop finished.\n");
    return 0;
}
```
**Output:**
``` bash
1
2
3
4
5
Loop finished.
```
Initialization happens once, then condition is checked each time before executing the loop body.

# Jump Control statements
Jumping statements in C are used to change the normal execution flow of a loop. They allow you to either exit a loop early or skip a specific iteration.

# break Statement
The break statement immediately terminates the loop it is currently in (the innermost for, while, or do-while loop). Program control moves to the very next statement after the loop's body. You already saw break used in the switch statement; it works the same way in loops.

**Example:**

This loop is supposed to count to 10, but it will stop early.

```c
#include <stdio.h>
int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            printf("Found 5, breaking the loop!\n");
            break; // Exit the loop now
        }
        printf("%d\n", i);
    }

    printf("Loop finished.\n");
    return 0;
}
```
**Output:**
``` bash
1
2
3
4
Found 5, breaking the loop!
Loop finished.
```
# continue Statement:

The continue statement skips the rest of the code inside the current iteration of the loop and immediately jumps to the next iteration.
- In a for loop, it jumps to the update expression (e.g., i++).
- In a while or do-while loop, it jumps to the condition check.

**Example:**

This loop prints numbers from 1 to 5 but skips all the even numbers.

```c
#include <stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        // If the number is even...
        if (i % 2 == 0) {
            printf("Skipping even number %d\n", i);
            continue; // Skip to the next iteration (i++)
        }
        // This line is skipped if 'continue' is hit
        printf("Processing odd number %d\n", i);
    }

    return 0;
}
```
**Output:**
``` bash
Processing odd number 1
Skipping even number 2
Processing odd number 3
Skipping even number 4
Processing odd number 5
```

# goto Statement
The goto statement transfers control unconditionally to a labeled statement within the same function. A label is just a name followed by a colon (e.g., myLabel).

> [!IMPORTANT]
> Using goto is strongly discouraged in modern C programming. It can make code confusing, hard to read, and difficult to debug (a problem known as "spaghetti code"). It is almost always better to use if, break, continue, or functions.

**Example:**
```c
#include <stdio.h>
int main() {
    int num = 5;

    if (num < 10) {
        goto less_than_ten; // Jump to the label
    }

    printf("This line will be skipped.\n");

    less_than_ten: // This is the label
    printf("The number is less than 10.\n");

    return 0;
}
```
**Output:**
``` bash
The number is less than 10.
```
