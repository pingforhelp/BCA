# **Purpose of C**

Dennis Ritchie developed **C** to make *system software* (like operating systems).

**UNIX** is one of the first operating systems written in **C**, which made it portable and efficient.

# Features of C

C became popular because it:
1. Combined the efficiency of assembly language with the simplicity of a high-level language.
2. Allowed writing programs that can run on different computers portable.
3. Became a foundation for many modern languages, such as C++, Java, and Python.

# Versions of C
| Version | Year | Description                                 |
| ------- | ---- | ------------------------------------------- |
| K&R C   | 1978 | First official version (by Dennis Ritchie). |
| ANSI C  | 1989 | Standardized the language.                  |
| C89 / C90 | 1989–1990 | International Standard (ANSI: American National Standards Institute) |
| C99       | 1999      | Added new features like inline functions, variable-length arrays     |
| C11       | 2011      | Added multi-threading support                                        |
| C17 / C18 | 2017–2018 | Minor updates & fixes                                                |



# Why C is Important?
1. **It's called the “Mother of Programming Languages.”**
2. **Many modern languages** like **C++**, **Java**, **C#**, and **Python** were built on concepts of **C**.
3. **It's still used** in:
System programming
 * Embedded programming
 * Compilers
 * Operating system development.

>[!summary]
> **Developed by:** Dennis Ritchie
> **Year:** 1972
> **Place:** Bell Laboratories
> **Purpose:** To develop the UNIX OS
> **Derived from:** B & BCPL
> **Known as:** *Mother of all modern programming languages*

# Purpose of Flowcharts
1. To understand the logic of a program easily
2. To plan a program before writing the actual code
3. To debug/explain the process to others

# Features of C
1. **Simple and easy** C uses simple syntax Easy to learn commands
2. **Portable** C programs can run on different computers without change
3. **Structured Languages** A program can be divided into functions/blocks.
4. **Rich Library** C has many built-in functions like `printf()` and `scanf()`.
5. **Middle-Level Language** Supports both low-level and high-level programming.
6. **Modular** Large programs can be broken into smaller functions.



# sC Tokens
Tokens are the smallest building blocks of a C program.
They are like words in a language.

# Types of Tokens
1. Keywords
2. Identifiers
3. Constants
4. Operators
5. Special Symbols (, ; () etc...).
6. Strings

# Keywords
* Keywords are reserved words with a special meaning.
* **Rules:**
1. You **cannot** use them as variable names.
2. They tell the compiler what to do.
**Examples:** `int`, `float`, `if`, `else`, `for`, `while`, `return`, `char`, `const`.

# **Identifiers**
Identifiers are **names given by the programmer** to:
* variables
* functions
* arrays
* etc.

**Purpose:**
They help us identify data in the program.

# Constants
Constants are values that doses *not* change during a program’s execution.

# Types of Constants
| Type               | Example                      |
| ------------------ | ---------------------------- |
| **Integer Const**  | 10, -5, 2, 3, etc.           |
| **Floating Const** | 5.55, 7.25, 3.00, 9.24, etc. |
| **Char Const**     | 'A', 'B', 'C', etc.          |
| **String Const**   | "My Name"                    |

# Operators in C
An **operator** is a symbol that tells the compiler to perform a specific operation such as **addition, subtraction, comparison, assignment**, etc.

# Types of Operators in C

**1. Arithmetic Operators**
| Operator | Meaning / Example |
| -------- | ----------------- |
| `+`      | Addition          |
| `-`      | Subtraction       |
| `*`      | Multiplication    |
| `/`      | Division          |
| `%`      | Modulus           |


**2 Relational Operators**
| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Equal to (comparison) |
| `!=`     | Not equal             |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |

**3. Logical Operators**
| Operator | Meaning / Example                         |
| -------- | ----------------------------------------- |
| `&&`     | Logical AND → Example: `(a > 0 && b > 0)` |
| `!`      | Logical NOT → Example: `!(a > 0)`         |

**4 Assignment Operators**
| Operator | Meaning / Example                         |
| -------- | ----------------------------------------- |
| `=`      | Assigned value → Example: `a = 10`        |
| `+=`     | Add & assign → Example: `a += 5` (a = 15) |
| `-=`     | Subtract & assign → Example: `a -= 5`     |
| `*=`     | Multiply & assign → Example: `a *= 5`     |
| `/=`     | Divide & assign → Example: `a /= 5`       |

