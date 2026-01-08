# Unit 4. Functions
 - Pointers: Pointer data type, Pointer declaration, initialization, accessing values using pointers. 
- Pointer arithmetic, Pointers and arrays. Function Prototype, definition and calling. - Return statement. Nesting of functions.
- Categories of functions. Recursion (Basic Concept only).
- Parameter Passing by address & by value. Local and Global variables. -
- Storage classes: automatic, external, static and register.

# Pointers
A pointer is a variable that stores address of another variable. Instead of storing value directly, It stores ++where the value is located in memory.++
ex
 ``` c
 int x = 10
 int *p;
 p = &x;
 ```
Here: 
- x stores value of 10.
- p stores the address of x.

# Pointer Declaration
Pointer declaration specifies the type of data the pointer can point to.
Syntax:
``` c
*pointer_name;
```
**ex:**
 ``` c
int *p
char *c
float *f
```

# Pointer Initialization
Pointer initialization means assigning the address of variable to pointer.
**ex:**
``` c
int x = 10
int *p
int *p = &x
```
The address of x gives the address of x now points to X

# Accessing values using pointers
Accessing the values stored at the address using * or *(star) is called **Dereferencing**
``` c
printf("%d", *p);
```
- Address of x
- *p -> value of x

# Modifying value using pointer :-
``` c
*p = 20;
printf("%d", *p);
```
# Pointers Arithmetic
Pointer Arithmetic allows pointer to pointer arithmetic move through memory location
**Operation allowed:**
1. Increment
2. Decrement
3. Addition (p+n)
4. Subtraction (p-n)

# Difference b/w two arrays
```c
int arr[5] = {5, 10, 15, 20, 30};
*p = arr;
printf("%d", *p);
```
 

-> relationship :-
  (i) array name acts as pointer to the first element
  (ii) `arr` is `arr[0]`

ex:- 
```c
int arr[5] = {10,11,12,20,30};
int *p = arr;
```

Accessing elements :-
-> Array & 2 = 

# Advantages of using pointers :-
-> efficient memory usage
-> faster program execution
-> used in dynamic memory allocation
-> useful in arrays and functions
-> enables call by reference.

# Functions :-

# Function Prototype :-
what is function ?
function is a block of code that performs a specific task and reused many times.

what is function ?
function prototype is a declaration given before it used. 
The compiler - (i) What is the name of function?
                (ii) What is 
$$
\text{return type}
$$
?
                (iii) What is 
$$
\text{arguments}
$$
?
# Why do we need function prototype?
A) (i) Compiler knows the function exists
   (ii) Compiler checks number and type of arguments
   (iii) Allowing writing a function definition after `main()`

## Syntax :-
`return-type function-name (data_type data_type)`

## Ex :-
```c
#include <stdio.h>
#include <conio.h>

int sum(int x, int y)
int main()
{
    int x = 20, y = 30;
    int c = 0;
    c = sum(x, y);
    printf("%d", c);
}

return int sum(int a, int b)
{
    return a + b;
}
```

## Function definition :-
-> Function definition contains –
   (i) return type
   (ii) function name
   (iii) parameter
   (iv) actual statement (logic)

## Syn :-
```c

```
## Ex-
```cpp
int Multiply (int a, int b)
{
  int result;
  result = a * b;
  return result;
}
```

## Function Calling 
-> Calling a function means asking the function to execute - How
function calling works internally:
  (i) Main function passes the function
  (ii) Control goes to the function
  (iii) Function executes statement
  (iv) Return value goes back to main function
  (v) Program Continues

## Return Statement
-> (i) Sends a value back to the calling function
-> (ii) Ends function execution (a function)

## IMPORTANT RULES
-> used only in NON-void functions
-> only one value can be returned
-> code after `return` is not executed

## Nesting of functions
When one function calls another function, 
functions - allows calling, not defining inside another function.
# C program
```c
#include <stdio.h>

int main() {
    void winay() {
        printf("Hello world");
    }
    int main() {
        char a(l);
        return 0;
    }
}
```

## Categories of functions:
1. Library functions
2. User defined function
3. Based on return value & arguments

### *Library functions:*
(i) predefined
(ii) Already available in headerfiles

