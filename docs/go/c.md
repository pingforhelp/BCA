Q1. Write a program to check whether the given number is Armstrong or not.
``` c
#include <stdio.h>  
#include <math.h>

int main() {  
  int num, digit, temp;  
  int sum = 0 , count = 0;

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


Q2. Write a program to find the sum of individual digits of a positive integer.
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

Q3. Write a program to generate the first n terms of the Fibonacci sequence.
``` c
#include <stdio.h>
#include <math.h>
int main()
 {  

  int n, a = 0 , b = 1 , c,   i;

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

Q4. Write a program to find both the largest and smallest number in a list of integer values.
```
``` c
#include <stdio.h>

int main() 
{  
  int a[50], n, i;  
  int largest, smallest;

   printf("Enter number of   elements: ");  
  scanf("%d", &n);

  printf("Enter elements:\n");  
  for(i = 0 ; i < n; i++)  
  scanf("%d", &a[i]);

largest = smallest = a[0];

  for(i = 1 ; i < n; i++) 
{  
  if(a[i] > largest)  
  largest = a[i];  

  if(a[i] < smallest)  
  smallest = a[i];  
}

printf("Largest number = %d\n", largest);  
printf("Smallest number = %d", smallest);

  return 0;  
 
}
```
