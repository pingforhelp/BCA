C PROGRAMS FOR PRACTICALS

# 1 Program to check whether the given number is Armstrong or not

Algorithm / Pseudo code
1. Read an integer number num.
2. Store the number in temp.
3. Count the number of digits in the number.
4. Reset temp to original number.
5. Find each digit and raise it to the power of digit count.
6. Add the result to sum.
7. Compare sum with original number.
8.    If equal, print Armstrong number, 
         else print Not Armstrong number

Program
``` c  
#include <stdio.h>  
#include <math.h>

int main() {  
  int num, digit, temp;  
  int sum = 0 , count = 0 ;

   printf("Enter a number: ");  
   scanf("%d", &num);

  temp = num;
  while (temp > 0)  
  {  
   temp = temp / 10 ;  
   count++;  
  }
 
  temp = num; 
  while (temp != 0)  
   
  {  
     digit = temp % 10;  
     sum = sum + pow(digit,           
     count);  
     temp = temp / 10;  
       
    }

  if (sum == num) 
{  
  printf("It is Armstrong  number.\n");  
            
}   

   
   else {
   printf("Not Armstrong number.\n");  
    
}

     return 0; 

 }
```
Output (Armstrong If-case)
``` bash
Enter a number: 1634
It is Armstrong number.
```
Output (Non-Armstrong else-case)
``` bash
Enter a number: 123  
Not Armstrong
```

# 2. Program to find the sum of individual digits of a positive integer

Algorithm / Pseudo code
1. Read a positive integer n.
2. Initialize sum = 0.
3. While n > 0:
   o Find digit using n % 10.  
   o Add digit to sum.  
   o Remove digit using n = n / 10.
4. Display the sum.

Program
``` c
#include <stdio.h>
int main() {  

 int n, sum = 0 , digit;

  printf("Enter a positive integer: ");  
  scanf("%d", &n);

   while(n > 0) 
{  
   digit = n % 10 ;  
   sum = sum + digit;  
   n = n / 10;
   }
   
   printf("Sum of digits = %d", sum);  

 return 0; 
  
   
}
```
Output
``` bash
Enter a positive integer: 256  
Sum of digits = 13
```

# 3 Program to generate the first n terms of the Fibonacci sequence

Algorithm / Pesudo code
1. Read the value of `n`.
2. Initialize a = 0, b = 1.
3. Print the first two Fibonacci numbers.
4. Repeat from 3 to n:
    o c = a + b  
    o Print c  
    o Update a = b, b = c.


Program
``` c
#include <stdio.h>
int main() {  

 int n, a = 0 , b = 1 , c, i;

  printf("Enter number of terms: ");  
  scanf("%d", &n);

  printf("Fibonacci series: ");  
  printf("%d %d ", a, b);

   for(i = 3 ; i <= n; i++) {  
   c = a + b;  
   printf("%d ", c);  
   a = b;  
   b = c;  
        }

return 0;  
}
```
Output
``` bash
Enter number of terms: 16  
Fibonacci series: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 
```

# 4. Program to find the largest and smallest number in a list of integers

Algorithm / Pesduo code
1. Read the number of elements n.
2. Read n integers into an array.
3. Assume first element as largest and smallest.
4. Compare remaining elements.
5. Display largest and smallest values.

Program
``` c
#include <stdio.h>

int main() {  
int a[50], n, i;  
int largest, smallest;

printf("Enter number of elements: ");  
scanf("%d", &n);

printf("Enter elements:\n");  
for(i = 0 ; i < n; i++)  
scanf("%d", &a[i]);

largest = smallest = a[0];

for(i = 1 ; i < n; i++) {  
if(a[i] > largest)  
largest = a[i];  
if(a[i] < smallest)  
smallest = a[i];  
}

printf("Largest number = %d\n", largest);  
printf("Smallest number = %d", smallest);

return 0 ;  
}
```
Output
``` bash
Enter number of elements: 5  
4 9 2 7 1  
Largest number = 9  
Smallest number = 1
```

# 5. Program to demonstrate Call by Value and Call by Address

