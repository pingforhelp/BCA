# Unit 2: Control Statements
- Decision making statements: if, if else, else if ladder, switch statements.
- Loop control statements: while loop, for loop and do-while loop.
- Jump Control statements: break, continue and goto.

Control Statements allow a programmer to:
- Make decisions based on conditions
- Repeat a block of code multiple times
- Skip, stop or jump to another part of the program
- Control the logical flow and structure of the program

These are divided into **3 major categories**:
1. Decision Making
2. Loop Control
3. Jump Control


# 1. Decision Making Statements
Decision making statements help the program choose what to do based on some condition (true/false).

# If Statement
Executes a block of code if a condition is true.

When condition is true: The block of code inside it executes.  
When condition is false: Nothing happens.

**Syntax:**
```c
if (condition) {
    // Code to be executed if the condition is true
}
```

> [!example]
```c
#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    
    if (n % 5 == 0) {
        printf("Divisible by 5");
    }
    return 0;
}
```
**Output:**
``` bash
Divisible by 5
```

# If-Else Statement
Executes one block of code if a condition is true and another block if the condition is false.

**Used when:** Only two possibilities exist:
1. Condition is true → Run if block
2. Condition is false → Run else block

**Syntax:**
```c
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
```

> [!example]
```c
int x = 3;
if (x > 5) {
    printf("x is greater than 5");
} else {
    printf("x is not greater than 5");
}
```
> [!example]
> Check if number is even or odd
```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);
    
    if (a % 2 == 0) {
        printf("Even");
    } else {
        printf("Odd");
    }
    return 0;
}
```

# If-Else-If Ladder
Tests multiple conditions sequentially and executes the block of code corresponding to the first true condition. ++Used when Multiple conditions needs to  checked.++

**Syntax:**
```c
if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if none of the conditions are true
}
```

> [!example]
```c
int x = 5;
if (x > 10) {
    printf("x is greater than 10");
} else if (x > 5) {
    printf("x is greater than 5");
} else {
    printf("x is not greater than 10 or 5");
}
```

> [!example]
Find grade based on marks
```c
#include <stdio.h>

int main() {
    int marks;
    printf("Enter your marks: ");
    scanf("%d", &marks);
    
    if (marks >= 90) {
        printf("Grade A\n");
    } else if (marks >= 75) {
        printf("Grade B\n");
    } else if (marks >= 50) {
        printf("Grade C\n");
    } else {
        printf("Fail\n");
    }
    return 0;
}
```

**Output:**
``` bash
Enter your marks: 80
Grade B
```
# Nested If Statements
Places an if statement inside another if statement.

**Syntax:**
```c
if (condition1) {
    // Code to be executed if condition1 is true
    if (condition2) {
        // Code to be executed if condition2 is true
    }
}
```

> [!example]
> Check if number is divisible by 2 and 4.
```c
#include <stdio.h>

int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);
    
    if (a % 2 == 0) {
        if (a % 4 == 0) {
            printf("It is divisible by 2 and 4");
        } else {
            printf("It is only divisible by 2");
        }
    } else {
        printf("It is not divisible by 2 and 4");
    }
    return 0;
}
```

**Output:**
``` bash
Enter a number: 24
It is divisible by 2 and 4
```

# Switch Statement

Performs arithmetic operations based on user choice.

**Program Example:**
```c
#include <stdio.h>

int main() {
    int choice;
    int num1, num2, result;
    
    printf("Enter 2 numbers: ");
    scanf("%d %d", &num1, &num2);
    
    printf("Choose an operation:\n");
    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    
    switch(choice) {
        case 1:
            result = num1 + num2;
            printf("%d\n", result);
            break;
            
        case 2:
            result = num1 - num2;
            printf("%d\n", result);
            break;
            
        case 3:
            result = num1 * num2;
            printf("%d\n", result);
            break;
            
        case 4:
            if (num2 == 0) {
                printf("Division by zero is not possible\n");
            } else {
                result = num1 / num2;
                printf("%d\n", result);
            }
            break;
            
        default:
            printf("Invalid choice\n");
    }
    return 0;
}
```

# 2. Iterative & Looping Statements
Iterative and loop statements mean repetition statements. In this, the action is repeated over and again.

There are ==2 types== of iterative statements:
1. Entry Controlled Loop
2. Exit Controlled Loop

# Entry Controlled Loop
In the entry controlled loop, the conditions are tested ++before++ the start of the loop execution. If the conditions are not satisfied, the body of the loop won't be executed.
> [!example]
> for loop, while loop


# Exit Controlled Loop
In the exit controlled loop, the test is performed **at the end** of the body of the loop, and the body is executed unconditionally for the first time.
> [!example]
> do-while loop

---

