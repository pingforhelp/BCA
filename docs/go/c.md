Q1. Write a program to check whether the given number is Armstrong or not.
``` c
#include <stdio.h>  
#include <math.h>

int main() {  
  int num, digit, temp;  
  int sum = 0 , count = 0;

   printf("Enter a number: ");  
   scanf("%d", &num);

  temp = num;
  while (temp > 0)  
  {  
   temp = temp / 10 ;  
   count++;  
  }
 
  temp = num; 
  while (temp != 0)  
   
  {  
     digit = temp % 10;  
     sum = sum + pow(digit,           
     count);  
     temp = temp / 10;  
       
    }

  if (sum == num) 
{  
  printf("It is Armstrong  number.\n");  
            
}   

   
   else {
   printf("Not Armstrong number.\n");  
    
}

     return 0; 

 }
```


Q2. Write a program to find the sum of individual digits of a positive integer.
``` c
#include <stdio.h>
int main() {  

 int n, sum = 0 , digit;

  printf("Enter a positive integer: ");  
  scanf("%d", &n);

   while(n > 0) 
{  
   digit = n % 10 ;  
   sum = sum + digit;  
   n = n / 10;
   }
   
   printf("Sum of digits = %d", sum);  

 return 0; 
}
```

Q3. Write a program to generate the first n terms of the Fibonacci sequence.
``` c
#include <stdio.h>
#include <math.h>
int main()
 {  

  int n, a = 0 , b = 1 , c,   i;

  printf("Enter number of terms: ");  
  scanf("%d", &n);

  printf("Fibonacci series: ");  
  printf("%d %d ", a, b);

   for(i = 3 ; i <= n; i++) {  
   c = a + b;  
   printf("%d ", c);  
   a = b;  
   b = c;  
   }

   return 0;  
 }
```

Q4. Write a program to find both the largest and smallest number in a list of integer values.
``` c
#include <stdio.h>

int main() 
{  
  int a[50], n, i;  
  int largest, smallest;

   printf("Enter number of   elements: ");  
  scanf("%d", &n);

  printf("Enter elements:\n");  
  for(i = 0 ; i < n; i++)  
  scanf("%d", &a[i]);

largest = smallest = a[0];

  for(i = 1 ; i < n; i++) 
{  
  if(a[i] > largest)  
  largest = a[i];  

  if(a[i] < smallest)  
  smallest = a[i];  
}

printf("Largest number = %d\n", largest);  
printf("Smallest number = %d", smallest);

  return 0;  
 
}
```

# Viva Q&A

UNIT–1: Introduction to Computer Programming

1. What is a computer program?
A computer program is a set of instructions written in a programming language to perform a specific task.

2. What are the types of software?
There are two types:
- System software – manages computer hardware (OS, compiler)
- Application software – used by users (MS Word, Browser)

3. What is a compiler?
A compiler translates the entire high-level program into machine code at once before execution.

4. What is an interpreter?
An interpreter translates and executes the program line by line, making error detection easier.

5. Difference between machine-level, assembly-level, and high-level languages?
- Machine-level: binary (0s and 1s)
- Assembly-level: mnemonics (ADD, SUB)
- High-level: English-like language (C, Java)

6. What is an algorithm?
An algorithm is a finite, step-by-step logical procedure to solve a problem.

7. What is a flowchart?
A flowchart is a graphical representation of an algorithm using symbols.

8. Who developed C language and when?
C was developed by Dennis Ritchie in 1972.

9. What are C tokens?
C tokens are the smallest building blocks of a C program such as keywords, identifiers, constants, and operators.

10. What is formatted and unformatted I/O?
- Formatted I/O uses format specifiers (printf, scanf)
- Unformatted I/O does not use format specifiers (getchar, putchar)

UNIT–2: Control Statements

11. What are control statements?
Control statements determine the flow of execution of a program.

12. What is an if statement?
It executes a block of code when a condition is true.

13. What is if–else statement?
It executes one block if the condition is true and another block if false.

14. What is a switch statement?
Switch is used for multi-way decision making based on a constant value.

15. What is a loop?
A loop is used to repeat a set of statements until a condition is met.

16. Types of loops in C?
- for loop
- while loop
- do–while loop

17. Difference between while and do–while loop?
do–while executes the loop body at least once, even if condition is false.

18. What is break and continue?
- Break exits the loop immediately
- Continue skips current iteration

UNIT–3: Arrays and Strings

19. What is an array?
An array is a collection of same data type elements stored in contiguous memory locations.

20. What is a one-dimensional array?
An array accessed using one index.

21. What is a two-dimensional array?
An array arranged in rows and columns like a matrix.

22. What is a string in C?
A string is an array of characters terminated by a null character (\0).

UNIT–4: Pointers and Functions

23. What is a pointer?
A pointer is a variable that stores the address of another variable.

24. What is pointer arithmetic?
Operations like increment and decrement performed on pointers.

25. What is a function?
A function is a block of code that performs a specific task and improves reusability.

26. What is recursion?
Recursion is a technique where a function calls itself.

27. Difference between call by value and call by address?
- Call by value passes a copy
- Call by address passes actual memory address

28. What are local and global variables?
- Local declared inside a function
- Global declared outside all functions

29. What are storage classes?
Storage classes define the scope, lifetime, and storage location of variables.

UNIT–5: Dynamic Memory, Structures & Files

30. What is dynamic memory allocation?
Allocating memory at runtime using functions like malloc and calloc.

31. What is` malloc()` and `calloc()`?
- `malloc` allocates memory without initialization
- `calloc` allocates memory and initializes it to zero

32. What is `free()`?
`free()` releases dynamically allocated memory.

33. What is a structure?
A structure is a user-defined data type that groups different data types together.

34. What is a union?
A union stores different data types in the same memory location.

35. Difference between structure and union?
- Structure allocates separate memory
- Union shares memory.

36. What is file handling?
File handling allows data to be stored permanently in files.

37. What are file modes in C?
- r read
- w write
- a append
