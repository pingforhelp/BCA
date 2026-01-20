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
P → Address of x
*P → Value of x

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