# While Loop
A while loop is the most straightforward looping structure.

**Syntax:**
```c
while (condition) {
    // Statements
}
```

**Steps:**
1. The condition is checked first
2. If the condition is true, the loop runs
3. If false, the loop doesn't execute even once

> [!example]
> Print 1 to 10 numbers**
```c
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 10) {
        printf("%d\n", i);
        i++;
    }
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
6
7
8
9
10
```

> [!example]
> Factorial of a number
```c
#include <stdio.h>

int main() {
    int a, i = 1;
    int factorial = 1;
    
    printf("Enter a number: ");
    scanf("%d", &a);
    
    while (i <= a) {
        factorial = factorial * i;
        i++;
    }
    
    printf("Factorial of the given number is: %d", factorial);
    return 0;
}
```

**Output:**
``` bash
Enter a number: 5
Factorial of the given number is: 120
```

> [!example]
> Fibonacci Series
```c
#include <stdio.h>

int main() {
    int a = 0, b = 1, next, n;
    int i = 1;
    
    printf("Enter number of terms to print: ");
    scanf("%d", &n);
    
    while (i <= n) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
        i++;
    }
    return 0;
}
```
**Output:**
``` bash
Enter number of terms to print: 5

0 1 1 2 3 
```

# Do-While Loop
Similar to the while loop except that the condition is always executed ++after++ the body of a loop. It is called an **exit controlled loop**.

**Syntax:**
```c
do {
    // Statements
} while (condition);
```

> [!example]
> Print first 100 natural numbers
```c
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d\n", i);
        i++;
    } while (i <= 100);
    return 0;
}
```

**Output:**
``` bash
1
2
3
```

> [!example] 
> Prints 2 table**
```c
#include <stdio.h>

int main() {
    int i = 1;
    
    do {
        printf("%d\n", i * 2);
        i++;
    } while (i <= 10);
    return 0;
}
```

**Output:**
``` bash
2
4
6
8
10
12
14
16
18
20
```

Differences b/w While Loop and Do-While Loop

| While Loop | Do-While Loop |
|------------|---------------|
| Top tested loop | Bottom tested loop |
| Condition is first tested. If condition is true, then the block is executed | It executes the body once, after it checks the condition. If it is true, the body is executed until the condition becomes false |
| Loop won't be executed if the condition is false | Loop is executed at least once even if the condition is false |

# For Loop
A for loop is an **entry controlled loop**. It is used when you know exactly how many times the loop should run. For loop has **3 parts**:
1. Initialization
2. Condition
3. Update (written in one line)

It is the most commonly used loop in C.

> [!note]
> I found a use case for this. Processing images from 1 to x or a custom value.
 
**Syntax:**
```c
for (initialization; condition; update) {
    // Statements
}
```

**Explanation of each part:**
1. **Initialization:** Executed only once before the loop starts 
Example: `int i = 1;`
2. **Condition:** Checking is written here  
Example: `i <= 10`
3. **Update:** Runs after the loop body in each iteration  
Example: `i++` or `i = i + 1`

> [!example]
Print 1 to 10 numbers**
```c
#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 10; i++) {
        printf("%d\n", i);
    }
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
6
7
8
9
10
```

# 3. Jumping/Unconditional Branching Statements

There are ==3 types==:
1. Break
2. Continue
3. Goto

# Break Statement
A break statement terminates the execution of the loop, and the control is transferred to the statement immediately following the loop. The break statement is used to terminate a loop or to exit from a switch.

**When to use:**
- It can be used within for, while, do-while loops
- In case of nested loops, it terminates the control of the inner loop only

**Syntax:**
```c
break;
```
> [!example]
> Breaks when i = 5.
```c
#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 10; i++) {
        printf("%d\n", i);
        if (i == 5) 
      {
      break;
      }
    }
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
```

# Continue Statement
It is used to bypass the remainder of the current pass through a loop. The loop doesn't terminate when a continue statement is used; instead, the remaining loop statements are skipped and the computation proceeds directly to the next pass through the loop.

**Syntax:**
```c
continue;
```

> [!example]
```c
#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 10; i++) {
        if (i >= 5) {
            continue;
        }
        printf("%d\n", i);
    }
    return 0;
}
```

**Output:**
``` bash
1
2
3
4
```

# Goto Statement
The goto statement is used to jump from one line of code to another line without checking any conditions.

**Syntax:**

**Forward Jump:**
```c
goto label;
// statements
label:
// statements
```

**Backward Jump:**
```c
label:
// statements
goto label;
```

> [!example]
```c
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    
    if (a == b)
        goto equal;
    else {
        printf("A and B are not equal");
        exit(0);
    }
    
equal:
    printf("A and B are equal");
    return 0;
}
```
**Output:**
``` bash
```