ex: `printf()` -> output
`scanf()` -> input
`strlen()` -> 
`sqrt()` -> 

### *User defined function:*
(i) created by programmer
(ii) Improve code readability
(iii) reusable
# Work is done inside the function

## Syntax

```
void function_name(void)
{
  Statements;
}
```

## C++

```c++
#include <stdio.h>
void great(void)
{
  printf("Welcome");
}

int main()
{
  great();
  return 0;
}
```

## ii) Arguments with return value

-> Function does not take any input
-> Function returns an integer value

## C++

```c++
#include <stdio.h>
int area(int a, int b)
{
  printf("%d + %d + %d", a, b);
  return a + b;
}

int main()
{
  int a = 5, b = 10;
  int c = area(a, b);
  printf("%d\n", c);
  return 0;
}
```

## Mathematical Equation

$$area = a + b$$
# Functions

*   function doesn't take arguments
*   returns an integer value
*   returned value is used in Main function

## Arguments but no return value

*   function receives value
*   function do not return a value
*   function result is displayed inside the function

```c++
void function-name(data type, data-type2) {
    Statement;
}
```

## Example

```c++
int area(int x, int y) {
    printf("%.0f", x*y);
}

int main() {
    int a = 10;
    int b = 20;
    area(a, b);
    return 0;
}
```

# Recursion

*   Recursion is a technique where a function calls itself to solve a problem
(ii) It is used when a problem can be divided into smaller similar problems.

$$f(n) = f(n-1) + n$$
## (i) Recursive call = function call itself

**(i) Why base condition is important?**
A) Without base condition
(ii) function keeps calling itself
(iii) Causes infinite recursion
(iv) that leads to stack overflow error

## Parameter Passing

1) Call by Value
2) Call by Address

$$ f(n) = \begin{cases} 1 & \text{if } n = 0 \\ n * f(n-1) & \text{if } n > 0 \end{cases} $$

$$ f(n) = \begin{cases} 1 & \text{if } n = 0 \\ n * f(n-1) & \text{if } n > 0 \end{cases} $$

$$ f(n) = \begin{cases} 1 & \text{if } n = 0 \\ n * f(n-1) & \text{if } n > 0 \end{cases} $$
# pointers and functions

* pointer <sup>o</sup>
    - A pointer is a variable that stores address of another variable.
    - Instead of storing value directly, It stores where the value is located in memory.

    **ex:**
    ```
    int x = 10
    int *p;
    p = &x;
    ```
    - Here x stores value of 10
    - p stores the address of x

* pointer declaration <sup>o</sup>
    - pointer declaration specifies the type of data the pointer can point to.

    **Syntax**
    ```
    *pointer_name;
    ```

    **ex:**
    ```
    int *p
    char *c
    float *f
    ```

pointer initialization<sup>o</sup>
- pointer initialization means assigning the address of variable to pointer.

**ex:**
```
int x = 10
int *p
int *p = &x
```
- the address of x gives the address of x
# now points to X

## accessing values using pointers :-
-> accessing the values stored at the address using * or *(star) is called **Dereferencing**

```
printf("%d", *p);
```

-> p -> Address of x
-> *p -> value of x

## Modifying value using pointer :-
```
*p = 20;
printf("%d", *p);
```

## pointers Arithmetic :-
-> pointer Arithmetic allows pointer to pointer arithmetic move through memory location

**Operation allowed :-**
(i) increment
(ii) Decrement
(iii) Addition (p+n)
(iv) Subtraction (p-n)

## Difference b/w two arrays :-

```c++
int arr[5] = {5, 10, 15, 20, 30};
*p = arr;
printf("%d", *p);
```
# Pointers & Arrays 

-> relationship :-
  (i) array name acts as pointer to the first element
  (ii) `arr` is `arr[0]`

ex:- 
```c
int arr[5] = {10,11,12,20,30};
int *p = arr;
```

# Accessing elements :-
-> Array & 2 = 

# Advantages of using pointers :-
-> efficient memory usage
-> faster program execution
-> used in dynamic memory allocation
-> useful in arrays and functions
-> enables call by reference.

# Functions :-

# Function Prototype :-
what is function ?
function is a block of code that performs a specific task and reused many times.

