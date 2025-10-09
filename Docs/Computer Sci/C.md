# Problem Solving using C
Breakout of Units, and Sub-topic:

**Unit 1. Introduction to computer programming:**
- Introduction: Types of software, Compiler and interpreter, Concepts of Machine level, Assembly
level and high-level programming, Flowcharts and Algorithms.
- Fundamentals of C: History of C, Features of C, C Tokens-variables and keywords and identifiers, constants and Data types, Rules for constructing variable names, Operators.
- Structure of C program, Input/output statements in C-Formatted and Unformatted I/O.
-----------
**Unit 2. Control statements:**
- Decision making statements: if, if else, else if ladder, switch statements. 
- Loop control statements: while loop, for loop and do-while loop. Jump Control statements: break,continue and goto.
---------
**Unit 3. Derived data types in C:**
- Arrays: One Dimensional arrays - Declaration, Initialization and Memory representation; Two
Dimensional arrays -Declaration, Initialization and Memory representation. Strings: Declaring &
Initializing string variables; String handling functions, Character handling functions
----
**Unit 4. Functions:**
- Pointers: Pointer data type, Pointer declaration, initialization, accessing values using pointers. Pointer arithmetic, Pointers and arrays. Function Prototype, definition and calling. Return statement. Nesting of functions. Categories of functions. Recursion (Basic Concept only). Parameter Passing by address & by value. Local and Global variables. Storage classes: automatic, external, static and register.
---
**Unit 5. Dynamic Memory Management:**
- Introduction: Functions-malloc, calloc, realloc, free Structures: Basics of structure, structure
members, accessing structure members, nested structures, array of structures, structure and
functions, structures and pointers.
- Unions: Union definition; difference between Structures and
- Unions. Working with text files - modes: opening, reading, writing and closing .txt files.
----

# Unit 1. Introduction to computer programming

Introduction: Computer Programming is the process of designing and writing a sequence of instructions（a program) that tells a computer how to perform tasks. A program translates human logic into a form that hardware can execute.
Think of it likewriting a recipe for a computer. The recipe is the program, the ingredients are the data, and the steps are the instructions. The person who writes these instructions is called a programmer, and they write them in a special language called a programming language.The entire set of instructions written in a programming language is called source code.

programming matters:
- Automates tasks, performs computations fast.
- Builds software systems (apps, OS, games, web services).
- Bridges problem-solving (algorithmic thinking) and machine execution.

Types of software: Software is a collection of programs and data that tells a computer what to do. It is broadly
divided into two main categories:
1. System Software: This software acts as an intermediary between the computer hardware and the user's applications. Its main purpose is to manage the computer's resources. Examples:
   - Operating Systems (OS): Windows, MacOS, Linux, Android. They manage all
other software and hardware on the computer.
   - Device Drivers: Software that allows the OS to communicate with hardware
devices like printers, keyboards, and webcams.
   - Utilities: Programs designed for system maintenance, like antivirus software or disk cleanup tools.
2. Application Software: This software is designed to perform specific tasks for the end-user. It runs on top of the system software.

Examples:
- Web Browsers: Mozilla Firefox, DuckDuckgo.
- Word Processors: Microsoft Word, Google Docs, LibreOffice.
- Games: Fortnite, Minecraft, CSGO.
- Media Players: VLC Media Player, MPCL.

Types Of Software:
1. System Application Software.
2. Operating System.
3. Language processor.
4. General purpose.
5. Customised Software and device drivers:
- Iinux.
- Interpreter.
- MS-word.
- Railways reservation.
- Windows.
- Compiler.
- Photshop.
- "System".