Algorithm / Pesduo code
1. Define a function swapValue() for Call by Value.
2. Define a function swapAddress() for Call by Address.
3. Pass values to swapValue() – values will not change.
4. Pass addresses to swapAddress() – values will change.
5. Display values before and after swapping.

Program
``` c
#include <stdio.h>
#include <math.h>
void swapValue(int a, int b) {  
int temp = a;  
a = b;  
b = temp;  
printf("Inside Call by Value: a=%d b=%d\n", a, b);  
}

void swapAddress(int *a, int *b) {  
int temp = *a;  
*a = *b;  
*b = temp;  
}

int main() {  
int x = 10 , y = 20 ;

printf("Before swapping: x=%d y=%d\n", x, y);

swapValue(x, y);  
printf("After Call by Value: x=%d y=%d\n", x, y);

swapAddress(&x, &y);  
printf("After Call by Address: x=%d y=%d\n", x, y);

return 0 ;  
}
```

Output
``` bash
./call
Before swapping: x = 10 y = 20
Inside Call by Value: a = 20 b = 10
After Call by Value: x = 10 y = 20
After Call by Address: x = 20 y = 10
PS C:\Users\tamim\C> +
```
# 6. Program to perform various string operations

Algorithm / Pesudo code
1. Read two strings.
2. Find length of string.
3. Copy one string into another.
4. Concatenate two strings.
5. Display results.

Program
``` c
#include <stdio.h>
#include <string.h>

int main()  
{
  char s1[50], s2[ 50];
  printf("Enter first string: ");
  scanf("%s", s1);
  printf("Enter second string: ");
  scanf("%s", s2);
 
   printf("Length of first string = %lu\n", strlen(s1));
   strcpy(s2, s1);
   
   printf("Copied string = %s\n", s2);
   strcat(s1, s2);

   printf("Concatenated string = %s\n", s1);

  return 0; 
 }
```
Output
``` bash
Enter first string: Hello
Enter second string: Hi
Length of first string = 5
Copied string = Hello
Concatenated string = HelloHello
```

# 7 Program to search an element in a given list of values

Algorithm / Pesduo code
1. Read number of elements n.
2. Read array elements.
3. Read element to search.
4. Compare each element with key.
5. Display position if found.

Program
```c
#include <stdio.h>

int main() {
int a[ 50 ], n, i, key, found = 0 ;

printf("Enter number of elements: ");
scanf("%d", &n);

printf("Enter elements:\n");
for(i = 0 ; i < n; i++)
scanf("%d", &a[i]);

printf("Enter element to search: ");
scanf("%d", &key);

for(i = 0 ; i < n; i++) {
if(a[i] == key) {
found = 1 ;
break;
}
}

if(found)
printf("Element found at position %d", i + 1 );
else
printf("Element not found");

return 0 ;
}
```

Output
``` bash
Enter element to search: 7
Element found at position 3
```
# 8 Program to add two matrices using functions

Algorithm / Pesduo
1. Read number of rows and columns.
2. Read two matrices.
3. Pass matrices to a function.
4. Add corresponding elements.
5. Display the result matrix.
Program
#include <stdio.h>

void addMatrix(int a[ 10 ][ 10 ], int b[ 10 ][ 10 ], int c[ 10 ][ 10 ], int r, int col)
{
int i, j;
for(i = 0 ; i < r; i++)
for(j = 0 ; j < col; j++)
c[i][j] = a[i][j] + b[i][j];
}

int main() {
int a[ 10 ][ 10 ], b[ 10 ][ 10 ], c[ 10 ][ 10 ];
int r, col, i, j;

printf("Enter rows and columns: ");
scanf("%d %d", &r, &col);

printf("Enter first matrix:\n");
for(i = 0 ; i < r; i++)
for(j = 0 ; j < col; j++)
scanf("%d", &a[i][j]);

printf("Enter second matrix:\n");
for(i = 0 ; i < r; i++)
for(j = 0 ; j < col; j++)
scanf("%d", &b[i][j]);

addMatrix(a, b, c, r, col);

printf("Sum of matrices:\n");
for(i = 0 ; i < r; i++) {
for(j = 0 ; j < col; j++)
printf("%d ", c[i][j]);
printf("\n");
}

return 0 ;
}

