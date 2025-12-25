# Unit 3. Derived data types in C
- Arrays: One Dimensional arrays - Declaration, Initialization and Memory representation Two Dimensional arrays -Declaration, Initialization and Memory representation. 
- Strings: Declaring & Initializing string variables; String handling functions, Character handling functions.


# Arrays
An array is a collection and group of elements of the same data type that share a common name and are stored in contiguous memory locations. ++An array can store many elements depending on the given size.++

**Example:**
```c
int a[5] = {15, 20, 25, 30, 35};
```

**Array indexing:**
- `a[0] = 15`
- `a[1] = 20`
- `a[2] = 25`
- `a[3] = 30`
- `a[4] = 35`


# Types of Arrays
1. **One Dimensional Arrays** - Data is organized linearly in only one direction
2. **Two Dimensional Arrays** - Can have only two dimensions, data is shown in the form of matrices
3. **Multidimensional Arrays** - Can have 3 or more dimensions. In 3D arrays, data can be organized in cubes

---

# One Dimensional Arrays
C provides two types of arrays based on their size:

**1. Fixed Length Array** In fixed length arrays, the size of the array is known when the program is written. An array should be declared before using it in our program.

**Syntax:**
```c
data_type array_name[size_of_array];
```

> [!example]
```c
int a[10];
```

# 2. Variable Length Array
In variable length arrays, the size of the array is not known when the program is written.

> [!example]
```c
int n;
scanf("%d", &n);  // User enters 30
int a[n];  // a[30]
```
# Initialization of Arrays
After declaring an array, it should be initialized with some values. Initialization can be done in ==2 ways.==

#### 1. Compile Time Initialization

In this, we can assign values to the array directly in the program.

**Syntax:**
```c
data_type array_name[size] = {list of values};
```

> [!example]
> Basic Initialization:
```c
int a[5] = {1, 2, 3, 4, 5};
```

**Initialize without size:**
```c
int a[] = {1, 2, 3, 4, 5};
```

**Partial Initialization:**
```c
int a[5] = {1, 2};  // Remaining elements are initialized to 0
```

**Program Example:**
```c
#include <stdio.h>

int main() {
    int a[5] = {10, 20, 2, 4, 7};
    int i;
    
    for (i = 0; i < 5; i++) {
        printf("%d\t", a[i]);
    }
    return 0;
}
```

**Output:**
``` bash
10    20    2    4    7
```

2. Run Time Initialization In this, we have to assign values during runtime.

example
```c
#include <stdio.h>

int main() {
    int i, a[5];
    
    printf("Enter Array Values: ");
    for (i = 0; i < 5; i++) {
        scanf("%d", &a[i]);
    }
    
    printf("Array elements are: ");
    for (i = 0; i < 5; i++) {
        printf("%d\t", a[i]);
    }
    return 0;
}
```

**Output:** 
``` bash
Enter Array Values: 1 2 3 4 5
Array elements are: 1    2    3    4    5
```
# Array elements are stored in (contiguous) memory -

## ex:
`int a[5] = {5, 10, 15, 20, 25}`

## Conceptually in memory:
i) index a[0], a[5]
ii) Value 5, 10
iii) Address 1000, 1004

# * operation performed on array arrays :-

## 1) Traversal (accessing each elements) :-
Traversal means visiting each element of the array one by one.

## ex- 
```c
#include <stdio.h>
int main() {
    int a[5] = {10, 20, 30, 40, 50};
    int i;
    for (i=0; i<5; i++)
    {
        printf ("%d\n", a[i]);
    }
}
```

## 2) Insertion :-
-> Insertion means adding a new element in a array.
ex:- write a program to insert an elmt.

## 3) Deletion :-
-> Deletion means removing an element & shifting the remaining elements to left.
ex :- #include

$$
\begin{aligned}
& a[i] = a[i+1] \\
& a[i+1] = a[i+2] \\
& \vdots \\
& a[n-1] = 0
\end{aligned}
$$
# 4) Searching:-
`arr` = \[5 10 20 30 40 50]

They are two types of Searching
1) Linear search
2) Binary search

## 1) Linear Search: To check element one by one

