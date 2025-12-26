
# Unit-3 Derived Data Types in C
- Arrays: One Dimensional arrays - Declaration, Initialization and Memory representation; Two Dimensional arrays -Declaration, Initialization and Memory representation.
- Strings: Declaring & Initializing string variables; String handling functions, Character handling functions.

# Array
An array is a collection or group of elements of the same data types that share a common name and stored in a contiguous memory locations.

An Array can store many no. of elements depend on the given size.

e.g.,
``` c
a[5] = {15, 20, 25, 30, 35}
0   1   2   3   4
```
``` c
a[0] = 15, a[1] = 20, … a[4] = 35
```
# Types of Arrays
1) One dimensional Array  
2) Two dimensional Array  
3) Multi dimensional Array  

1. One dimensional Array- The data are organised linearly in only one direction.
2. Two dimensional Array- Two dimensional arrays can have only two dimensions & data is shown in the form of matrices.
3. Multidimensional- It can have 3 or more dimensions. In 3 dimensional array data can be organised in cube. Cube consist of numerous no. of two dimensional arrays.

# One Dimensional

Declaration of Arrays
C provides two different types of arrays based on their size.

1. Fixed length array In fixed length array the size of the array is known when the program is written. An array should be declared before using it in our program.

Syntax:
``` c
data_type  Array_name[size of array];
```
e.g.,
``` c
int a[10];
```
2. Variable length array In variable length array the size of the array is not known when the program is written. Until now we have used an array that had constant size.
e.g.,
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

1) Compile time initialization In this we can assign values to array directly in the program using following syntax.
``` c
data_type  Array_name[size] = {list of values};
```

``` bash
int a[5] = {1, 2, 3, 4, 5};
0  1  2  3  4
```
> [!NOTE]
> The assignment of values start from 0 position.

Examples

1. Basic Initialization
``` c
int a[5] = {1, 2, 3, 4, 5};

```
2. Initialize without size
``` c
int a[] = {1, 2, 3, 4, 5};
```
3. Partial Initialization
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

2. Run time initialization In this we have to assign values during run time.

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
# Searching
`a[6] = {5, 10, 20, 30, 40, 50}`

There are two types of searching:
1. Linear search  
2. Binary search  

Linear Search To check element one by one.

Steps
1. It checks each element one by one from beginning of the array.  
2. Until the desired element (key) is found.  
3. Or the array ends.  

That’s why it is also called **sequential search**.

When to use
1. Small arrays  
2. Unsorted arrays  
3. When data is random  
4. Easy and fast to write  