Output
Sum of matrices:
6 8
10 12

9. Program to calculate factorial using recursive function
Algorithm
1. Read an integer n.
2. Call recursive function fact(n).
3. If n == 0, return 1.
4. Else return n * fact(n-1).
5. Display factorial value.
Program
#include <stdio.h>

int fact(int n) {
if(n == 0 )
return 1 ;
else
return n * fact(n - 1 );
}

int main() {
int n;

printf("Enter a number: ");
scanf("%d", &n);

printf("Factorial = %d", fact(n));
return 0 ;
}

Output
Enter a number: 5
Factorial = 120

10. Program for multiplication of two N × N matrices
Algorithm
1. Read order n.
2. Read two matrices.
3. Multiply matrices using three nested loops.
4. Store result in third matrix.
5. Display resultant matrix.
Program
#include <stdio.h>

int main() {
int a[ 10 ][ 10 ], b[ 10 ][ 10 ], c[ 10 ][ 10 ];
int n, i, j, k;

printf("Enter order of matrix: ");
scanf("%d", &n);

printf("Enter first matrix:\n");

for(i = 0 ; i < n; i++)
for(j = 0 ; j < n; j++)
scanf("%d", &a[i][j]);

printf("Enter second matrix:\n");
for(i = 0 ; i < n; i++)
for(j = 0 ; j < n; j++)
scanf("%d", &b[i][j]);

for(i = 0 ; i < n; i++) {
for(j = 0 ; j < n; j++) {
c[i][j] = 0 ;
for(k = 0 ; k < n; k++)
c[i][j] += a[i][k] * b[k][j];
}
}

printf("Resultant matrix:\n");
for(i = 0 ; i < n; i++) {
for(j = 0 ; j < n; j++)
printf("%d ", c[i][j]);
printf("\n");
}

return 0 ;
}

Output
Resultant matrix:
19 22
43 50

11. Program to sort a list of integers in ascending order
Algorithm
1. Read number of elements n.
2. Read array elements.
3. Compare and swap elements using nested loops.
4. Display sorted array.
Program
#include <stdio.h>

int main() {
int a[ 50 ], n, i, j, temp;

printf("Enter number of elements: ");
scanf("%d", &n);

printf("Enter elements:\n");
for(i = 0 ; i < n; i++)
scanf("%d", &a[i]);

for(i = 0 ; i < n - 1 ; i++) {
for(j = i + 1 ; j < n; j++) {
if(a[i] > a[j]) {
temp = a[i];
a[i] = a[j];
a[j] = temp;
}
}
}

printf("Sorted list:\n");
for(i = 0 ; i < n; i++)
printf("%d ", a[i]);

return 0 ;
}

Output
Sorted list:
1 3 5 7 9

12. Program to calculate employee salary using structure
Algorithm
1. Define Employee structure.
2. Read employee details.
3. Calculate:
o DA = 30% of Basic Pay
o HRA = 15% of Basic Pay
o Deduction = 10% of (Basic + DA)
4. Calculate Gross and Net Salary.
5. Display salary details.
Program
#include <stdio.h>

struct Employee {
int id;
char name[ 30 ], designation[ 30 ];
float basic, da, hra, gross, deduction, net;
};

int main() {
struct Employee e;

printf("Enter Employee ID: ");
scanf("%d", &e.id);

printf("Enter Name: ");
scanf("%s", e.name);

printf("Enter Designation: ");
scanf("%s", e.designation);

printf("Enter Basic Pay: ");
scanf("%f", &e.basic);

e.da = 0.30 * e.basic;
e.hra = 0.15 * e.basic;
e.deduction = 0.10 * (e.basic + e.da);
e.gross = e.basic + e.da + e.hra;
e.net = e.gross - e.deduction;

printf("\nGross Salary = %.2f", e.gross);
printf("\nNet Salary = %.2f", e.net);

return 0 ;
}

Output
Gross Salary = 45500.
Net Salary = 40950.