**Steps:-**
1) It checks each element one by one from beginning of the array.
2) Until the desired element (key) is found.
3) or the array ends.

That's why it is also called as sequential search.

**When to use:**
1) Small arrays
2) Unsorted arrays
3) When data is random
4) Easy and fast to write

**Ex: Write a C program to implement linear search**

```c
#include <stdio.h>
int main() {
    int a[5] = {5,10,50,40,30};
    int key, i, found = 0;
    printf("Enter element to be search: ");
    scanf("%d", &key);
    for(i=0; i<5; i++) {
        if(a[i] == key) {

        }
    }
}
```
{
  found ++;
  break;
}
}
if (found == 1)
{
  printf("Element found");
}
else
{
  printf("Element Not found");
}
return 0;
}
output:- 4
Element not found. (+10 - [-])

## Sorting:- 
Sorting is a process of arranging the elements of an array in a specific order most commonly,

1) Ascending order (A to B)
2) Descending order (B to S)

## Types
1) Internal
2) External

## Internal:-
1) Bubble
2) Insertion
3) Selection
4) Heap Sort

## External:- 
extended storage used like Us B, Hard disk etc...
1) Merge 90% -> merge.
# Bubble Sort

It is a sorting technique that repeatedly compare to adjacent elements & if swaps them if they are in wrong order.

```c++
#include <stdio.h>

int main() {
    int a[5] = {10, 5, 13, 15, 3};
    int i, j, n = 5, temp;

    for(i=0; i<n-1; i++) {
        for (j=0; j<n-1-i; j++) {
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    printf("Sorted elements are:-\n");
    for (i=0; i<n; i++) {
        printf("%d ", a[i]);
    }
}
```

Output: 1 3 5 10 15

## Updating (Changing an existing elements)- change the value stored at a certain index

ex:- 

```c++
#include <stdio.h>

int main() {
    int a[6] = {5, 10, 15, 20, 30, 50};
    int n = 6, i;
    a[3] = 25;
}
```
```cpp
Printf("Plated array is - \n");
for (i=0; i<n; i++) {
    printf("%d\t", A[i]);
}
return 0;
```

Output: 8 10 15 25 30 50

## 2D Arrays:
A 2D array is an array of rows & columns. It looks like a table or matrix.

Ex:-
```
1 2 3 R2;
4 5 6 C->3;
```

## Declaration:
`data - type array_name (rows[columns])`

Ex:-
`int a[2][3];`
`float b[2][3];`

meaning: 1) `a[2][3]` has 2 rows, 3 columns that can store 6 elements.

## Index range:
*   Row Index -> 0 to rows-1
*   Column Index -> 0 to columns-1
# Initialization of 2D Arrays

You can initialize a 2D array in 2 ways.
1) Compile - Time initialization
2) Run - Time initialization

Compile - Time initialization? It is done when the array is declared. The values are fixed in the source code.
ex:- `int a[2][3] = {{1,2,3}, {4,5,6}}`
&rarr; fully initialization

* Row-wise initialization?
ex:- `int a[2][3] = {1,2,3, 4,5,6}`

Run - Time initialization:

```c
#include <stdio.h>
int main() {
    int a[3][3];
    int i,j;
}
```
for(i=0, i<r, i++){
    for(j=0, j<c, j++){
        Scan 1 ("%d", &a[i][j]);
    }
}

for(i=0, i<3, i++){
    for(j=0, j<4, j++){
        printf("%d ", a[i][j]);
    }
}

3
3
return 0;
3
Output:- 1 2 3 4
        5 6 7 8
        9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12

-Memory Representation of 2D Arrays:-

In C, 2D arrays are Stored in row major order-
All elements of Row (0) are Stored first and then
Move to Row (1) and so on ---

ex:- a[3][3] = 

|   | 1000 | 1004 | 1008 |
|---|---|---|---|
| 0 | 16 | 20 | 24 |
| 1 | 1012 | 1016 | 1020 |
| 2 | 40 | 50 | 60 |
|   | 1024 | 1028 | 1032 |
|   | 76 | 80 | 90 |
|   | 0 | 1 | 2 |
# Memory Layout :-

