
# Unit-3 Derived Data Types in C
# Array
An array is a collection or group of elements of the same data types that share a common name and stored in a contiguous memory locations.

An Array can store many no. of elements depend on the given size.

**Ex:**
``` c
a[5] = {15, 20, 25, 30, 35}
0   1   2   3   4

```

a[0] = 15, a[1] = 20, … a[4] = 35

# Types of Arrays
1) One dimensional Array  
2) Two dimensional Array  
3) Multi dimensional Array  

# 1 One dimensional Array
The data are organised linearly in only one direction.
# 2 Two dimensional Array
Two dimensional arrays can have only two dimensions & data is shown in the form of matrices.
# 3 Multidimensional
It can have 3 or more dimensions. In 3 dimensional array data can be organised in cube. Cube consist of numerous no. of two dimensional arrays.

# One Dimensional

# Declaration of Arrays
C provides two different types of arrays based on their size.

# 1) Fixed length array
In fixed length array the size of the array is known when the program is written. An array should be declared before using it in our program.

Syntax:
``` c
data_type  Array_name[size of array];
```

**Eg:**
``` c
int a[10];
```
# 2) Variable length array
In variable length array the size of the array is not known when the program is written. Until now we have used an array that had constant size.

Ex:
``` c
int n;        => 30
scanf("%d", &n);
int a[n];     => a[30];
```

# Storing Values in Array
In the declaration we just allocated space for the elements on those locations are empty. To store values in the array we have to follow either of the below ways.
- Initialization  
- Inputting values  
- Assigning values  

# Initialization of Arrays
After declaring array it should be initialized with some values. Initialization of Array can be done in two ways.

#1) Compile time initialization
In this we can assign values to array directly in the program using following syntax.

``` c
data_type  Array_name[size] = {list of values};
```
Ex:
``` bash
int a[5] = {1, 2, 3, 4, 5};
0  1  2  3  4
```
> [!NOTE]
> The assignment of values start from 0 position.

Examples
1) Basic Initialization
``` c
int a[5] = {1, 2, 3, 4, 5};

```
2) Initialize without size
``` c
int a[] = {1, 2, 3, 4, 5};
```
3) Partial Initialization
``` c
int a[5] = {1, 2};

```
``` c
int a[5] = {10, 20, 2, 4, 7};

for(i = 0; i < 5; i++)
{
printf("%d\t", a[i]);
}
return 0;
```

Output:
``` bash
10  20  2  4  7
```

2) Run time initialization
In this we have to assign values during run time.

Write a C program to print the values assigned at the time of compilation time.
``` c
#include <stdio.h>

int main()
{
int i, a[5];
printf("Enter Array Values:");

for(i = 0; i < 5; i++)   // store
{
    scanf("%d", &a[i]);
}

for(i = 0; i < 5; i++)   // print
{
    printf("%d\t", a[i]);
}

return 0; 
}
```
Output:
``` bash

1
2
3
4
5

1   2   3   4   5
```
