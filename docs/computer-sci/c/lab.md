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
 sum = sum + pow(digit, count);  
 temp = temp / 10 ;  
 }

  if (sum == num) {  
  printf("It is Armstrong number.\n");  
                 }   

   else  
   {
   printf("Not Armstrong number.\n");  
    }

return 0; }
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

Algorithm / pseudo code
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

   while(n > 0) {  
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