![PROBLEM SOLVING USING C_2](https://github.com/user-attachments/assets/1686b63e-c5ca-4d3c-ac39-4824755c6eeb)


# Compiler and interpreter

Computers only understand machine code (binary O’s and 1’s). Since we write programs in high-level languages (like C or Python), they need to be translated. Compilers and interpreters are two types of translator programs that do this job.

- Compiler: A compiler reads the entire source code at once and translates it into a complete machine code file called an executable or object file. This file can then be run by the computer.
- Works: Scans the whole program and reports all errors at the end.
- Advantage of compiler:
- Execution Speed: Generally faster because the translation is done only once.
- Examples: C, C++, Java use compilers.
  
![PROBLEM SOLVING USING C_3](https://github.com/user-attachments/assets/485c995f-3d76-4d01-9d16-7178735ef45c)

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

1. Machine Language (also called Machine Code) Machine language is the lowest-level programming language, directly understood by the computer's central processing unit (CPU). It consists entirely of binary code (1s and Os)
and represents the raw instructions that the CPU can execute.
- This is the lowest level, consisting of binary digits (Os and 1s).
- It is the only language a computer's CPU can directly understand.
- It is extremely difficult for humans to read and write.
- It is machine-dependent, meaning a program written for one computer might not work on another.

Example: A machine code instruction might look like 10110000 01100001, which could correspond to an operation like loading a value into a register on a specific CPU architecture.

2. Assembly Level Language (Low-Level): Assembly language is a low-level programming language that serves as a symbolic representation of machine code. Each assembly language instruction corresponds directly to a machine language instruction, but the code is written using readable text and mnemonic codes rather than binary.
- This is a step above machine language. It uses English-like mnemonics (short codes) to represent machine instructions, such as ADD for addition or MOV for moving data.
- An assembler is required to translate assembly code into machine code.
- It is easier to work with than machine language but is still machine-dependent.

**Example:** Assembly Copy codeMOV AX, 1; Move the value 1 into register AX ADD AX,BX; Add the value in register BX to AX These are mnemonics and are typically converted to machine code by an assembler.

3. High-Level Language (HLL): High-level languages are programming languages that provide a greater level of abstraction from the hardware, making them easier for humans to read and write. High-level languages are designed to be portable across different hardware platforms.
- These languages use English-like syntax and are the easiest for humans to read, write, and maintain.
- They are machine-independent, meaning a program can run on different types of computers with little or no modification.
- They require a compiler or interpreter to be translated into machine code.

**Examples:** C, C++, Java, Python, and C#.
  - Python: A very highlevel, interpreted language.
  -  Java: A high-level, object-oriented language that runs on the Java Virtual Machine(JVM).
  -  C/C++: High-level languages, though closer to the hardware than some others, still abstract many hardware details compared to assembly or machine code.

# Flowcharts and Algorithms

![c5b951d4](https://github.com/user-attachments/assets/db3121c9-c1af-47fc-85c9-649a22c04faf)
*Fig 1.3* 

# History of C
C is a general-purpose programming language which is an extremely popular. It is known for being simple and flexible. It is a structured programming language used to write various applications like operating systems, compilers, Windows, Linux, Unix, Game development, and more. 
- The father of programming languages is **ALGOL**. It was first introduced in **1960**. ALGOL introduced the concept of "Structured Programming".  
- In **1967**, a new computer programming language was announced called **BCPL (Basic Combined Programming Language)**.  
- After three years, in **1970**, a new programming language called **'B'** was created.  
- In **1972**, a new computer programming language was created for scientific and commercial purposes. **Dennis Ritchie** created a new programming language called **'C'** at Bell Labs.  
- 'C' became a popular and powerful programming language. It remained standardised when the **American National Standards Institute (ANSI)** defined a commercial standard for the C language in **1989**. Later, it was approved by the **International Standards Organisation (ISO)** in **1990**, so this version of the language is called **ANSI C**.  

# Structure of a Program in C  
```c
#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}
````
The components of the above structure are:
1. **Header files:** The first and foremost component in a C program is the header file.
* A header file is a file with the extension **.h**, which contains C function declarations. For example, **stdio.h** defines standard input and output functionalities.
2. **Main Method or Function Declaration:** The next part of a C program is the main function. The declaration of the main function is written as **int main()**.
3. **Body:** The body of a function in a C program refers to the operations performed within the function. It can include actions like searching, sorting, or printing. In this example, the body of the main function prints a statement called “Hello, World!” using the function **printf("Hello, World!");**
4. **Return Statement:** This command is used to terminate a C program from the main function, and it returns the value **0**.

> [!NOTE]
> This content changed or modified for better readable, editing of Facial and language wherever mistakes are made by the Teacher.

Img/pdf cnverted to .md using:

          ███╗   ██╗ ██████╗ ████████╗███████╗██████╗    ███╗   ███╗██████╗
          ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗   ████╗ ████║██╔══██╗
          ██╔██╗ ██║██║   ██║   ██║   █████╗  ██║  ██║   ██╔████╔██║██║  ██║
          ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ██║  ██║   ██║╚██╔╝██║██║  ██║
          ██║ ╚████║╚██████╔╝   ██║   ███████╗██████╔╝██╗██║ ╚═╝ ██║██████╔╝
          ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚═════╝ ╚═╝╚═╝     ╚═╝╚═════╝