**5 Increment & Decrement Operators**
| Form  | Meaning                                         |
| ----- | ------------------------------------------------|
| `i++` | **Post-increment** → First use, then add 1      |
| `++i` | **Pre-increment** → First add 1, then use       |
| `i--` | **Post-decrement** → First use, then subtract 1 |
| `--i` | **Pre-decrement** → Subtract 1, then use        |

**6 Ternary Operator**
Symbol: `? :` can used instead of simple if-else.
**Example:**
``` c
a = 5
b = 6
a > b ? a : b 
```
Output:
``` bash
6
```
**7. Strings** A **string** is a sequence of characters inside **" "**

Properties:
* Always ends with a **null character (`\0`)** internally
* Stored as an **array of characters**

Example:
```c
char name[] = 'c';
printf("%s", name);
```

**Output:**
``` bash
c
```

**8. Special Symbols**
| Symbol                 | Meaning                         |
| ---------------------- | ------------------------------- |
| `;`                    | End of statement                |
| `{ }`                  | Start & end of block / function |
| `( )`                  | Used in functions & conditions  |
| `[ ]`                  | Arrays                          |
| `,`                    | Separator between variables     |
| `#` (e.g., `#include`) | Preprocessor directive          |
| `' '`                  | Character constant              |
| `" "`                  | String constant                 |
| `\`                    | Escape character                |

# **Variables in C**
A variable is a **named memory location** used to store data that can change.

**Why Variables Are Needed?** Variables store data during program execution.
A variable is a **container that stores a value**.

**Variables are needed to:**
* Store input data
* Perform calculations
* Store program results
* Make code readable and reusable

# Variable Declaration
Tells the compiler **what type of data** the variable will store.

Example:
```c
int a;
float b;
char c;
```
# Variable Initialization
Assigning a value to a variable.

Example:
```c
a = 10;
b = 10.5;
c = 'M';
stockerid = "SSzxxc1";
```
### ✅ Page 11/22 — Processed

Below is the **Markdown transcription for Page 11**.

---

# **Rules for Naming Variables**

### ✅ 1. Must start with a **letter (a–z or A–Z)** or **underscore (_)**

* `1a = 10;` → ❌ Invalid
* `A = 10;` → ✔️ Valid
* `_a = 10;` → ✔️ Valid
* `a = 10;` → ✔️ Valid

Examples of valid identifiers:

```c
int age;
int _height;
```

---

### ✅ 2. Can contain only:

* letters
* digits
* underscores `_`

#### Examples:

| Valid              | Invalid           |
| ------------------ | ----------------- |
| `int total_marks;` | `int total-mark;` |
| `int sum1;`        | `int price#;`     |

---

### ✅ 3. No spaces allowed

| Valid              | Invalid            |
| ------------------ | ------------------ |
| `int total_marks;` | `int total marks;` |

---

### ✅ 4. Cannot use keywords

(Examples: `int`, `float`, `if`, `else` cannot be used as variable names)

---

Reply **next** for Page 12/22.

### ✅ Page 12/22 — Processed

Below is the **Markdown transcription for Page 12**.

---

# **More Rules for Naming Variables**

## **1. Case Sensitive**

C is a **case-sensitive language**, meaning uppercase and lowercase letters are treated as **different variables**.

Example:

```c
int age = 10;
Age = 25;
printf("%d", age);   // Output: 10
```

Here, `age` and `Age` are different.

---

## **2. No Special Characters Allowed (Except Underscore _)**

You *cannot* use characters like:
* `@`
* `%`
* `-`
* `#`
* `$`

**Examples:**
| Valid         | Invalid       |
| ------------- | ------------- |
| `total_marks` | `total-marks` |
| `sum1`        | `sum@`        |

---

## **3. Length of Variable Name**

(Continues on next page)



**Length of Variable Name**

There is **no strict limit**, but most compilers recognize only the **first 31 characters**.

---

# **Meaningful and Readable Names**

Use meaningful names.

❌ Avoid:

```c
int a, b, c;   // Meaningless
```

# Data Types

Data types define:
* what kind of data a variable can store
* how much memory it occupies



# **1) Primitive Data Types**