what is function ?
function prototype is a declaration given before it used. 
The compiler - (i) What is the name of function?
                (ii) What is 
$$
\text{return type}
$$
?
                (iii) What is 
$$
\text{arguments}
$$
?
# Why do we need function prototype?
A) (i) Compiler knows the function exists
   (ii) Compiler checks number and type of arguments
   (iii) Allowing writing a function definition after `main()`

## Syntax :-
`return-type function-name (data_type data_type)`

## Ex :-
```c
#include <stdio.h>
#include <conio.h>

int sum(int x, int y)
int main()
{
    int x = 20, y = 30;
    int c = 0;
    c = sum(x, y);
    printf("%d", c);
}

return int sum(int a, int b)
{
    return a + b;
}
```

## Function definition :-
-> Function definition contains –
   (i) return type
   (ii) function name
   (iii) parameter
   (iv) actual statement (logic)

## Syn :-
```c

```
## Ex-
```cpp
int Multiply (int a, int b)
{
  int result;
  result = a * b;
  return result;
}
```

## Function Calling 
-> Calling a function means asking the function to execute - How
function calling works internally:
  (i) Main function passes the function
  (ii) Control goes to the function
  (iii) Function executes statement
  (iv) Return value goes back to main function
  (v) Program Continues

## Return Statement
-> (i) Sends a value back to the calling function
-> (ii) Ends function execution (a function)

## IMPORTANT RULES
-> used only in NON-void functions
-> only one value can be returned
-> code after `return` is not executed

## Nesting of functions
When one function calls another function, 
functions - allows calling, not defining inside another function.
# C program
```c
#include <stdio.h>

int main() {
    void winay() {
        printf("Hello world");
    }
    int main() {
        char a(l);
        return 0;
    }
}
```

## Categories of functions:
1. Library functions
2. User defined function
3. Based on return value & arguments

### *Library functions:*
(i) predefined
(ii) Already available in headerfiles

ex: `printf()` -> output
`scanf()` -> input
`strlen()` -> 
`sqrt()` -> 

### *User defined function:*
(i) created by programmer
(ii) Improve code readability
(iii) reusable
# Work is done inside the function

## Syntax

```
void function_name(void)
{
  Statements;
}
```

## C++

```c++
#include <stdio.h>
void great(void)
{
  printf("Welcome");
}

int main()
{
  great();
  return 0;
}
```

## ii) Arguments with return value

-> Function does not take any input
-> Function returns an integer value

## C++

```c++
#include <stdio.h>
int area(int a, int b)
{
  printf("%d + %d + %d", a, b);
  return a + b;
}

int main()
{
  int a = 5, b = 10;
  int c = area(a, b);
  printf("%d\n", c);
  return 0;
}
```

## Mathematical Equation

$$area = a + b$$
# Functions

*   function doesn't take arguments
*   returns an integer value
*   returned value is used in Main function

## Arguments but no return value

*   function receives value
*   function do not return a value
*   function result is displayed inside the function

```c++
void function-name(data type, data-type2) {
    Statement;
}
```

## Example

```c++
int area(int x, int y) {
    printf("%.0f", x*y);
}

int main() {
    int a = 10;
    int b = 20;
    area(a, b);
    return 0;
}
```

# Recursion

*   Recursion is a technique where a function calls itself to solve a problem
(ii) It is used when a problem can be divided into smaller similar problems.

$$f(n) = f(n-1) + n$$
## (i) Recursive call = function call itself

**(i) Why base condition is important?**
A) Without base condition
(ii) function keeps calling itself
(iii) Causes infinite recursion
(iv) that leads to stack overflow error

## Parameter Passing

1) Call by Value
2) Call by Address

$$ f(n) = \begin{cases} 1 & \text{if } n = 0 \\ n * f(n-1) & \text{if } n > 0 \end{cases} $$

$$ f(n) = \begin{cases} 1 & \text{if } n = 0 \\ n * f(n-1) & \text{if } n > 0 \end{cases} $$

$$ f(n) = \begin{cases} 1 & \text{if } n = 0 \\ n * f(n-1) & \text{if } n > 0 \end{cases} $$
# pointers and functions

* pointer <sup>o</sup>
    - A pointer is a variable that stores address of another variable.
    - Instead of storing value d
