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
