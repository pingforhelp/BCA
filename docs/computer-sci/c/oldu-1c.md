# Problem Solving using C
Breakdown of Units, and Sub-topics:

---
**Unit 1. Introduction to computer programming:**
- Introduction: Types of software, Compiler and interpreter, Concepts of Machine level, Assembly
level and high-level programming, Flowcharts and Algorithms.
- Fundamentals of C: History of C, Features of C, C Tokens-variables and keywords and identifiers, constants and Data types, Rules for constructing variable names, Operators.
- Structure of C program, Input/output statements in C-Formatted and Unformatted I/O.
-------
**Unit 1. Introduction to computer programming**
Index
- [Types of software](#types-of-software)
- [Compiler and interpreter](#compiler-and-interpreter)
- [Concepts of Machine level, Assembly level, High-level programming](#concepts-of-machine-level-assembly-level-high-level-programming)
- [Flowcharts and Algorithms](#flowcharts-and-algorithms)
- [History and Features of C](#history-and-features-of-c)
- [Variables in C](#variables-in-c)
- [Rules for constructing variable Names](#rules-for-constructing-variable-names)
- [Keywords](#keywords)
- [Identifiers](#identifiers)
- [Rules for naming- Identifiers names](#rules-for-naming--identifiers-names)
- [Data Types in C](#data-types-in-c)
- [Comments](#comments)
- [Constants in C](#constants-in-c)
- [Operators](#operators)
- [Types of Operators in C](#types-of-operators-in-c)
- [Structure of a Program in C](#structure-of-a-program-in-c)
- [I/O statements and formatted I/O](#io-statements-and-formatted-io)
- [Unformatted I/O Functions](#unformatted-io-functions)
- [Bonus](#how-to-setup-a-ide-for-c-bonus-topic)

# Types of software
Introduction Computer Programming is the process of designing and writing a sequence of instructions（a program) that tells a computer how to perform tasks. A program translates human logic into a form that hardware can execute. Think of it like writing a recipe for the computer. The recipe is the program, the ingredients are the data, and the steps are the instructions. The person who writes these instructions is called a **Programmer**, and they write them in a special language called a <u>programming language</u>. The entire set of instructions written in a programming language is called Source code.
Programming matters:
- Automates tasks, performs, computations, fast.
- Builds software systems (apps, OS, games, web-services).
- Bridges **problem-solving** (algorithmic thinking) and machine execution.

Types of software: Software is a collection of programs and data that tells a computer what to do. It is broadly
divided into two main categories:
1. System Software: This software acts as an intermediary between the computer hardware and the user's applications. Its main purpose is to manage the computer's resources. Examples:
   - Operating Systems (OS): Windows, MacOS, Linux, Android. They manage all.
other software and hardware on the computer.
    - Device Drivers: Software that allows the OS to communicate with hardware
devices like printers, keyboards, and webcams.
    - Utilities: Programs designed for system maintenance, like antivirus software or disk cleanup tools.
2. Application Software: This software is designed to perform specific tasks for the end-user. It runs on top of the system software.
Examples:
- Web Browsers: Mozilla Firefox, DuckDuckgo.
- Word Processors: Microsoft Word, Google Docs, LibreOffice.
- Games: Fortnite, Minecraft, CSGO
- Media Players: VLC Media Player, MPCL.

**Types Of Software:**
1. System Application Software.
2. Operating System.
3. Language processor.
4. General purpose.
5. Customised Software and device drivers:
- Linux.
- Interpreter.
- MS-word.
- Railways Reservation System.
- Windows.
- Compiler.
- Photoshop.

![Unit_1_C pdf-image-000](https://github.com/user-attachments/assets/41f390e5-91ec-496d-bd94-235dec1add27)
*Fig.1.1 A Image showing types of Software.*

# Compiler and interpreter
Computers only understand machine code (binary O’s and 1’s). Since we write programs in high-level languages (like C or Python), they need to be translated. Compilers and interpreters are two types of translator programs that do this job.
- Compiler: A compiler reads the entire source code at once and translates it into a complete machine code file called an executable or object file. This file can then be run by the computer.
- Works: Scans the whole program and reports all errors at the end.
- Advantage of compiler:
- Execution Speed: Generally faster because the translation is done only once.
- Examples: C, C++, Java use compilers.

![Unit_1_C pdf-image-001](https://github.com/user-attachments/assets/a7e3b081-177a-4e49-8015-f0d5da58bbc0)
*Fig.1.2 Compiler VS Interpreter.*

- Interpreter: An interpreter reads the source code one line at a time, translates that line into machine code, and immediately executes it before moving to the next line.
- Works: Translates and executes line-by-line. It stops as soon as it finds the first error.
- Advantage of Interpreter:
- ➢ Execution Speed: Generally slower because translation happens every time the program is run.
- ➢ Examples: Python, JavaScript, Ruby use interpreters.

| Feature | Compiler | Interpreter |
| :-- | :-- | :-- |
| Input | Entire program | Single line of code |
| Output | Executable file (Machine code) | Immediate result (no file) |
| Speed | Faster execution | Slower execution |
| Error Checking | After scanning the whole program | After translating each line |
| Debugging | Harder | Easier |

# Concepts of Machine level, Assembly level, High-level programming
Programming languages are categorized into three levels based on their abstraction from
the hardware:
1. Machine Language (also called Machine Code) Machine language is the lowest-level programming language, directly understood by the computer's central processing unit (CPU). It consists entirely of binary code (1s and Os) and represents the raw instructions that the CPU can execute:
- This is the lowest level, consisting of binary digits (Os and 1s).
- It is the only language a computer's CPU can directly understand.
- It is extremely difficult for humans to read and write.
- It is machine-dependent, meaning a program written for one computer might not work on another.

**Example**: A machine code instruction might look like 10110000 01100001, which could correspond to an operation like loading a value into a register on a specific CPU architecture.

2. Assembly Level Language (Low-Level): Assembly language is a low-level programming language that serves as a symbolic representation of machine code. Each assembly language instruction corresponds directly to a machine language instruction, but the code is written using readable text and mnemonic codes rather than binary.
- This is a step above machine language. It uses English-like mnemonics (short codes) to represent machine instructions, such as ADD for addition or MOV for moving data.
- An assembler is required to translate assembly code into machine code.
- It is easier to work with than machine language but is still machine-dependent.

**Examples:** Assembly Copy codeMOV AX, 1; Move the value 1 into register AX ADD AX,BX; Add the value in register BX to AX These are mnemonics and are typically converted to machine code by an assembler.

3. High-Level Language (HLL): High-level languages are programming languages that provide a greater level of abstraction from the hardware, making them easier for humans to read and write. High-level languages are designed to be portable across different hardware platforms.
- These languages use English-like syntax and are the easiest for humans to read, write, and maintain.
- They are machine-independent, meaning a program can run on different types of computers with little or no modification.
- They require a compiler or interpreter to be translated into machine code.

**Examples:** C, C++, Java, Python, and C#.
  - Python: A very highlevel, interpreted language.
  -  Java: A high-level, object-oriented language that runs on the Java Virtual Machine(JVM).
  -  C/C++: High-level languages, though closer to the hardware than some others, still abstract many hardware details compared to assembly or machine code.

# Flowcharts and Algorithms
What is a Algorithm?
- Algorithm is a finite set of steps used to solve computational problems in a program.
- An algorithm  development by the programmer to represent the basic logic of the selected solution.
- An algorithm as it is a finite & no. of steps of instructions that produce an output for a set of input values.
- An algorithm written in simple English language.
- To make an effective algorithm the steps must be define with finite sequence of instruction.

<img width="264" height="454" alt="Unit_1_C pdf-image-002" src="https://github.com/user-attachments/assets/ee093cab-6c8d-4451-977b-8473cf74bfe3" />

*Fig.1.3 An image describing a Flow chart*

**Properties of algorithm The algorithm has five properties such as:**
1. **Input**:  Input  An algorithm must have '0' or more no. of well defined inputs. Example: ```printf("Hello, world!");```. There is no input but it provides an output ```Hello, world!```
2. **Output:** The algorithm must have at least one output, we cannot say that zero outputs. Example: 
3. **Finiteness:**   The algorithm must terminate after a finite number of steps. To each instruction & step in an algorithm must have clear meaning. Example:  `while ( ) { Set of Statements; }` This loop executes a finite number of times.
4. **Unambiguous:** The algorithm must have Unambiguous instructions, every instructions must have clear meaning. The algorithm should not have any unambigies  instructions.
5. **Effectiveness:** The algorithm must provide effective result. To make a effective algorithm we must follow sequence of steps.

**Example of algorithm Write a algorithm to find the sum of any two numbers:**
``` Pseudocode
Step-1: Start.
Step-2: declare variable a, b, sum.
Step-3: Read or assign value to variable, sum = a+b
Step-4: To perform addition of two numbers, printsum 
Step-5: To display output in some sum value.
Step-6: End or Stop.
```
> [!NOTE]
> Whenever we use STEPS like shown above it is referred to as "Pseudocode" and when we use a diagram that is referred as a Flow Chart like the image you saw on Fig.1.3.

**Flow charts**

> [!IMPORTANT]
> **Flow chart use different symbols to perform different operations in a program.**

The basic symbols used in flow chart design are given below:
1. Terminal: The terminal is represented by a rectangle it has at rounded ends. This symbol is used to identify indicate the beginning (Start & end) termination (end) of the algorithm. Terminal is denoted by around rectangle or vowel shape.
2. Input / output OR I/O: The input (&) output is represented by a parallelogram. This symbol represented an input taken from the user & output given to the user.
3. Flow line: The flow line are represented by array/whiteads that are used connect symbol. These lines indicated the sequence of steps and flow of operations The flow line is denoted by array symbol and here's an image of it.
4. Processing: The processing is represented by a rectangle
5. This symbol used for representing all arithmetic and data moment instructions. This symbol is used logic process of moving data from one memory location to another.
6. Decisions & conditions: A program may have multiple execution parts in order to select the direction of program control. The decision is denoted by diamond shape. The program should continue one of two routes (if and else) that 'yes' & 'no'.
7. Connector: The connector is used to join different flow charts in a program. The connector is denoted circle shape.

**Example Draw a flow chart to find the sum of any two numbers.**
<img width="327" height="747" alt="Unit_1_C pdf-image-008" src="https://github.com/user-attachments/assets/ed77d8b0-4e8a-4ad6-b955-f5312e47e58c" />

*Fig.1.4 Flow chart to find the sum of any two numbers.*

# History and Features of C
C is a general-purpose programming language which is an extremely popular. It is known for being simple and flexible. It is a structured programming language used to write various applications like operating systems, compilers, Windows, Linux, Unix, Game development, and more. 
- The father of programming languages is **ALGOL**. It was first introduced in **1960**. ALGOL introduced the concept of "Structured Programming".  
- In **1967**, a new computer programming language was announced called **BCPL (Basic Combined Programming Language)**.  
- After three years, in **1970**, a new programming language called **'B'** was created.  
- In **1972**, a new computer programming language was created for scientific and commercial purposes. **Dennis Ritchie** created a new programming language called **'C'** at Bell Labs.  
- 'C' became a popular and powerful programming language. It remained standardised when the **American National Standards Institute (ANSI)** defined a commercial standard for the C language in **1989**. Later, it was approved by the **International Standards Organisation (ISO)** in **1990**, so this version of the language is called **ANSI C**.

# Variables in C
A variable in C is a named memory location used to store data that can be changed during program execution.

Example,
```c 
int age = 20;
float salary = 25000.50;
char grade = 'A';
/*Here,
- Age is an integer variable. 
- salary is a floating-point variable.
- grade is a character variable.
*/
```

# Rules for constructing variable Names
The following rules apply to constructing variable names in C:
- **Start with a Letter or Underscore:** Variable names must begin with an alphabet (a-z, A-Z) or an underscore (\_). They cannot start with a digit.
```c
int age; // Valid
float _salary; // Valid
int 1name; // Invalid
```
- **Allowed Characters:** After the first character, variable names can contain letters, digits (0-9), and underscores (_).  special characters (like $, #, %, @) *are not* allowed.
```c
char name1; // Valid
int employee_id; // Valid
float total$amount; // Invalid
```
- No Spaces: Variable names cannot contain spaces or blank characters.
```c
int user_age; // Valid
int user age; // Invalid
```
- Case-Sensitive: C is a case-sensitive language, meaning that uppercase and lowercase letters are treated as distinct. Thus, `age`, `Age`, and `AGE` are considered different variables.==
```c
int age;
int Age; // This is a different variable
```
- No Keywords: Reserved words or keywords of the C language (e.g., `int`, `float`, `if`, `for`, `while`) *cannot* be used as variable names.
``` c
int for; // Invalid - 'for' is a keyw
```
- Length: While the C standard recognizes a length of ==at least 31 characters for a variable name, it is generally recommended to keep names meaningful and concise==. Some older compilers might only consider the first few characters as significant.

# Keywords
key words have standard, ==pre-defined meanings in C==
* This keywords can be used only for there intended purpose.
* Key words are an essential part of a language definition.
* They implement & specific features of the language
* Every 'c' word is classified as either a key word or an identified
* A key word is a sequence of characters.. Note: that the key words are all lower case
* These keywords also called "reserved words".
*   keywords of the words whose meaning has already been explained to the 'C' compiled and they meaning can be change.
* Keywords *can not* be used as user defined variables
* There are 32 keywords available in 'C':

| S.No. | Keywords |
| ----: | :------- |
|     1 | auto     |     
|     2 | break    |     
|     3 | case     |     
|     4 | char     |     
|     5 | const    |     
|     6 | continue |     
|     7 | default  |     
|     8 | do       |     
|     9 | double   |     
|    10 | else     |     
|    11 | enum     |     
|    12 | extern   |     
|    13 | float    |     
|    14 | for      |     
|    15 | goto     |     
|    16 | if       |     
|    17 | int      |     
|    18 | long     |     
|    19 | register |     
|    20 | return   |     
|    21 | short    |     
|    22 | signed   |     
|    23 | sizeof   |     
|    24 | static   |     
|    25 | struct   |     
|    26 | switch   |     
|    27 | typedef  |     
|    28 | union    |     
|    29 | unsigned |     
|    30 | void     |     
|    31 | volatile |     
|    32 | while    |     

# Identifiers
* Identifiers has the name suggest help us to identify data and other object in the programme.
* Identifiers are basically the names given to programme elements such as variables, functions etc.

# Rules for naming, Identifiers names
Some rules have to be followed by using Identifiers. They are as followed:
- It can't included any special characters like (#, *, ?, ...) etc.
- Except the underscore `_`
- There cannot be two successive underscores ~~__~~~.
- Key words can *not* be used as identifiers.
- Identifiers can be of any reasonable length. There should not contain more than 31 characters. It can actually longer than 31, but the compiler looks at only first 31 characters.
- **e.g., of identifiers**: roll_numbers, marks, emp_numbers, EMP_No, base_pay, Dept_code.
- Identifiers consisting letters, numbers and Data types of in 'C':

# Data Types in C
In `C' data types are defined as the data storage format that a variable can store a data to perform a specific operation.
* Data types are used to defined a variable become fore to use in a programme.
* Size of variables can be determine by data types.
*Fig.1.5 A Image showing a flow chart of data types*
<img width="747" height="146" alt="Unit_1_C pdf-image-009" src="https://github.com/user-attachments/assets/c12ab26e-7e5f-40b5-a43b-feb3b295cdac" />

1. **Primitive data types:**
- char
- float
- int
- void

2. **User-defined data types:**
- enum
- typedef

3. **Derived data types:**
- Pointers
- Arrays
- Structures
- Union

**Basic primitive data types are:**
1. **Integer data type:** 
- Integer data type allows a variable to store numerical values.
- `int` key word is used to refer integer data type.
- The storage size of `int` data type is 2 or 4 bytes depending on the processor.
- `int` can store values range from -32768 to +32767.
- If we want to use the integer value that cross the above limits, you can use `long int`.
2. **character data type**:
- character data type allows a variable to store only one character.
- Storage size of character data type is 1.
- we can store only one character using character data type.
- `char` keyword is used to refer character data type.
- Character can store values range from -128 to +127.
3. **Floating point data type:**
- `float` type allows a variable to store decimal values.
- Storage size of float data type is 4.
- These also value depend up on the processor.
- we can use up to 6 digits after decimal using float data type.
- e.g., 10.586789. Can be store in float data type.
- double data type is also same as float data type which allows up to 10 digits.

# Comments
- Comments are just a way of explaining what a program does.
- The compiler ignores the comments while using in our program.
- This means that the comments are non executable statements.
- C supports two types of comments:
1. `//` is used to comment a single statement.
- This is also known as "line comment"
2. `/*` is used to comment multiple statements and its must be ended with `*/`.
- These type of comment is known as "block comment".

# Constants in C
- Does *not* get changed in the program even by mistake.
- C allows the programmer to specify constants of integer type, floating point, type, character, and string types

*Fig.1.6 Constants of C program*
<img width="747" height="135" alt="Unit_1_C pdf-image-010" src="https://github.com/user-attachments/assets/82138a1f-86ad-4cb3-a868-7b846f1e182d" />

**Integer Constant:**
- A constant of integer type consists of a sequence of digits.
- For example 1, 34, 748 are valid integer constants.
- An integer like 1234 is of type `int` by default.
- For long integer is succeeded with either 'L' or '*l*'. Similarly and unsigned int value is returned with 'U' or 'u'.
- The `const` keyword specify the value of $\pi$ cannot be change
- However, another way to defined a constant is to use the pre-processor define command.
- e.g., `#ifdef` `#define PI 3.14`
- where the const names are usually return in capital letters to distinguish between other variables.
- No blanks. Space can be used between `#define` `#` Hashtag and define.
- `#define` is pre-processor directive and not a statement, therefore it does not end with a `;` semicolon.

# Operators
Operators are the basic components of C programming.They are symbols that represent some kind of operation, such as ==mathematical, relational, bitwise,====conditional, or logical computations==, which are to be performed on values or variables. The values and variables used with operators are called operands==.
``` c
#include <stdio.h>
int main() {
// Expression for getting
sum
int sum = 10 + 20;
printf("%d", sum);
return 0; }
```
Output:
``` bash
30
```
**Unary, Binary, and Ternary Operators**

On the basis of the number of operands they work on, operators can be classified into three types:

**Unary Operators**: Operators that work on single operand.

**Example:** Increment(++), Decrement(-)

**Binary Operators**: Operators that work on two operands.

**Example:** Addition (+), Subtraction( -), Multiplication(*).
**Ternary Operators**: Operators that work on three operands.

**Example:** Conditional Operator( ? :).

-> The following are the built in operators in C language:
1. Arithmetic operators
2. Relational operators
3. Equality operators
4.  Logical operators
5.  Unary operators
6. Conditional operators
7. Assignment operators.

# Types of Operators in C
C language provides a wide range of built in operators that can be classified into 6
types based on their functionality:
1.**Arithmetic Operators**
The __arithmetic operators__ are used to perform ==arithmetic/mathematical
operations on operands. There are ==

```c
＃include <stdio.h>
int main() {
int a = 25, b=5;
// using operators and printing results

printf("a + b = %d\n", a ＋ b);
printf("a - b = %d\n", a － b);
printf("a * b = %d\n", a ＊ b);
printf("a /b = %d\n", a ／ b);
printf("a °％ b = %d\n", a ％ b);
printf("+a = %d\n", +a);
printf("-a = %d\n", -a);
printf("a++ = %d\n", a++);
printf("a-- = %d\n", a-);

return 0;
}
```
Output:
``` bash
a + b = 30
a - b = 20
a * b = 125
a /b = 5
a % b = 0
+a = 25
-a = -25
a++ = 25
a-- = 26
```

2.**Relational Operators**
The relational operators in C are used for the comparison of the two operands. All these operators are binary operators that return true or false values as the result of comparison.
``` C
＃include <stdio.h>
int main() {

int a = 25, b = 5;

// Using relational operators and printing results
printf("a < b  : %d\n", a < b);
printf("a > b  : %d\n", a > b);
printf("a <= b : %d\n", a <= b);
printf("a >= b : %d\n", a >= b);
printf("a == b : %d\n", a == b);
printf("a != b : %d\n", a != b);
return 0;
}
```
Output:
``` bash
a < b  : 0
a > b  : 1
a <= b : 0
a >= b : 1
a == b : 0
a != b : 1
```
3.**Logical Operators:**
- 'C' language supports three logical operators: (&, |, !), (logical NOT AND), logical OR (||) and logical NOT (!).
- Has in case of arithmetic expressions the logical expressions are evaluated from left to right.

**Logical AND:**
- logical AND is a binary operator which simultaneously evaluates 2 relational expression, if both are True. When the whole expression is true.
- If both (OR) one of the operators is false, whole expression evaluates to false. 

**Truth table of logical AND:**
| A | B | A & & B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

For example, $$(a<b) \&\& (b>c)$$The whole expression is true only if both expression are true, i.e., if $b>a$ and $c$ (b is greater than a and c)

**Logical OR (||):**
logical OR (||) returns a false value if both the operators are false. otherwise it returns a true value

**Truth table of logical OR (||):**
| A | B | A || B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

For example, 
``` c
int a = 10 b;
b = !a;
```
- The whole expression is true if either
- b is greater than a (or) b is greater than c
- (or) b is greater than both a and c.

**Logical NOT (!):**
- The logical NOT operator takes a single expression and negates the value of the expression.

**Truth table of logical NOT (!):**
| A | !A |
|---|---|
| 0 | 1 |
| 1 | 0 |

For example, 
```c
int a = 10, b;
b = !a;
```
- Now the value of b ≠ c.
- This is because value of a = 10.
- !a = 0. the ⊲ value of !a is assign. to be, hence the result

4.**Unary Operators:**
- Unary operators act as on single operands. C language supports three unary operator unary minus, increment and decrement operators.

**Unary minus (-):**
- unary minus (-), is different from the arithmetic operator
- when an operand is preceeded by a minus sign, the unary operator negates its value.
- for example, if a number is positive then it becomes negative when preceeded with a unary minus operator. Similarly, if the number is negative, it becomes positive after applying the unary minus operator.

For example, 
```C
int a, b = 10
a = - (b)
```
- The result of the expression a = 10 because a variable was a positive an 
Value by applying unary minus - the value becomes -10.

**Increment operator (++) and Decrement operator (--):**
- The increment operator (++) is unary operator that increases the value of its operand by 1.
- Similarly, The decrement operator decreases the value of its operand by 1.
- The increment / decrement operators have two variants they are prefix and postfix.
- Therefore, an important point above unary increment and decrement operator is that ++x is not the same as x++. Similarly, --x is not the same as x--.
- Both ++x and x++ 'increment the value of x by '1'.

For example,
``` c
int x = 10, y;
y = x++;
```
is equate to 
- y = x;
- x = x + 1; 
- x = 10 + 1;
- x = 11
``` c
int x = 10, y;
y = x + x;
x = x + 1
x = 10 + 1
x = 11
y = x;
y = 11
```

There has `y = x + x;` is equaluated to 

x = x + 1;
y = x;

- The same principle applies to unary decrement operators.

5.**Conditional operators:**
So The ==conditional operators (or) ternary operator (?)== is just like an if else statements that can be with in expressions. 
> [!NOTE]
> More on If statements in Unit-2.
- The syntax of the conditional operator is 
$$exp_1 ? exp_2 : exp_3$$
- $exp_1$ is evaluated first. if it is true, then $exp_2$ evaluated and becomes the result of the expression, other wise $exp_3$ is evaluated and becomes the result of the expression.
For example,
```C
#include <stdio.h>
#include <conio.h>
int main() {
int age;
char ch;
clrscr(); // This clears the Output.
printf ("Enter your age: ");
scanf ("%d", &age);
ch = (age >= 18) ? 'Yes' : 'No';
printf ("eligible to Vote : %c", ch); 
// Pls check last topic in this Unit for Explanation about `%c`.

return 0;
}
```
6.**Assignment Operators:**
- In 'C' the assignment operation is responsible for assigning values to the variables.
- Then the equal sign is uncounted in an expression - the compiler process the statement on the right side of the sign and assigns the result to the variable on the left side. 

For example,
```c
int x;
x = 10;
```
```bash       
assigns the value 10 to variable x
```

**Equality Operators:**
- C language support 10 kinds of two equality operators to compare. There operators for strict equality (&) inequality. 
- They are equal (=) and not equal (!=) operators. They equality to operand( (=) returns true(1) if operands on the both sides of the operator have the same value; other wise, it returns false (0). On the contrary than not equal operand (!=) returns true(1) if the operands do not have the same value, as else it returns false (0).

| Operator | Meaning |
|---|---|------------
| == | Returns 1 if both operands are equal, 0 otherwise |
| != | Returns 1 if operands do not have the same value, 0 otherwise |


# Structure of a Program in C  

``` c
#include <stdio.h>
int main() {
printf("Hello, world!");
return 0;
}
```
``` bash
Hello, world!
```
The components of the above structure are:
1. **Header files:** The first and foremost component in a C program is the header file. A header file is a file with the extension **.h**, which contains C function declarations. For example, **stdio.h** defines standard input and output functionalities.
2. **Main Method or Function Declaration:** The next part of a C program is the main function. The
3. declaration of the main function is written as  int main().
4.  **Body:** The body of a function in a C program refers to the operations performed within the function. It can include actions like searching, sorting, or printing. In this example, the body of the main function prints a statement called “Hello, World!” using the function **printf("Hello, World!");**
5. **Return Statement:** This command is used to terminate a C program from the main function, and it returns the value **0**.

# I/O statements and formatted I/O
- In 'C' the input/output functions can be classified in two categories on the basis of how they handle the input/output in terms of formatting or structure.
- formatted I/O functions help to display the output to the user in different formats using 'the format specifiers'. These I/O support all datatypes like int, float, char and many more.

The formatted I/O functions in C are discussed below:
1. `printf()`
printf() function is used in a c program to display any value like float, integer, character, string etc on the console screen. It is a pre-defined function that is already declared in the `stdio.h` (header file).
e.g.,
``` c
#include <stdio.h>
int main() {
  // creating an int type variable
  int a = 20;

  // Printing the value of a variable
  printf("%d\n", a);

  // Printing a string
  printf("This is a String");
  return 0;
}
```
Output:
``` bash
20
This is a String
```
2. `Scanf()`
Scanf() function is used in the 'c' program for reading or taking any value from the keyboard by the user these value can be of any data type like integer, float, character, string and many more. This is a pre-defined function declared in `Studio.h` (header file). In `Scanf();` function we use `&` (address - of operator) which is used to store the variable value on the memory location of that variable.

Syntax:
``` c
Scanf("format specifier", &Var1, &Var2,...&Var3);
```

**format specifier for I/O we the use:**
- `%d` for int
- `%f` for float
- `%c` for char
- `%s` for string
- `%li` for long int
- `%lu` unsigned long int
- `%Lf` long double.

Example:
``` c
#include <stdio.h>
int main()
{
int num1;
／/ Printing a message on
／／ the output screen
printf("Enter a integer number: \n");
／／ Taking an integer value
／／ from keyboard
scanf("%d",&num1);
／／ Displaying the entered value
printf("You have entered %d", num1);
return θ;
}
```
Output:
``` bash
Enter a integer number:
You have entered: 13
```
3. `getch()`
getch() function reads a single character from the keyboard by the user and displays it on the console
screen and immediately returns without pressing the enter key. This ==function is declared in== conio.h (header file).

Syntax: `getch();`

Example:
``` c
#include <conio.h>
#include <stdio.h>
int main()
｛
printf("Enter any character:");
/* Reads a character and
displays immediately
*/
getch();
return 0;
｝
}
```
Output:
``` bash
Enter any character: g
```
Example:
``` c
#include <conio.h>
#include <stdio.h>
int main()
｛
printf("Enter any character: ");
/* Reads a character but 
doses not displays
*/
getch();
return 0;
｝
```

Output:
``` bash
Enter any character:
```

# Unformatted I/O Functions 
Unformatted I/O functions are used only for character data type or character array/string and cannot be used for any other datatype. These functions are used to read single input from the user at the console and it allows to display the value at the console. The unformatted I/O functions in C are discussed below:

getch() function reads a single character from the keyboard by the user but doesn't display that character on the console screen and immediately returned without pressing enter key. This function is declared in conio.h(header file). getch() is also used for hold the screen.
Syntax:
``` c
getch();
```

# How to setup a IDE for C? (Bonus Topic)
- For web-based IDE you can use: [Programiz](https://www.programiz.com/c-programming/online-compiler) (No setup needed).
- For android devices you can use: [Coding In C](https://play.google.com/store/apps/details?id=com.kvassyu.coding2.c&hl=en-IN)
- For Windows you can use: [VS Code](https://code.visualstudio.com/download) [follow this guide to setup A C/C++ Environment on VS Code](https://code.visualstudio.com/docs/languages/cpp) OR Turbo C++ (THIS is *not* recommended) OR web-based version of [Turbo C++](https://sounddrill31.github.io/TurboCPP-Web).
> [!NOTE]
> If you run into any problems "Just look it up", your web browser is your best friend. If you're going to ask A LLM (AI) make that remove "Personal Info" such as File names OR run a model on your machine [Here's How](https://www.reddit.com/search/?q=How+to+run+a+AI+model+locally&cId=d502bcb0-6e15-49b9-9f0c-17bf5f0a6fcf&iId=d6722066-c8f5-4da1-bdeb-1454ae7a6d36)

<img width="555" height="559" alt="End_Card" src="https://github.com/user-attachments/assets/c521f37a-d3e4-4d6e-b279-eba4c3b67f25" />


[Ne<img width="474" height="355" alt="Unit_1_C pdf-image-012" src="https://github.com/user-attachments/assets/af7a997b-916f-462d-b734-a54eefd43c13" />



Software used:
----
<img width="474" height="474" alt="Unit_1_C pdf-image-013" src="https://github.com/user-attachments/assets/806dbb06-eada-46e8-be30-5ec97d6bca21" />
<img width="474" height="485" alt="Unit_1_C pdf-image-014" src="https://github.com/user-attachments/assets/b36a6303-b4fe-48eb-b68c-b345db879b72" />
<img width="474" height="355" alt="Unit_1_C pdf-image-015" src="https://github.com/user-attachments/assets/ca197a1c-d354-4ac2-ae39-9a6e01ccf22e" />
<img width="474" height="237" alt="Unit_1_C pdf-image-016" src="https://github.com/user-attachments/assets/afa4f439-0b68-461e-ba4d-54db482e3831" />

1. VS code, GitHub, and Obsidian for writing and formatting.
2. Noted.md (Home brew) with Gemini.
3. Images from GeeksforGeeks.com,  Excalidraw's AI, and Internet archive.
