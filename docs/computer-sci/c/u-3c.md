# Unit 3. Derived data types in C
- Arrays: One Dimensional arrays - Declaration, Initialization and Memory representation Two Dimensional arrays -Declaration, Initialization and Memory representation. 
- Strings: Declaring & Initializing string variables; String handling functions, Character handling functions.


# Arrays
An array is a collection and group of elements of the same data type that share a common name and are stored in contiguous memory locations. ++An array can store many elements depending on the given size.++

**Example:**
```c
int a[5] = {15, 20, 25, 30, 35};
```

**Array indexing:**
- `a[0] = 15`
- `a[1] = 20`
- `a[2] = 25`
- `a[3] = 30`
- `a[4] = 35`


# Types of Arrays
1. **One Dimensional Arrays** - Data is organized linearly in only one direction
2. **Two Dimensional Arrays** - Can have only two dimensions, data is shown in the form of matrices
3. **Multidimensional Arrays** - Can have 3 or more dimensions. In 3D arrays, data can be organized in cubes

---

# One Dimensional Arrays
C provides two types of arrays based on their size:

**1. Fixed Length Array** In fixed length arrays, the size of the array is known when the program is written. An array should be declared before using it in our program.

**Syntax:**
```c
data_type array_name[size_of_array];
```

> [!example]
```c
int a[10];
```

# 2. Variable Length Array
In variable length arrays, the size of the array is not known when the program is written.

> [!example]
```c
int n;
scanf("%d", &n);  // User enters 30
int a[n];  // a[30]
```
# Initialization of Arrays
After declaring an array, it should be initialized with some values. Initialization can be done in ==2 ways.==

#### 1. Compile Time Initialization

In this, we can assign values to the array directly in the program.

**Syntax:**
```c
data_type array_name[size] = {list of values};
```

> [!example]
> Basic Initialization:
```c
int a[5] = {1, 2, 3, 4, 5};
```

**Initialize without size:**
```c
int a[] = {1, 2, 3, 4, 5};
```

**Partial Initialization:**
```c
int a[5] = {1, 2};  // Remaining elements are initialized to 0
```

**Program Example:**
```c
#include <stdio.h>

int main() {
    int a[5] = {10, 20, 2, 4, 7};
    int i;
    
    for (i = 0; i < 5; i++) {
        printf("%d\t", a[i]);
    }
    return 0;
}
```

**Output:**
``` bash
10    20    2    4    7
```

2. Run Time Initialization In this, we have to assign values during runtime.

> [!example]
```c
#include <stdio.h>

int main() {
    int i, a[5];
    
    printf("Enter Array Values: ");
    for (i = 0; i < 5; i++) {
        scanf("%d", &a[i]);
    }
    
    printf("Array elements are: ");
    for (i = 0; i < 5; i++) {
        printf("%d\t", a[i]);
    }
    return 0;
}
```

**Output:** 
``` bash
Enter Array Values: 1 2 3 4 5
Array elements are: 1    2    3    4    5
```