13. Program to read/write data from/to a file
Algorithm
1. Open a file in write mode.
2. Read characters from keyboard and write into file until #.
3. Close the file.
4. Open the file in read mode.
5. Read and display file contents.
6. Close the file.
Program
#include <stdio.h>

int main() {
FILE *fp;
char ch;

fp = fopen("data.txt", "w");
printf("Enter text (end with #):\n");

while((ch = getchar()) != '#')
fputc(ch, fp);

fclose(fp);

fp = fopen("data.txt", "r");
printf("\nFile contents:\n");

while((ch = fgetc(fp)) != EOF)
putchar(ch);

fclose(fp);
return 0 ;
}

Output
Enter text (end with #):
Hello File#
File contents:
Hello File

14. Program to reverse the contents of a file and store in
another file
Algorithm
1. Open source file in read mode.
2. Read contents into a string.
3. Reverse the string.
4. Open destination file in write mode.
5. Write reversed content into destination file.
6. Close both files.
Program
#include <stdio.h>
#include <string.h>

int main() {
FILE *fp1, *fp2;
char str[ 200 ];
int i;

fp1 = fopen("input.txt", "r");
fgets(str, 200 , fp1);
fclose(fp1);

fp2 = fopen("reverse.txt", "w");
for(i = strlen(str) - 1 ; i >= 0 ; i--)

fputc(str[i], fp2);

fclose(fp2);

printf("File reversed successfully");
return 0 ;
}

Output
File reversed successfully

15. Program using Book structure with file operations
Algorithm
1. Define Book structure.
2. Display menu options.
3. Add book details and store in file.
4. Search book using ISBN.
5. Update book details using ISBN.
6. Delete book using ISBN.
7. Display remaining books.
Program
#include <stdio.h>

struct Book {
int isbn, pages;
char title[ 30 ], author[ 30 ], publisher[ 30 ];
float price;
};

int main() {
struct Book b;
FILE *fp, *temp;
int choice, key, found;

while( 1 ) {
printf("\n1.Add\n2.Search\n3.Update\n4.Delete\n5.Exit\n");
scanf("%d", &choice);

if(choice == 5 ) break;

if(choice == 1 ) {
fp = fopen("books.dat", "ab");
printf("Enter ISBN, Title, Author, Price, Pages,
Publisher:\n");
scanf("%d %s %s %f %d %s",

&b.isbn, b.title, b.author, &b.price, &b.pages,
b.publisher);
fwrite(&b, sizeof(b), 1 , fp);
fclose(fp);
}

if(choice == 2 ) {
printf("Enter ISBN to search: ");
scanf("%d", &key);
fp = fopen("books.dat", "rb");
found = 0 ;
while(fread(&b, sizeof(b), 1 , fp)) {
if(b.isbn == key) {
printf("Book Found:\n%s %s %.2f %d %s\n",
b.title, b.author, b.price, b.pages,
b.publisher);
found = 1 ;
}
}
if(!found)
printf("Book not found");
fclose(fp);
}

if(choice == 3 ) {
printf("Enter ISBN to update: ");
scanf("%d", &key);
fp = fopen("books.dat", "rb+");
while(fread(&b, sizeof(b), 1 , fp)) {
if(b.isbn == key) {
printf("Enter new Price: ");
scanf("%f", &b.price);
fseek(fp, -sizeof(b), SEEK_CUR);
fwrite(&b, sizeof(b), 1 , fp);
}
}
fclose(fp);
}

if(choice == 4 ) {
printf("Enter ISBN to delete: ");
scanf("%d", &key);
fp = fopen("books.dat", "rb");
temp = fopen("temp.dat", "wb");
while(fread(&b, sizeof(b), 1 , fp)) {
if(b.isbn != key)
fwrite(&b, sizeof(b), 1 , temp);
}
fclose(fp);
fclose(temp);
remove("books.dat");
rename("temp.dat", "books.dat");
printf("Book deleted successfully");
}
}
return 0 ;
}

Output
1.Add
2.Search
3.Update
4.Delete
5.Exit
Book Found:
CProgramming Dennis 450.00 300 Pearson

This is a offline tool, your data stays locally and is not send to any server!
Feedback & Bug Reports**
