# Problem sloving using C

**Unit 2. Control statements:**
- Decision making statements: if, if else, else if ladder, switch statements. 
- Loop control statements: while loop, for loop and do-while loop. 
- Jump Control statements: break, continue and goto.

# if, if else, else if ladder, and switch statements.

``` c
#include <stdio.h>
int main() {
    int num = 10;
    
    if (num > 5) {
        printf("Number is greater than 5");
    }
    
    return 0; 
}
```
``` C
#include <stdio.h>
int main() {
    int num = 3;
    
    if (num % 2 == 0) {
        printf("Even number");
    } else {
        printf("Odd number");
    }
    
    return 0;
}
```
``` c
#include <stdio.h>

int main() {
    int i = 10;

    if (i > 18) {
        printf("Eligible for casting vote");
    }
    else {
        printf("Not Eligible, return when you're 18+.");
    }
    return 0;
}
```
``` c
#include <stdio.h>
int main() {
    int marks = 75;
    
    if (marks >= 90) {
        printf("Grade: A");
    } else if (marks >= 75) {
        printf("Grade: B");
    } else if (marks >= 50) {
        printf("Grade: C");
    } else {
        printf("Fail");
    }
    
    return 0;
}
````
```c
#include <stdio.h>
int main() {
    int day = 3;
    
    switch(day) {
        case 1: printf("Monday"); break;
        case 2: printf("Tuesday"); break;
        case 3: printf("Wednesday"); break;
        case 4: printf("Thursday"); break;
        case 5: printf("Friday"); break;
        default: printf("Weekend");
    }
    
    return 0;
```
