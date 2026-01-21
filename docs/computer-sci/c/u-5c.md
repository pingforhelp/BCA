# Unit 5. Dynamic Memory Management
- Introduction: Functions-malloc, calloc, realloc.
- Free Structures: Basics of structure, structure members, accessing structure members, nested structures, array of structures, structure and functions, structures and pointers.
- Unions: Union definition; difference between Structures and Unions.
- Working with text & Filesmodes: opening, reading, writing and closing `.txt` files.


Dynamic Memory Management
Memory management is the process of allocating and deallocating memory during program execution.

Types of Memory Allocation

| Type        | When Allocated | Size      |
|-------------|----------------|-----------|
| 1) Static   | Compile type   | Fixed     |
| 2) Dynamic  | Run type       | Flexible  |
| 3) Automatic|                |           |

> [!NOTE]
> Dynamic Dynamic Memory Management allows the program to request memory while running.

Why Dynamic Memory?
Size not known in advance.
Efficient memory usage.
Useful for erasures, structures, linked lists.

Headerfiles
```c
#include <stdlib.h>
```
Types of dynamic memory management functions

(i) In ‘c’ programming `malloc`, `calloc`, `realloc` & `free` are dynamic memory management functions.
# Opening and Writing to a File

i) Program to write to file

```c
#include <stdio.h>
int main() {
  FILE *fp;
  fp = fopen("sample.txt", "w");
  fprintf(fp, "Hello to programming\n");
  fprintf(fp, "This is sample\n");
  fclose(fp);
  printf("Data written successfully\n");
  return 0;
}
```

ii) Program to read from a file

```c
#include <stdio.h>
int main() {
  FILE *fp;
  char ch;
  fp = fopen("sample.txt", "r");
  printf("The content is:- \n");
  while ((ch = fgetc(fp)) != EOF) {
    printf("%c", ch);
  }
  fclose(fp);
  return 0;
}
```
## Closing a File

Syn: `fclose(file);`

-> always close a file to -> i) flush data properly
                               ii) free memory
                              iii) avoid file corruption

## Operation on File:

(i) `fopen()` ->
(ii) `fprintf/fgets()` ->
(iii) `fclose()`
① `malloc` &mdash; (memory allocation)

(i) `malloc` stands for memory allocation.

purpose &mdash;
(i) allocate a single block of memory
(ii) memory is uninitialized (contains garbage values)

Syntax &mdash;
`ptr = (data type *) malloc (size in bytes)`

notes &mdash;
`p = (int *) malloc (5 * size of (int));`
&rarr; This code allocates memory for 5 integers.

keypoints &mdash;
memory contains garbage values
faster than `calloc`
returns `NULL` if memory is not available

`calloc` &mdash; (contiguous allocation)
`calloc` stands for contiguous allocation.

&mdash;
atu memory for multiple blocks
is initialize to zero

&mdash;
`to type *) calloc (number of elements, size of each);`
→ `malloc` Memory for 5 `int`s, all initialize to zero

\* Key points: →
(i) memory is initialize to zero
(ii) is slightly slower than `malloc`
(iii) useful when default values are needed

(ii) `realloc` → (Reallocation of memory)
purpose: →
(i) changes the size of previously allocated memory
(ii) can increase or decrease the memory size

Syntax: →
`ptr = realloc(ptr, new_size)`

ex: →
`p = realloc(p, 10 * size of (int))`
→ changes memory size from 5 to 10 integers

\* Key points: →
(i) keeps hold data
(ii) may move memory to a new location
(iii) Returns `NULL` if reallocation fails

(iii) `free` → (Deallocate memory)

purpose: →
(i) releases allocated memory back to the system
(ii) prevents memory leaks

Syntax: →
`free(ptr);`

ex: →
`free(p);`
A structure in C is a user-defined data type that allows you to group different types of variables and create single, logical units.

Structures are used to represent real-world entities like a student.

**Definition of Structure**

A structure is a collection of related variables of different data types.

**Structure Syntax**

```c
struct structure_name
{
    datatype member1;
    datatype member2;
};
```

**Example:**

```c
struct student
{
    int roll;
    char name[20];
    float marks;
};
```

**Structure Members**

Variables inside a structure are called structure members.

```c
struct student
{
    int roll; // member
    char name[20];
};
- Structure members accessed using the dot operator.

```c
struct Student S1;
S1.roll = 40.5;
S1.mark = 100;
```

Printing Values

```c
printf("%f %d", S1.roll, S1.mark);
```

Nested Structure

A structure inside a structure is called Nested Structure.

```c
struct Date {
  int day, month, year;
};

struct student {
  int roll;
  int Data dob;
};
```

Accessing:

```c
struct student S;
S.dob.day = 09;
S.dob.month = 03;
S.dob.year = 2008;
```
- **Array of Structures:**
  - When we want to store multiple structure variables, we use an array of structures.
  - *Example:*
    ```c
    struct Student {
      int roll;
      float marks;
    };
    struct Student ST[3];
    ```
  - Used in array of structures—used in student records, employee lists.

- **Structure & Functions:**
  - Structures can be:
    (i) Passed to a function
    (ii) Returned from functions
  - Passing structure to a function:
    ```c
    void display(struct Student s) {
      printf("%d %.2f", s.roll, s.marks);
    }
    ```
  - *Calling:*
    ```c
    display(ST[0]);
    ```
  - Passing structure copies all numbers.

- **Structure and Pointers:**
  - Pointers can be used to point to structures for efficient memory usage.
Ex:-
```
ptr = &s;
```

\* accessing members using pointers:-
-> use arrow operator to access members of structure.

Ex:-
```
ptr -> roll = 102;
ptr -> marks = 80.5;
```

\* unions:-
A union is a user-defined data type similar to a structure but all members share the same memory location.

Note:- At a time only one member can store a value.

Syn:-
```c
union union_name
{
    data type member 1;
    data type member 2;
};
```

ex:-
```c
union Data
{
    int p;
    float b;
};
```

\* working of unions:-
(i) All members use same memory.
(ii) size of union = size of largest member.
(iii) Changing one number overwrites others.
Ex-1
```c
#include <stdio.h>

union sample
{
  int x;
  float y;
};

int main()
{
  union sample s;
  s.x = 10;
  printf("x = %d", s.x);

  s.y = 9.5;
  printf("y = %f", s.y);
  return 0;
}
```

Output
x = 10, y = 2.65

Note: When a new value is assigned, the stored old value is lost because memory is shared.

Differences between Structure and Union:

| Structure | Union |
|---|---|
| 1) Separate memory for each number | 1) Same memory for all numbers |
| 2) Sum of all numbers | 2) Size of largest number |
| 3) All numbers at a same time | 3) Only one number at a time |
*working with text files?*

→ What is text file?

(i) A text file is a file that stores data in the form of readable characters (letters, numbers, symbols).

(ii) The content of a text file can be read and understood by humans using simple editors like notepad.

   ex: Note.txt
   → college.txt

*working with text files with 'c'*

→ Text files are used to store data permanently required header `#include <stdio.h>`.

*File opening modes?*

| Mode| → | Purpose |
|---|---|---|
| 1) | “r” | Read |
| 2) | “w” | → Write (creates new files) |
| 3) | “a” | → Append |
| 4) | “r+” | → Read and write |
| 5) | “w+” | → Write and read |
| 6) | “a+” | → Append and read |