Example: Write a C program to implement linear search
```c
#include <stdio.h>

int main()
{
    int a[5] = {5,10,15,40,30};
    int key, i, found = 0;

    printf("Enter element to be searched:");
    scanf("%d", &key);

    for(i = 0; i < 5; i++)
    {
        if(a[i] == key)
        {
            found++;
            break;
        }
    }

    if(found == 1)
        printf("Element found");
    else
        printf("Element not found");

    return 0;
}
````
Output:
``` bash
Element not found
```
# Sorting
Sorting is a process of arranging the elements of an array in a specific order.

Most commonly:
1. Ascending order (S to B)
2. Descending order (B to S)

Types
1. Internal
2. External

Internal
1. Bubble
2. Insertion
3. Selection
4. Heap sort

# External
Extended storage used like USB, hard disk, etc.

1. Merge sort

Bubble Sort It is a sorting technique that repeatedly compares adjacent elements and swaps them if they are in wrong order.
Example
```c
#include <stdio.h>
int main()
{
    int a[5] = {10,5,1,3,15};
    int i, j, n = 5, temp;

    for(i = 0; i < n - 1; i++)
    {
        for(j = 0; j < n - 1; j++)
        {
            if(a[j] > a[j+1])
            {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    printf("Sorted elements are:\n");
    for(i = 0; i < n; i++)
        printf("%d\t", a[i]);

    return 0;
}
```
Output:
``` bash
1 3 5 10 15
```
Updating (Changing an existing element) Change the value stored at a certain index.
Example
```c
#include <stdio.h>
int main()
{
    int a[6] = {5,10,15,20,30,50};
    int n = 6, i;

    a[3] = 25;

    printf("Updated array is:\n");
    for(i = 0; i < n; i++)
        printf("%d\t", a[i]);

    return 0;
}
```
Output:
``` bash
5 10 15 25 30 50
```
# 2D Arrays
A 2D array is an array of rows and columns.
It looks like a table or matrix.

Example
``` bash
1  2  3
4  5  6
```
> [!FUN]
> Rows = 2, Columns = 3

Declaration
``` c
data_type array_name[rows][columns]
```
Example
```c
int a[2][3];
float b[2][3];
```
Meaning: `a[2][3]` has 2 rows and 3 columns and can store 6 elements.

Index Range
- Row index → 0 to rows − 1
- Column index → 0 to columns − 1

# Initialization of 2D Arrays
You can initialize a 2D array in two ways:
1. Compile-time initialization
2. Run-time initialization

Compile-Time Initialization
Done when the array is declared. Values are fixed in the source code.
```c
int a[2][3] = {{1,2,3},{4,5,6}};
```
Row-wise Initialization
```c
int a[2][3] = {1,2,3,4,5,6};
```
Run-Time Initialization
```c
#include <stdio.h>
int main()
{
    int a[3][4];
    int i, j;

    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 4; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }

    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 4; j++)
        {
            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```
Output:
``` bash
1  2  3  4
5  6  7  8
9 10 11 12
```
# Memory Representation of 2D Arrays 
In C, 2D arrays are stored in **row-major order**. All elements of row (0) are stored first, then row (1), and so on.

Example

`a[3][3]`
| Element | Value | Address |
| ------- | ----- | ------- |
| a[0][0] | 10    | 1000    |
| a[0][1] | 20    | 1004    |
| a[0][2] | 30    | 1008    |
| a[1][0] | 40    | 1012    |
| a[1][1] | 50    | 1016    |
| a[1][2] | 60    | 1020    |
| a[2][0] | 70    | 1024    |
| a[2][1] | 80    | 1028    |
| a[2][2] | 90    | 1032    |

---

# Strings in C

A string in C is a 1D array of characters that ends with a null character (`'\0'`).

### Example

```
VINAY\0
```

### Declaring String Variables

```
char string_name[size];
```

Example:

```c
char name[20];
```

---

Initialization of String Variable

Strings can be initialized in two ways:
1. Compile-Time Initialization
Using double quotes `" "`.
```c
char name[20] = "VINAY";
```
This automatically adds the null character (`'\0'`) at the end.

Another method:
```c
char name[20] = {'V','I','N','A','Y'};
```
2. Run-Time Initialization Using `scanf`.
```c
char name[20];
scanf("%s", name);
```
String Program (Compile-Time)
```c
#include <stdio.h>
int main()
{
    char name[20] = "Vinay";
    printf("Your name is: %s", name);
    return 0;
}
```
Output:
``` bash
Your name is: Vinay
```
String Program (Run-Time)
```c
#include <stdio.h>
int main()
{
    char name[20];
    printf("Enter your name:");
    scanf("%s", name);
    return 0;
}
```
Output:
``` bash
Enter your name: Vinay
```
# Standard Library String Functions
1. The C library supplies several string handling functions.
2. ANSI C uses `string.h` header file to provide the prototypes.
3. To use these functions you must `#include`:
```c
#include <string.h>
```

# `strlen()` – Length of String
Finds number of characters before null character (`'\0'`).

# `strcat()` – Join Two Strings
Appends source string to the end of destination string.

```c
#include <stdio.h>
#include <string.h>
int main()
{
    char s1[] = "Hello";
    char s2[] = "World";
    char result[20];

    strcpy(result, s1);
    strcat(result, s2);

    printf(result);
    return 0;
}
```
Output:
``` bash
HelloWorld
```
# `strcpy()` – Copy One String to Another
Copies the content of source string into destination string including null character (`'\0'`).

String Comparison and Manipulation Functions in C


# `strcmp()` – Compare Two Strings
`strcmp()` compares two strings **character by character**.
Return Values
1. `0`  → Strings are equal  
2. `< 0` → First string is smaller than second string  
3. `> 0` → First string is greater than second string  
Example Program
```c
#include <stdio.h>
#include <string.h>

int main()
{
    char s1[50], s2[50];

    printf("Enter first string:\n");
    gets(s1);

    printf("Enter second string:\n");
    gets(s2);

    if (strcmp(s1, s2) == 0)
    {
        printf("Equal");
    }
    else
    {
        printf("Not equal");
    }

    return 0;
}
````
# `strrev()` – Reverse a String
This function reverses a string. The first character becomes the last, the second becomes the second last, and so on.
> [!IMPORTANT]
> `strrev()` is **not part of standard C**, but works in some compilers (like Turbo C SO FUN WITH THAT WHILE I CHILL ON "MODEL IDE").

Example Program
```c
#include <stdio.h>
#include <string.h>
int main()
{
    char s1[50];

    printf("Enter string:\n");
    gets(s1);

    printf("Reverse string is:\n");
    printf("%s", strrev(s1));

    return 0;
}
```
Output:
``` bash
Input : 12345
Output: 54321
```
# `strupr()` – Convert String to Uppercase
This function converts all characters of a string into **uppercase letters**.
> [!IMPORTANT]
> ⚠️ `strupr()` is **not part of standard C**, but works in some compilers (like Turbo C SO FUN WITH THAT WHILE I CHILL ON "MODEL IDE").

Example Program
```c
#include <stdio.h>
#include <string.h>
int main()
{
    char s1[50];

    printf("Enter string:\n");
    gets(s1);

    printf("Uppercase string is:\n");
    printf("%s", strupr(s1));

    return 0;
}
```
# `strlwr()` – Convert String to Lowercase
This function converts all characters of a string into **lowercase letters**.
> [!IMPORTANT] 
>  `strlwr()` is **non-standard** and may not work on all compilers.

Example Program
```c
#include <stdio.h>
#include <string.h>
int main()
{
    char s1[50];

    printf("Enter string:\n");
    gets(s1);

    printf("Lowercase string is:\n");
    printf("%s", strlwr(s1));

    return 0;
}
```
