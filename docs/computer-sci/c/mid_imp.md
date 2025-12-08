# Mid Problem Sloving using C

# UNIT-I Intro. to Computer Programming

1. Explain the structure of a C program. Describe each part with an example. ++*10 Marks Questions*++
Ans: A **C program** is divided into **6 sections**:
1. **Documentation Section**
2. **Link Section**
3. **Definition Section**
4. **Global Declaration Section**
5. **main() Function Section**
6. **Sub-program Section** (User-defined functions)

**Documentation Section**
* This part contains information about the program such as **name, purpose, author, and date**.
* It is written as **comments**, and the compiler **ignores it**.

**Preprocessor Section**
* This section includes header files using the **#include statement**.
* Header files contain predefined functions like `printf()` and `scanf()`.

**Syntax:**
```c
#include <stdio.h>   // stdio → standard input/output
#include <math.h>    // math.h → mathematical functions
```

**main() Function Section**
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
> [!example]
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

**Subprograms (User-Defined Functions)**
* These are functions created by the **programmer** to perform specific tasks.
* They make programs **modular** and **easier to reuse**.

2. Describe machine-level, assembly-level, and high-level programming languages. Explain their advantages and disadvantages. c  
Ans: Programming languages are categorized into three levels based on their abstraction from
the hardware:
1. Machine Language (also called Machine Code) Machine language is the lowest-level programming language, directly understood by the computer's central processing unit (CPU). It consists entirely of binary code (1s and Os) and represents the raw instructions that the CPU can execute:
- This is the lowest level, consisting of binary digits (Os and 1s).
- It is the only language a computer's CPU can directly understand.
- It is extremely difficult for humans to read and write.
- It is machine-dependent, meaning a program written for one computer might not work on another.
> [!example]
> A machine code instruction might look like 10110000 01100001, which could correspond to an operation like loading a value into a register on a specific CPU architecture.

2. Assembly Level Language (Low-Level): Assembly language is a low-level programming language that serves as a symbolic representation of machine code. Each assembly language instruction corresponds directly to a machine language instruction, but the code is written using readable text and mnemonic codes rather than binary.
- This is a step above machine language. It uses English-like mnemonics (short codes) to represent machine instructions, such as ADD for addition or MOV for moving data.
- An assembler is required to translate assembly code into machine code.
- It is easier to work with than machine language but is still machine-dependent.
> [!example]
> Assembly Copy codeMOV AX, 1; Move the value 1 into register AX ADD AX,BX; Add the value in register BX to AX These are mnemonics and are typically converted to machine code by an assembler.
3. High-Level Language (HLL): High-level languages are programming languages that provide a greater level of abstraction from the hardware, making them easier for humans to read and write. High-level languages are designed to be portable across different hardware platforms.
- These languages use English-like syntax and are the easiest for humans to read, write, and maintain.
- They are machine-independent, meaning a program can run on different types of computers with little or no modification.
- They require a compiler or interpreter to be translated into machine code.
> [!example]
> C, C++, Java, Python, and C#.
> - Python: A very highlevel, interpreted language.
> -  Java: A high-level, object-oriented language that runs on the Java Virtual Machine(JVM).
> -  C/C++: High-level languages, though closer to the hardware than some others, still abstract many hardware details compared to assembly or machine code.

3. What are Operators in C? Explain categories with examples. ++*10 Marks Questions*++n
Ans: Operations are used to perform functions such as `+`.



5. What is a flowchart? Explain symbols and draw a flowchart for greatest of three numbers. ++*10 Marks Questions*++
Ans: Flow chart use different symbols to perform different operations in a program.

The basic symbols used in flow chart design are given below:
1. Terminal: The terminal is represented by a rectangle it has at rounded ends. This symbol is used to identify indicate the beginning (Start & end) termination (end) of the algorithm. Terminal is denoted by around rectangle or vowel shape.
2. Input / output OR I/O: The input (&) output is represented by a parallelogram. This symbol represented an input taken from the user & output given to the user.
3. Flow line: The flow line are represented by array/whiteads that are used connect symbol. These lines indicated the sequence of steps and flow of operations The flow line is denoted by array symbol and here's an image of it.
4. Processing: The processing is represented by a rectangle
5. This symbol used for representing all arithmetic and data moment instructions. This symbol is used logic process of moving data from one memory location to another.
6. Decisions & conditions: A program may have multiple execution parts in order to select the direction of program control. The decision is denoted by diamond shape. The program should continue one of two routes (if and else) that 'yes' & 'no'.
7. Connector: The connector is used to join different flow charts in a program. The connector is denoted circle shape.


1. History of C and it's versions. ++*5 Marks Questions*++
Ans: Dennis Ritchie developed **C** to make *system software* (like operating systems). **UNIX** is one of the first operating systems written in **C**, which made it portable and efficient.


| Version | Year | Description                                 |
| ------- | ---- | ------------------------------------------- |
| K&R C   | 1978 | First official version (by Dennis Ritchie). |
| ANSI C  | 1989 | Standardized the language.                  |
| C89 / C90 | 1989–1990 | International Standard (ANSI: American National Standards Institute) |
| C99       | 1999      | Added new features like inline functions, variable-length arrays     |
| C11       | 2011      | Added multi-threading support                                        |
| C17 / C18 | 2017–2018 | Minor updates & fixes                                                |

3. Explain formatted and unformatted I/O functions (printf, scanf, gets, puts). ++*5 Marks Questions*++
Ans:  
4. Short notes on Keywords, Identifiers, Variables, and Constants. ++*5 Marks Questions*++
Ans: 

# UNIT-II: Control Statements

1. Explain decision-making statements in C: if, if-else, else-if ladder, and switch with examples. ++*10 Marks Questions*++
Ans:

2. Describe loop control statements (while, for, do-while). Compare their working. ++*10 Marks Questions*++
Ans:

3. Write a menu-driven C program using switch and loops (calculator, grade system, electricity bill). ++*10 Marks Questions*++
Ans:

4. Explain break, continue, and goto statements with programs. ++*5 Marks Questions*++
Ans:

# UNIT-III: Derived Data Types Arrays

1. Explain one-dimensional arrays: Declaration, Initialization, and Memory representation. ++*5 Marks Questions*++  
Ans:
2. Explain two-dimensional arrays: Declaration, Initialization, and Memory representation. ++*5 Marks Questions*++
Ans: 