| Data Type  | Size (bytes) | Format Specifier | Example            |
| ---------- | ------------ | ---------------- | ------------------ |
| **int**    | 2 or 4       | `%d`             | `int a = 10;`      |
| **float**  | 4            | `%f`             | `float b = 10.5;`  |
| **double** | 8            | `%lf`            | `double d = 8.54;` |
| **char**   | 1            | `%c`             | `char c = 'M';`    |




# **2) Derived Data Types**

| Derived Type     | Definition                                             | Example                              |
| ---------------- | ------------------------------------------------------ | ------------------------------------ |
| **1. Array**     | Group of same-type elements                            | `c int a[5];  a = {1, 2, 3, 4, 5}; ` |
| **2. Pointer**   | A variable that stores the address of another variable | `c int *p; `                         |
| **3. Structure** | Group of different data types                          | `c struct Student {   ... }; `       |
| **4. Union**     | Shares the same memory location                        | `c union info {   ... }; `           |
| **5. Function**  | Returns a value after execution                        | `c int add(int a, int b) {   ... } ` |

---


**User-Defined Data Types**
| Keyword     | Definition                           | Example                               |
| ----------- | ------------------------------------ | ------------------------------------- |
| **typedef** | Gives a new name to an existing type | `c typedef int num; `                 |
| **enum**    | Defines a set of named constants     | `c enum day { Mon, Tue, Wed, ... }; ` |

**Data Type Modifiers** Used to **change the size or range** of basic data types.
| Modifier     | Used With   | Example            |
| ------------ | ----------- | ------------------ |
| **short**    | int         | `short int a;`     |
| **long**     | int, double | `long int b;`      |
| **signed**   | int, char   | `signed char c;`   |
| **unsigned** | int, char   | `unsigned char c;` |


# Structure of a C Program
A **C program** is divided into **6 sections**:
1. **Documentation Section**
2. **Link Section**
3. **Definition Section**
4. **Global Declaration Section**
5. **main() Function Section**
6. **Subprogram Section** (User-defined functions)

---

## **main() Function Section**

``` c
{
    Declaration Part
    Executable Part
}


// * The **declaration part** contains variable declarations
// * The **executable part** contains statements to be executed



// Subprogram Section
// Contains user-defined functions:


Function 1
Function 2

Function n
```
**Documentation Section**
* This part contains information about the program such as **name, purpose, author, and date**.
* It is written as **comments**, and the compiler **ignores it**.

**Preprocessor Section**
* This section includes header files using the **#include statement**.
* Header files contain predefined functions like `printf()` and `scanf()`.

**Syntax**
```c
#include <stdio.h>   // stdio → standard input/output
#include <math.h>    // math.h → mathematical functions
```

**Definition Section**
* Used to define **constants** or **macros** before the main program.
* `#define` keyword is used for constant definitions.

**Example:**
```c
#define PI 3.14
```

> [!note] 
> Whenever the compiler finds `PI`, it replaces it with `3.14`.

**Global Declaration Section**
* Variables or functions declared here can be **used anywhere in the program**.
* They are defined **outside the main()** function.

**Example:**
```c
int num = 10;
```

**main() Function Section**
* This is the **starting point** of every C program.
* The compiler starts execution from the **main()** function.
* The main function can return a value (usually **int**).

**Syntax**
```c
int main()
{
    // variable declaration
    // logic / process
    
    return 0;
}
```

> [!NOTE]
> Everything that happens in a C program runs inside the `{}` of the **main()** function.

# Subprograms (User-Defined Functions)
* These are functions created by the **programmer** to perform specific tasks.
* They make programs **modular** and **easier to reuse**.

# I/O Statements in C

In C, **input and output** are done using certain functions.
There are **2 types**:
1. **Formatted I/O**
2. **Unformatted I/O**

# Formatted I/O
These allow formatted input and output using **format specifiers**.

**1) printf() → Output**
**Syntax**:
```c
printf("%d", a);
```

**Common Format Specifiers**
| Format Specifier | Meaning |
| ---------------- | ------- |
| `%d`             | int     |
| `%f`             | float   |
| `%s`             | string  |
| `%c`             | char    |
| `%lf`            | double  |

**Example (double output)**
```c
int a = 10;
printf("%d", a);
```

**2) scanf() → Input**

**Syntax**
```c
scanf("format", &variable_name);
```
**Example**
```c
int a;
scanf("%d", &a);
```


