# Unit 4. Functions
 - Pointers: Pointer data type, Pointer declaration, initialization, accessing values using pointers. 
- Pointer arithmetic, Pointers and arrays. Function Prototype, definition and calling. - Return statement. Nesting of functions.
- Categories of functions. Recursion (Basic Concept only).
- Parameter Passing by address & by value. Local and Global variables. -
- Storage classes: automatic, external, static and register.

# Pointers
A pointer is a variable that stores addresses of another variable. Instead of storing value directly, it stores where the value is located in memory.
ex:
``` c
int x = 10
int *p;
p = &x;
```
Here, x stores value of 10.
P stores the address of x.

# Pointer declaration
Pointer declaration specifies the type of data the pointer can point to.
Syntax:
``` c
*pointer_name;
```
ex:
```c
int *p
char *c
float *f
```
# Pointer initialization
Pointer initialization means assigning the address of a variable to a pointer.
ex:
``` c
int x = 10
int *p
p = &x
```
The address of x gives the address of x.

# Accessing values using pointers :-
Accessing the values stored at the address using `*` (star) is called Dereferencing.
```c
printf("%d", *p);
```
P → Address of x.
*P → Value of x.

# Modifying value using pointer :-
```c
*p = 20;
printf("%d", *p);
```
# Pointer Arithmetic
Pointer Arithmetic allows pointers to perform arithmetic move through memory location.

Operation allowed:
(i) Increment
(ii) Decrement
(iii) Addition (P+n)
(iv) Subtraction (P-n)

Difference between two arrays
```c
int arr[5] = {5, 10, 15, 20, 30};
*p = arr;
printf("%d", *p);
```
# Pointers & Arrays 
Relationship:
(i) Array name acts as pointer to the first element.
 (ii) `arr` is `arr[0]`.
ex: 
```c
int arr[5] = {10,11,12,20,30};
int *p = arr;
```
Accessing elements:
Array & 2 = 

Advantages of using pointers:
- Efficient memory usage
- Faster program execution
- Used in dynamic memory allocation
- Useful in arrays and functions
- Enables call by reference.

# Functions- 
What is function?
Function is a block of code that performs a specific task and reused many times.

Why is function?
Function prototype is a declaration given before it used. 
The compiler:
(i) What is the name of function?
ii) What is 

8) Why do we need function prototypes?
A) (i) Compiler knows the function exists.
(ii) Compiler checks number and type of arguments.
(iii) Allowing writing a function definition after `main()`

Syntax:-
``` c
`return-type function-name (data_type data_type)`
```
ex:
```c
#include <stdio.h>
#include <conio.h>
int sum(int x, int y)
int main()
{
    int x = 20, y = 30;
    int c = 0;
    c = sum(x, y);
    printf("c=%d\n", c);
    return 0;
}

int sum(int a, int b)
{
    return a + b;
}
```

Function definition

Function definition contains:
1. Return type
2. Function name
3. Parameter
4. Actual statement (logic)

Syn:-
```c
int Multiply (int a, int b)
{
    int result;
    result = a * b;
    return result;
}
```

Function Calling
Calling a function means asking the function to execute. How function calling works internally:
(i) Main function passes the function
(ii) Control goes to the function
(iii) Function executes statement
(iv) Return value goes back to main function
(v) Program continues

**Return Statement**
(i) Sends a value back to the calling function
(ii) Ends function execution

**Important Rules**
- Used only in non-void functions
- Only one value can be returned
- Code after `return` is not executed


Nesting of Functions

When one function calls another function, it allows calling, not defining, inside another function. This is called nesting of functions.
```c
#include <stdio.h>
#include <math.h>
int main()
{
  printf("Hello world!");
  char arr[10];
  return 0;
}
```

Categories of functions:
1. Library functions
2. User defined function
3. Based on return value & arguments

Library functions
1. Predefined
2. Already available in headerfiles

e.g.,
``` c
printf() -> output
scanf() -> input
strlen() -> 
sqrt() ->
```
User defined function
1. Created by programmer
2. Improve code readability
3. Reusable
4. Function doesn't take arguments
5. Returns an integer value
6. Returned value is used in main function

Arguments but no return value
- Function receives value
- Function do not return a value
- Function result is displayed inside the function

```c
void function_name(data_type, data_type2) {
    Statement;
}
```

```c
int area(int x, int y) {
    printf("%.2f", x*y);
}

int main() {
    int a = 10, b = 20;
    area(a, b);
    return 0;
}
```

Recursion is a technique where a function calls itself to solve a problem.

(iii) It is used when a problem can be divided into smaller similar problems.(ii) Recursive call = function call itself

(i) Why base condition is important?
   a) Without base condition
   b) Function keeps calling itself
   c) Causes infinite recursion
   d) That leads to stack overflow error

Parameter passing
1. Call by value
2. Call by address

``` c
{
  int x = 1;
  function(x);
}

// function definition
void function(int a) {
  a = a + 10;
  printf("%d", a);
}
```

``` c
{
  int x = 1;
  function(&x);
}

// function definition
void function(int *a) {
  *a = *a + 10;
  printf("%d", *a);
}
```