| Element | Value | Address |
|---|---|---|
| a[0][0] | 10 | 1000 |
| a[0][1] | 20 | 1004 |
| a[0][2] | 30 | 1008 |
| a[1][0] | 40 | 1012 |
| a[1][1] | 50 | 1016 |
| a[1][2] | 60 | 1020 |
| a[2][0] | 70 | 1024 |
| a[2][1] | 80 | 1028 |
| a[2][2] | 90 | 1032 |

# Strings in C :- 
Strings in c is a 1D array of characters that ends with a null character (\0)

ex:- V I N A Y \0

## Declaring string Variables
Syntax:
`char string name[size];`
ex:- `char name[20];`

## Initialization of String Variables: 
You can initialize Strings in two ways:

1) **Compile-Time Initialization**: we can initialize string variable in compile time initialization by using double quotes (").
# Strings

- This automatically adds null character at the end ('\0')
- Method -> Ex: Char name[7] = {'\0', 'V', 'I', 'N', 'A', 'Y', '3'}

## 2) Run-Time Initialization : Using Scanf we can initialize 

### String variable in Run-Time initialization
- Ex: Char name[20];
  - Scanf("%s", name);

### Write a c' program of string using compile-Time
```c
#include <stdio.h>

int main() {
  char name[20] = "Vinay";
  printf("your name is: -%s", name);
  return 0;
}
```
- Output: Your name is: -Harsha Vinay

### Write a c' program of string using Run time
```c
#include <stdio.h>

int main() {
  printf("Enter your name: -");
  char name[20];
  scanf("%s", name);
  return 0;
}
```
- Output: Enter your name: - Vinay

## Standard Library String functions or String handling functions:
1) The c library supplies several handling functions
2) ANSI c uses 'string.h' header file to provide the prototypes.
# 3) If you want to use these functions you must in

## #include <string.h>

**Strlen() (Length of String):** Find no. of characters before null character ('\0')

**ex:-** #include <stdio.h>
       #include <string.h>

**Strcat() (Join 2 Strings):**

1) It appends a source string to the end of destination string so that the length of the resulting string is equal to total of both the strings.

**ex:-** #include <stdio.h>
       #include <string.h>
       int main(){
           char s1[] = "Hello";
           char s2[] = "World";
           char result[];
           strcat(result, s1);
           strcat(result, s2);
           printf("%s", result);
           return 0;
       }

Output:- Hello world

**Strcpy() (Copy 1 string to another):** 
copies the content of source string into destination string, including null char ('\0')

**ex:-** #include <stdio.h>
       #include <string.h>
       int main(){
           char result[7];
           char s1[] = "Hello";
String (Console);
Printf ("%s", Hello);
return 0;
}

Output:- Hello

strcmp() (Compares 2 Strings):
Compare 2 Strings Char by Char
Returns:-
1) 0 -> Strings equal
2) <0 -> 1st < 2nd
3) >0 -> 1st > 2nd

# include <stdio.h>
# include <string.h>

int main () {
char s1[5], s2[5];

Printf ("Enter first string:- \n");
gets (s1);
Printf ("Enter second string:- \n");
gets (s2);

if (strcmp(s1,s2)==0) {
Printf ("equal");
} else {
Printf ("not equal");
}
return 0;
}
# Strev:- This function reverses the string, which means char becomes first char and the second one and so on.
```c
#include <stdio.h>
#include <string.h>

int main() {
  char s[25];
  gets(s);
  printf("Enter string:-\n");
  printf("Reverse String is:-\n");
  printf("%s", strev(s));
  return 0;
}
```
Output -> 12345
         54321

# Strupr:- This function is used to convert the characters of a String into UPPER case letters.
```c
#include <stdio.h>
#include <string.h>

int main() {
  char s[25];
  gets(s);
  printf("Enter string:-\n");
  printf("Upper String is:-\n");
  printf("%s", strupr(s));
  return 0;
}
```
Output
# strlwr: This function is used to convert the characters of a string into lowercase letters


``` c
#include <stdio.h>
#include <string.h>

int main() {
  char s[100];
  gets(s);

  printf("enter string:-\n");
  printf("lower string is:-\n");
  printf("%s\n", strlwr(s));
  return 0;
}
```
