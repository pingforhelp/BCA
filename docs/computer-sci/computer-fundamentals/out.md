## 2.15 FORMULAS
Formulas are equations that perform calculations on data values in the worksheet. Like a calculator, Excel can execute formulas that add, subtract, multiply, and divide. A formula can be a combination of constant values, cell references, and mathematical operators (+, -, /, *, =).
- A formula starts with an equal sign (=) in a cell. This tells Excel that you are entering a formula, not just numbers.
- Type the equation you want to calculate. For example, to add 10 and 20, you type =10+20.
- Press the Enter key to complete your calculation.
- Instead of entering numbers directly in your calculation formula, you can put them in separate cells, and then reference those cells in your formula, e.g., =A1+A2+A3.Page : 2.22


Example:
The following formula multiplies 5 by 10 and then adds the value in cell A2 to the result:
`=A2+5*10`
Here,
*   5 and 10 are constant values.
*   `+` and `*` are mathematical operators.
*   A2 is the cell reference, which returns the value in cell A2.

The formula is visible only in the Formula bar. A formula’s result will change as different numbers are entered into the cells included in the formula’s definition.

Note: The cell address in a formula is known as the cell reference.


The process to copy and paste a formula is identical to that process used to copy and paste text.

To Copy and Paste a Formula:

*   Select the cell that contains the formula to be copied.


Fig. 2.32 (Copy a Formula)

Page : 226 Introduction to MS-Excel (MS-Excel Advanced Features)

2.16 CELL REFERENCING

The cell address in a formula is known as the cell reference. With the help of cell references, you can use the data in different parts of a worksheet.

Types of Cell Referencing:

There are three types of cell references:

(1) Relative Reference: When you create a formula, references to cell(s) are usually based on the position relative to the cell. When you copy or move a formula to other cells, the reference cell automatically changes.

Example:

In Figure 2.36, the formula in A3 is =A1+A2. When you copy the formula from A3 to B3, Excel automatically changes the reference to match the location of cells, i.e. it becomes B3=B1+B2.

(2) Absolute Reference: Absolute reference is used when you do not want to change the address of the cell on copying the formula to another cell. For this purpose, you have to add the dollar symbol ($) before the column and the row number.

Example:

*   Enter the numbers (Figure 2.38) you want to calculate (e.g., 34,567.00 in cell B2 and 1,234.00 in cell B3).

Page: 2.25

Then, create a simple formula (=B2+B3) in cell B5.

- To create an absolute reference in the formula just created, insert a $ symbol before the B (column reference) and 2 (row reference) in the reference to B2 so the new formula reads, (= $B$2+$B$3). (Fig. 2.39)


Insert a $ value before the B and 2 to create an absolute column reference ($B) and absolute row reference ($2).

Copy and Paste the formula to another adjacent cell (D5). The formula now includes an absolute reference to B2, (= $B$2+$D$3).


The pasted cell retains the absolute reference to cell $B$2 while the second reference has changed from B3 to D3.



Page: 2.26

**(3) Mixed Reference:** It is a combination of Relative and Absolute reference. In this type of reference, either row or column has to remain fixed.

**Example:**
- Enter the numbers you want to calculate. (e.g., 10 in cell A1 and 20 in cell A2). (Fig. 2.41) Then, create a simple formula (=A1+A2) in cell A3.
- To create a mixed reference in the formula just created, insert a `$` symbol before the row reference for A1 and a `$` symbol before the column reference for A2 in the formula bar. ($A$1+$A$2). (Fig. 2.42)
- Copy and Paste the formula to another adjacent cell (B3). The formula now includes a mixed reference for cell B3 (=A1+$B$2).


# FIND AND REPLACE
Excel provides Find & Replace option for finding and replacing text within the sheet. You can use this feature to search for specific data in a worksheet or workbook and replace it with new content.

**Find and Replace data:**
Open your Excel workbook and navigate to the worksheet where you want to perform the find and replace operation.
Select the worksheet or range where you want to perform the find and replace operation. You can do this by clicking on the desired cell and dragging the mouse to select the range.

Press the keyboard shortcut "Ctrl + F" to open the Find and Replace dialog box. Alternatively, you can go to the "Home" tab in the Excel ribbon, click on the "Find & Select" button in the "Editing" group, and select "Replace" from the dropdown menu.

The "Find and Replace" dialog box will appear. In the "Find what" field, enter the text or value you want to find.


Fig. 2.44 (Find and Replace Dialog Box: Find what)

If you want to replace the found content with new text or value, enter the replacement content in the "Replace with" field. If you don't want to replace the found content, leave the "Replace with" field blank.
Page : 2.28

Introduction to MS-Excel (MS-Excel Advanced Features)

*   You can use various options in the dialog box to control the find and replace operation:
    *   "Match case": Check this option to make the search case-sensitive. It will only find matches with the exact casing you entered.
    *   "Match entire cell contents": Check this option to find and replace only when the entire cell content matches the search value.
    *   "Look in": Choose whether you want to search in the formulas, values, or comments of cells.

*   Once you have set up your find and replace criteria, you can use the following buttons to control the operation:
    *   "Find Next": Click this button to find the first occurrence of the search value. Excel will select the cell where the first match is found.Introduction to MS-Excel (MS-Excel Advanced Features) Page: 2.29

*   "Replace": Click this button to replace the selected occurrence with the replacement value and find the next match.
*   "Replace All": Click this button to replace all occurrences of the search value with the replacement value without further confirmation.
*   After you have completed the find and replace operation, click "Close" to close the dialog box.

2.18 SPEEDING UP DATA ENTRY

Excel provides some speedy tools to enter data in a faster and smarter way than via the keyboard.

2.18.1 FILL TOOL

Fill tool is a way to duplicate existing content. It basically helps you fill in sequential data without having to type in every cell.

To Use Fill Tool:

*   Start by selecting the cell to copy. You will notice a small square—called a Fill handle—in the bottom right-hand corner of the cell.

*   Hold your mouse pointer over the fill handle; it will change to a plus sign (+).
Page: 230

Introduction to MS-Excel (MS-Excel Advanced Features)

*   Click on the + sign and drag the mouse in any direction (Down, Up, Right or Left).

    |   | A   | B   |
    |---|-----|-----|
    | 1 | BCA |     |
    | 2 |     |     |
    | 3 |     |     |
    | 4 |     |     |
    | 5 |     |     |
    | 6 |     |     |
    | 7 |     |     |
    | 8 |     |     |
    | 9 |     |     |
    | 10|     |     |
    | 11|     | BCA|
    | 12|     |     |

    Fig. 2.48 (Use of Fill Handle)

OR

*   Hold down the Shift key and click in the last cell you want to fill. Thereafter, click on Home tab → Editing group → Fill command. A drop-down list will be appeared. Select the direction (say-down) in which you want to copy.

    Σ AutoSum ▾
    
    ⊞ Fill ▾
    
    ⤋ Down
    
    ⤊ Right
    
    ⤒ Up
    
    ⤄ Left
    
    Across Worksheets…
    
    Series…
    
    Justify

    Fig. 2.49 (Fill Command)

*   The result would be look like:

    |   | A   | B   |
    |---|-----|-----|
    | 1 | BCA |     |
    | 2 | BCA |     |
    | 3 | BCA |     |
    | 4 | BCA |     |
    | 5 | BCA |     |
    | 6 | BCA |     |
    | 7 | BCA |     |
    | 8 | BCA |     |
    | 9 | BCA |     |
    | 10| BCA |     |
    | 11|     |     |
    | 12|     |     |# 3.2 FILL SERIES

Page : 231

A more complex use of the Fill Tool is to use a Fill Series. The default lists are for the full abbreviated days of the week and the months of the year, but you can create your own as well.

To Add a Fill Series to a Spreadsheet:

Type the starting value for the series and then select the cells to fill.

|   | A       | B       |
|---|---------|---------|
| 1 |         |         |
| 2 |         | Sunday  |
| 3 |         |         |
| 4 |         |         |
| 5 |         |         |
| 6 |         |         |
| 7 |         |         |
| 8 |         |         |

Click on Home tab → Editing group → Fill command. A drop-down list will be appeared. Select the Series option from the list.

Σ AutoSum ▾

Fill ▾
    
Down
    
Right
    
Up
    
Left
    
Across Worksheets…
    
Series…
    
Justify

Fig. 2.50 (Fill Series)

Series dialog box will be displayed.Page : 2.32

Introduction to MS-Excel (MS-Excel Advanced Features)

*   In the Series dialog box, select AutoFill as the Series type.
*   Click OK.

*   The selected cells then fill in the other items on the list sequentially, repeating from the top of the list when they reach the end of the list.





Page: 2.34 Introduction to MS-Excel (MS-Excel Advanced book)

*   Now, the data in the spreadsheet will be organized alphabetically.

![Sorted List](https://i.imgur.com/placeholder.png)
Fig. 2.56 (Sorted List)

Note: You can sort in reverse alphabetical order by choosing Sort Z to A in the list.

To Sort in Numerical Order:

*   Select a cell in the column you want to sort (a column with numbers).

![Select a Cell from the Column](https://i.imgur.com/placeholder.png)
Fig. 2.57 (Sorting: Select a Cell from the Column)

*   Click the Sort & Filter command in the Editing group on the Home tab. Select Sort Smallest to Largest.

![Sorting: Sort Smallest to Largest](https://i.imgur.com/placeholder.png)
Fig. 2.58 (Sorting: Sort Smallest to Largest)# Introduction to MS-Excel (MS-Excel Advanced Features) Page: 2.35

Now, the data in the spreadsheet will be organized numerically from the smallest to largest value.

![Sorted List](https://i.imgur.com/some_image_url.png)
*Fig. 2.59 (Sorted List)*

Note: You can sort in reverse numerical order by choosing Sort Largest to Smallest in the list.

**To Sort by Date or Time:**

*   Select a cell in the column you want to sort.

![Sorting: Select a Cell from the Column](https://i.imgur.com/some_image_url.png)
*Fig. 2.60 (Sorting: Select a Cell from the Column)*

*   Click the Sort & Filter command in the Editing group on the Home tab. Select Sort Oldest to Newest.

![Sorting: Sort Oldest to Newest](https://i.imgur.com/some_image_url.png)
*Fig. 2.61 (Sorting: Sort Oldest to Newest)*• Now, the data in the spreadsheet will be organized by date or time.

|   | A      | B   | C     | D           |
|---|--------|-----|-------|-------------|
| 1 | Name   | Class | Roll No. | Admission Date |
| 2 | Amit   | MCA  | M301  | 01-Mar-18   |
| 3 | Rahul  | BBA  | B201  | 07-Mar-18   |
| 4 | Mohit  | BCA  | A101  | 11-Mar-18   |
| 5 | Prince | MBA  | C101  | 15-Mar-18   |

*Fig. 2.62 (Sorted List)*

Note: You can sort in reverse Date or Time order by choosing Sort Newest to Oldest in the list.

## 2.20 FILTERS

Filtering is a convenient and reliable way to locate and manage spreadsheet data. This allows you to focus on specific spreadsheet entries. Filtered data can be copied, manipulated, and printed without having to move it to a new spreadsheet.

Data filtering in Excel enables the user to work with a subset of data within the data list. When a filter is applied, only the records that match the specified criteria are displayed.  The records that do not match the criteria are hidden. Understanding hidden rows is important for accurate data analysis and reporting.

**FILTERING DATA IN EXCEL**

To filter data in Excel:

1.  Select the data range you want to filter.  Ensure your range includes column headers.
2.  On the Data tab, in the Sort & Filter group, click Filter.

*Fig. 2.63 (Filtering: Spreadsheet for Filtering)*

• Prepare your data for an Excel AutoFilter. Excel can filter the data in cells within a range, as long as there are no completely blank rows or the selected range. Once a blank row or column is encountered, fill data in the range you wish to filter is separated by blank rows or them before proceeding with the AutoFilter.

• Conversely, if there is data in the worksheet that you do not want filtered data, separate that data using one or more blank rows below the data you don’t want to filter is located beneath the data to be one completely blank row to end filtering. If the data you do located to the right of the data. Use a completely blank column.

Select any cell within the data list, and then:

|   | A       | B       | C         | D           | E        |
|---|---------|---------|-----------|-------------|----------|
| 1 | Last Name | First Name | Day       | Worker      | Hours    |
| 2 | Goel     | Amit    | Monday    | Student     | 250      |
| 3 | Kumar    | Prem    | Monday    | Student     | 400      |
| 4 | Sharma   | Puneet  | Wednesday | Staff       | 320      |
| 5 | Singh    | Gerry   | Wednesday | Student     | 530      |
| 6 | Mittal   | Arvind  | Thursday  | Volunteer   | 400      |
| 7 | Verma    | Anita   | Thursday  | Volunteer   | 300      |
| 8 | Dewan    | Vipin   | Friday    | Staff       | 350      |
| 9 | Kapoor   | Anil    | Saturday  | Volunteer   | 500      |
| 10| Babbar   | Raj     | Saturday  | Volunteer   | 660      |

*Fig. 2.63 (continued)*
roduction to MS-Excel (MS-Excel Advanced Features)

Page : 2:38

Introduction to MS-Excel (MS-Excel Advanced Features)

*   Select Filter command in Sort & Filter group under Data tab.

![Filter Command](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...)

Fig. 2.65 (Filter Command)

*   Drop-down arrows will appear at the top of each column range. If the range of cells contains column headings, the drop-down arrows will appear in the headings.

![Filtering: Drop-down arrows at the top of each column](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...)

Fig. 2.66 (Filtering: Drop-down arrows at the top of each column)

*   Click the drop-down arrow of the column containing the desired criteria to be filtered. Do the following tasks:

    (a) To filter the data by criteria, click to clear the “Select All” check box. All other check boxes will be cleared. Click to select the check boxes of the criteria that you want to appear in the filtered list.(b) Click “OK” to filter the range by the selected criteria. The filtered result will be look like this:


Fig. 2.68 (Filtering: Filtered Data)

---

**FUNCTIONS**

Functions are predefined formulas that perform calculations by using specific values, called arguments, in a particular order. Functions can be used to perform simple or complex calculations. Functions save you the time of writing lengthy formulas.

For example, you can use an Excel function called Average, to quickly find the average of a range of numbers.
Page : 2.40 
Introduction to MS-Excel (MS-Excel Advanced Features)

Each function has a specific order, called syntax, which must be strictly followed for the function to work correctly.

Syntax Order:
1. All functions begin with the = sign.
2. After the = sign, define the function name (e.g., SUM).
3. After the function name, define argument(s) enclosed by parentheses (numbers, text, or cell references). If there is more than one argument, separate each by a comma.


An example of a function with more than one argument that calculates the average of numbers in a range of cells, B3 through B10, and C3 through C10:

```
=AVG(B3:B10, C3:C10)
```

equal sign | function name | argument
------- | -------- | --------
Fig. 2.70 (Function with more than One Argument)

Excel provides hundreds of functions to assist you in different sorts of calculation. Some of the commonly used functions are discussed below:

(1) SUM

The SUM function returns the sum of values supplied. These values can be numbers, cell references, ranges, and constants, in any combination.

Example:

In the following spreadsheet, the SUM function is used to calculate the sum of the numbers 5, 6, 7, 8 & 9. In each of the five methods, the numbers are supplied to the SUM function in a different way.
## duction to MS-Excel (MS-Excel Advanced Features)

Page : 2/41

| Formulas: | | Results: | |
|---|---|---|---|
|   | A | B |   | A | B |
| 1 | 5 =SUM(5,6,7,8,9) |   | 1 | 5 | 35 |
| 2 | 6 =SUM(5,6,7,8,9) |   | 2 | 6 | 35 |
| 3 | 7 =SUM(A1, A2, A3, A4, A5) |   | 3 | 7 | 35 |
| 4 | 8 =SUM(A1, A2, A3, “8”, “9”) |   | 4 | 8 | 35 |
| 5 | 9 =SUM(A1:A5) |   | 5 | 9 | 35 |

### AVERAGE

The AVERAGE function is used to calculate the average or the arithmetic mean of a list of supplied numbers.

**Example:**

In the following spreadsheet, the AVERAGE function is used to calculate the arithmetic mean of the numbers 8, 7, 9, 6 & 10. In each case, the values are supplied to the function in different ways.

| Formulas: | | Results: | |
|---|---|---|---|
|   | A | B |   | A | B |
| 1 | 8 =AVERAGE(8,7,9,6,10) |   | 1 | 8 | 8 |
| 2 | 7 =AVERAGE((8,7,9), 6, 10) |   | 2 | 7 | 8 |
| 3 | 9 =AVERAGE(A1,A2,A3,A4,A5) |   | 3 | 9 | 8 |
| 4 | 6 =AVERAGE(A1:A5) |   | 4 | 6 | 8 |
| 5 | 10 |   | 5 | 4 | 10 |

### COUNT

The COUNT function returns the count of numeric values in a supplied set of cells or rows. This count includes both numbers and dates.

**Example:**

The following spreadsheet shows the use of COUNT function:

| Formulas: | | Results: | |
|---|---|---|---|
|   | A | B | C |   | A | B | C |
| 1 | 5 |   |   |   | 1 | text | 0 | 2 |
| 2 | text |   |   |   | 2 | text |   | 3 |
| 3 | FALSE |   |   |   | 3 | FALSE |   | 4 |
| 4 | 01/01/2015 |   |   |   | 4 | 01/01/2015 |   | 1 |
| 5 | #N/A | 10 |   |   | 5 | #N/A | 10 |   |
Page : 242 Introduction to MS-Excel (MS-Excel Advanced Pro)

(4) MAX

The MAX function returns the largest value from a supplied set of numeric values.

Example:

The following spreadsheet shows the use of MAX function:

| Formulas | Results |
|---|---|
| | A | B | | A | B |
| 1 | 4 =MAX(A1:A5) | 1 | 4 | 5 |
| 2 | 3 | 2 | 3 |  |
| 3 | 1 | 3 | 1 |  |
| 4 | 5 | 4 | 5 |  |
| 5 | 2 | 5 | 2 |  |

(5) MIN

The MIN function returns the smallest value from a supplied set of numeric values.

Example:

The following spreadsheet shows the use of MIN function:

| Formulas | Results |
|---|---|
| | A | B | | A | B |
| 1 | 4 =MIN(A1:A5) | 1 | 4 | 1 |
| 2 | 3 | 2 | 3 |  |
| 3 | 1 | 3 | 1 |  |
| 4 | 5 | 4 | 5 |  |
| 5 | 2 | 5 | 2 |  |

(6) IF

The IF function checks whether a condition is met or not. It returns one value if the condition is TRUE and another value if the condition is FALSE.---

to MS-Excel (MS-Excel Advanced Features)

Page: 2.43

ollowing spreadsheet, select cell C1, enter the function =IF(A1>=33,"PASS","FAIL").

```
   C1
+----+----+----+----+----+
|  A |  B |  C  |  D |  E |
+----+----+----+----+----+
| 33 |    | PASS|    |    |
+----+----+----+----+----+
|  2 |    |    |    |    |
+----+----+----+----+----+
```

he IF function returns PASS in cell C1 because the value in cell A1 is equals to 33.

### WHAT-IF ANALYSIS

el, What-If analysis is a set of tools that allow you to explore the impact of changes ata on the outcome of a formula or calculation. This can be useful for making about how to change your data or how to set your goals. This feature allows you to e data used in a formula in order to find out what the results will be. The different then be compared to find out which one best suit your requirements.

### Goal Seek

el, the Goal Seek feature is a *what-if* analysis tool that enables you to find the input eded to achieve a goal or objective. To use Goal Seek, you select the cell containing la that will return the result you’re seeking and then indicate the target value you formula to return and the location of the input value that Excel can change to reach

### Goal Seek:

lect the cell containing the formula that will return the result you’re seeking. In this ample, cell C1 (Fig. 2.70(a)).

```
   C1
+----+----+----+----+
|  A |  B |  C  |    |
+----+----+----+----+
|  1 |  3 |  9  | 12 |
+----+----+----+----+
```

Fig. 2.70(a) (Goal Seek: Select the Cell containing the Formula)

n the Data tab, choose What-If Analysis → Goal Seek in the Data Tools group.
Page : 244

Introduction to MS-Excel (MS-Excel Advanced Pr

What-If Analysis ▾
Group Ungroup

Scenario Manager…

Goal Seek…

Data Table…

Fig. 2.70(b) (Goal Seek: Goal Seek in What-If Analysis)

• Goal Seek dialog box will open. Because cell C1 is the active cell when you open the dialog box, the Set cell text box already contains the cell reference C1.

• Select the To Value text box and enter the goal. This is the value you want the formula in the Set Cell box to reach. In this example, it’s 22.

```
[Image of Goal Seek dialog box with "Set cell:" showing C1 and "To value:" showing 22]
```

Fig. 2.70(c) (Goal Seek: Goal Seek dialog box)

• Select the By Changing Cell text box and select the cell that you want to change. Excel will change the value in this cell reference to try to reach the goal in the To Value box. In this example, if you select cell A1 to change its value, Excel will set it to 13 so that target value in the To Value box could be achieved.

```
[Image of Goal Seek dialog box with "By changing cell:" showing A1]
```

Fig. 2.70(d) (Goal Seek: Select Cell for By changing cell text box)

• Click OK. Excel displays the Goal Seek Status dialog box along with the results.Fig. 2.70(e) (Goal Seek: Goal Seek Status Dialog box)

Scenario Manager

The use of Scenario Manager in Excel allows you to have a certain set of inputs for a “scenario”, and then lets you view different scenarios of the outputs as the change. Basically, it tells you “if this were to change”, “this is the result”; and it allows to happen for multiple cases or “scenarios”. This can help give people information to decisions on their business (or whatever it may be used for) based on the different as displayed by Scenario Manager.

Scenario Manager lets you create and save sets of different input values that produce calculated results as named scenarios (such as Best Case, Worst Case, and Most Case). The key to creating the various scenarios for a table is to identify the various the data whose values can vary in each scenario.

Scenario Manager:

Open the spreadsheet containing the data for which you want to create scenario. (Fig. 2.70(f) in this example).

|   | A     | B     | C       | D        | E     | F   |
|---|-------|-------|---------|----------|-------|-----|
| 1 | Last  | First | Day     | Worker   | Amount| Hours|
| 2 | Goel  | Amit  | Monday  | Staff    | 250   | 22  |
| 3 | Kumar | Prem  | Monday  | Student  | 400   | 32  |
| 4 | Sharma| Puneet| Wednesday| Staff    | 340   | 23  |
| 5 | Singh | Gerry | Wednesday| Student  | 530   | 25  |

Fig. 2.70(f) (Scenario: Data Range to create Scenario)

On the Data tab of the Ribbon, Choose What-If Analysis →Scenario Manager in the Data Tools group.
Page: 246

Introduction to MS-Excel (MS-Excel Advanced Features)

(ii) The Scenario Manager dialog box appears.

![Scenario Manager Dialog Box](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w+n8AAAAAElFTkSuQmCC)

Fig. 2.70(h) (Scenario: Scenario Manager Dialog Box)

(iv) To create a scenario, click the Add button. The Add Scenario dialog box appears.

![Add Scenario Dialog Box](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w+n8AAAAAElFTkSuQmCC)

Fig. 2.70(I) (Scenario: Add Scenario Dialog Box)Introduction to MS-Excel (MS-Excel Advanced Features) Page : 2.47

(v) Type the name of the scenario in the Scenario Name text box, specify the Changing Cells (if they were not previously selected), and click OK.

```
[Image of Add Scenario dialog box with Scenario Name: My_Scenario, Changing cells: A1:F5, Comment: Created by PK on 5/25/2013, and checkboxes for Prevent changes and Hide]
```

Fig. 2.70(l) (Scenario: Setting Name and Changing Cells Values)

(vi) Excel displays the Scenario Values dialog box.

```
[Image of Scenario Values dialog box with Enter values for each of the changing cells: $A$1: First, $B$1: Day, $C$1: Worker, $D$1: Amount]
```

Fig. 2.70(k) (Scenario: Scenario Values Dialog Box)Page: 2.48

Introduction to MS-Excel (MS-Excel Advanced Features)

(vii) Enter the values for each of the changing cells in the text boxes.

![Scenario Values](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...)[Fig. 2.70(l) (Scenario: Enter Values for Each Changing Cells)]

(viii) Click on Add button. Excel redisplays the Add Scenario dialog box.

(ix) Repeat Steps (v) through (viii) to enter the other scenarios. When you finish entering values for the final scenario, click OK instead of Add.

(x) The Scenario Manager Dialog box makes another appearance, this time displaying the names of all scenarios in its Scenarios list box. To have Excel plug the changing values from any scenario into the table, click the scenario name in the Scenarios list box and then click Show.

Page: 2.50

Introduction to MS-Excel (MS-Excel Advanced Features)

*   Charts can help you to compare different data sets. Charts can be a great way to compare different data sets side-by-side, making it easier to see how they differ.

*   Charts can help you to save time. Instead of having to explain your data in words, you can simply show it to others in a chart.

*   Charts can help you to make better decisions. By understanding your data better and identifying trends, you can make better decisions about your business or other activities.

## 2.23.2 ELEMENTS OF CHART

In Excel, a chart comprises of following elements:

![Elements of a Chart](https://i.imgur.com/placeholder.png) 

Fig. 2.71 (Elements of a Chart)

*   **Source Data**

    This is the range of cells that make up a chart. The chart is updated automatically whenever the data in these cells changes.

*   **Chart Title**

    The chart title is a text box that you can place anywhere on the chart. It should be a brief, clear, and informative description of the chart.
## ditions to MS-Excel (MS-Excel Advanced Features) Page: 2.51

**Legend**

This is the chart key, which describes what each color on the chart represents.

**Axis**

This is the vertical and horizontal parts of a chart. The vertical axis is often referred to as the Y axis, while the horizontal axis is referred to as the X axis.

**Data Series**

This is the actual charted values, which usually are rows or columns of the source data.

**Value Axis**

This is the vertical axis that represents the values or units of the source data.

**Category Axis**

This is the horizontal axis on the chart. It typically displays the categories of data that are being plotted.

**Data Labels**

Data labels are text boxes that you can place anywhere on the chart to provide additional information about the data.

**5.3 TYPES OF CHARTS**

Excel allows you to create different kinds of charts. Some of the standard ones are:

**AREA CHART**

Area chart emphasizes the trend of each value over time. An area chart also shows the relationship of parts to a whole.

Fig. 2.72 (Area Chart)Page: 2.52

Introduction to MS-Excel (MS-Excel Advanced Features)

*   COLUMN CHART

Column chart uses vertical bars or columns to represent data. They can work with many different types of data, but they are most frequently used for comparing information.

Fig. 2.73 (Column Chart)

*   BAR CHART

Bar chart is similar to a column chart except these use horizontal instead of vertical bars. Like the column chart, the bar chart shows variations in value over time.

Fig. 2.74 (Bar Chart)# Solution to MS-Excel (MS-Excel Advanced Features) Page: 2.93

## LINE CHART

A line chart shows trends and variations in data over time. A line chart displays a series of points, called data points, that are connected over time. The data points are connected with lines, making it easy to see whether values are increasing or decreasing over time.

Fig. 2.75 (Line Chart)

## PIE CHART

A pie chart displays the contribution of each value to the total. Pie charts are a very effective way to display information when you want to represent different parts of the whole, or the percentages of a total. In a pie chart, each value is shown as a slice of the pie, so it is easy to see which values make up the percentage of a whole.

Fig. 2.76 (Pie Chart)Page : 2.54

## 2.24 CREATING A NEW CHART

To create a new chart, you must first enter the data into a worksheet. This section explains how you can create simple charts from the data.

**To Create a Chart:**

*   First of all, enter the data into the worksheet and highlight all the cells that will be included in the chart including the column titles and the row labels. These cells will be the source data for the chart.

    ![Highlight the cells that will be included in the chart](Fig. 2.77)

*   Click the Insert tab. In the Charts group, select the desired Chart Category (say: Column).

    ![Selecting Chart Category](Fig. 2.78)

*   Select the desired Chart type from the drop-down menu (say: Clustered Column).
to MS-Excel (MS-Excel Advanced Features) Page: 2.55

Fig. 2.79 (Selecting Chart Type Under Chart Category)

The chart will appear in the worksheet.

Fig. 2.80 (Chart)

4.1 PRINTING A CHART.

In Excel, the method you choose for printing the chart depends on whether you want toPage: 2.56 Introduction to MS-Excel (MS-Excel Advanced Features)

print an embedded chart (with or without the surrounding worksheet data) or a separate chart sheet.

*   To Print an Embedded Chart as part of the data on the worksheet: You simply print the worksheet from the Print panel in Backstage view by pressing Ctrl+P.
*   Before you print an embedded chart along with worksheet data, view the chart in the Page Layout or Page Break Preview view. You may need to move or resize the chart so that it fits nicely on the page.
*   To Print an Embedded Chart by itself without the ‘supporting’ worksheet data: Click the chart to select it before you press Ctrl+P to open the Print panel in Backstage view, where Print Selected Chart appears as the default selection in the first drop-down menu under Settings.
*   To Print a Chart that is on a separate Chart sheet: Activate the chart sheet by clicking its sheet tab and then press Ctrl+P to open the Print panel in Backstage view, where Print Active Sheets appears as the default selection in the first drop-down menu under Settings.

To Print Chart:

*   Click the worksheet that contains the chart that you want to print.
*   On the View tab, in the Workbook Views group, click Page Layout or Page Break Preview.

![Page Layout Command](Fig. 2.81 (Page Layout Command))

*   To move the chart, drag it to a preferred location on the page that you want to print.
*   If a worksheet contains more than one chart, you may be able to print the charts on one page by reducing the size of the charts.
*   Click the worksheet.
*   Click the File → Print OR Press Ctrl+P.
*   By default, Active sheet(s) is selected under Print what. You can click Preview to see how the chart will look on the printed page.
## 2.5 PRINTING A WORKSHEET

Page: 2.57

Printing in Excel is much like printing in other Office applications like Microsoft Word. By default, Excel prints the entire worksheet.

Print Preview is a method to review the formatting and make sure the columns, rows, and margins appear exactly as you want them.

In Excel, you can print and preview files from the same location by clicking File and then pressing `CTRL+P`.

Excel allows you to print all or part of a worksheet or workbook, with just the information you need.

To view the Print pane:

1.  Click the File tab. This takes you to Backstage view.
2.  Select Print. The Print pane appears, with the print settings on the left and Print Preview on the right.

```
Home Insert Page Layout Formulas Data Review View
--------------------------------------------------------------------------------
| Save   |                                                                    |
| Save As|                                                                    |
| Open   |                                                                    |
| Close  |                                                                    |
| Info   |                                                                    |
| Recent |                                                                    |
| New    |                                                                    |
|        |                                                                    |
| Save & Send|                                                                    |
| Help   |                                                                    |
| Options|                                                                    |
| Edit   |                                                                    |
```

## 2.6 USING PRINT RANGES

By default, Excel prints the whole worksheet. Sometimes, you only need to print some specific ranges instead of the whole worksheet for saving paper and printer ink.Page: 2.58

Introduction to MS-Excel (MS-Excel Advanced Topics)

This section will talk about how to print multiple cell ranges in Microsoft Excel.

To Print a Worksheet:

*   Select the worksheets that you want to print.
*   To print multiple worksheets, click the first worksheet, hold down the Ctrl key, then click the other worksheets you want to select.
*   Click File, and then click Print.

    OR
    Press Ctrl+P. The Print pane window appears.
*   Click the Print button.

To Print Active Sheet:

*   A worksheet is considered active if it is selected.
*   Select the worksheets you want to print.
*   Click the File tab → Print to access the Print pane.
*   Select Print Active Sheets from the print range drop-down menu.

|                       |                               |
| :-------------------- | :---------------------------- |
| Print Active Sheets   | Only print the active sheets |
| Print Active Sheets   | Only print the active sheets |
| Print Entire Workbook | Print the entire workbook     |
| Print Selection       | Only print the current selection |
| Ignore Print Area     |                               |

Fig. 2.83 (Print Active Sheets)

*   Click the Print button.

To Print the Entire Workbook:
- Click the File tab → Print to access the Print pane.
- Select Print Entire Workbook from the print range drop-down menu.ion to MS-Excel (MS-Excel Advanced Features


Introduction to MS-Excel (MS-Excel Advanced Features)

![Page Layout](Page Layout) ![Formulas](Formulas) ![Data](Data) ![Review](Review) ![View](View)

Orientation Size Breaks Background Print Titles
Page Setup Insert Page Break
Remove Page Break

Fig. 2.89 (Removing a Page Break)

The page break (represented by a dashed line) is removed from the page.

QUESTIONS

**Short Answer Questions**

Q1. What is Spreadsheet?

Or

Define Worksheet.

Ans: Spreadsheet or Worksheet is a document that stores data in a grid of horizontal rows and vertical columns. Rows are typically labeled using numbers (1, 2, 3, etc.), while columns are labeled with letters (A, B, C, etc.). Individual row/column locations, such as C3 or B12, are referred to as cells.

In a spreadsheet application, each value sits in a cell. You can define what type of data is in each cell and how different cells depend on one another.

Q2. What is Microsoft Excel?

Ans: Microsoft Excel is an electronic spreadsheet application that enables users to store, organize, calculate and manipulate the data with formulas using a spreadsheet system broken up by rows and columns.

Q3. Define Spreadsheet Software.

Ans: Spreadsheet software allows users to perform calculations on the data. These are computer programs that allow the user to create and manipulate spreadsheets electronically.
ction to MS-Excel (MS-Excel Advanced Features)
Page : 2.63

Briefly explain worksheet, workbook and cell.
A worksheet is the grid of cells where you can type the data. The grid divides your worksheet into rows and columns. Columns are identified with letters (A, B, C…), while rows are identified with numbers (1, 2, 3…).

The worksheets in turn are grouped together into a workbook. By default, each workbook in Excel contains 3 blank worksheets, which are identified by tabs (sheet1, sheet2 and sheet3) displaying along the bottom of your screen.

Cells are the basic building blocks of a worksheet. Each rectangle in a worksheet is called a cell. A cell is the intersection of a row and a column i.e. a cell is identified by column and row. Each cell has a name, or a cell address based on which column and row it intersects.

How do you create a new workbook in Excel?

**To Create a New Workbook:**

*   Open Excel and click on the "File" tab.
*   Select "New" and choose "Blank Workbook" or a template from the available options.

How can you rename a worksheet in Excel?

**To Rename a Worksheet:**

*   Right-click on the worksheet tab at the bottom of the Excel window.
*   Select "Rename" and enter a new name for the worksheet.

What is the purpose of grouping worksheets in Excel?

Grouping worksheets allows you to perform actions on multiple worksheets simultaneously, such as applying formatting, entering data, or creating formulas.

How can you hide a worksheet in Excel?

**To Hide a Worksheet:**

*   Right-click on the worksheet tab you want to hide, select "Hide" from the context menu, and the worksheet will be hidden from view.
OR

*   Go to the "Format" tab in the Excel ribbon, click on "Hide & Unhide" in the "Visibility" group, and select "Hide Sheet".
Page: 2.64
## Introduction to MS-Excel (MS-Excel Advanced Features)

**Q9.** Define Formulas in Excel.
**Ans:** Formulas are equations that perform calculations on data values in the worksheet. Like a calculator, Excel can execute formulas that add, subtract, multiply, and divide. A formula can be a combination of constant values, cell references, and mathematical operators (+, -, *, /). A formula starts with an equal sign (=).

Example:
The following formula multiplies 5 by 10 and then adds the value in cell A2 to the result:
`=A2+5*10`

**Q10.** What is Function in Excel?
**Ans:** A function in Excel is a predefined formula that performs specific calculations or operations. Functions are built-in and can be used to simplify complex calculations or manipulate data in cells.

**Q11.** How do you create a formula in Excel?
**Ans:** To create a formula in Excel, you start by typing an equal sign (=) in a cell, followed by the formula expression. For example, to add the values in cells A1 and B1, you can type `=A1+B1` in another cell and press Enter.

**Q12.** What is the difference between relative and absolute cell references in formulas?
**Ans:** In Excel, a relative cell reference adjusts automatically when the formula is copied to other cells. An absolute cell reference, on the other hand, remains fixed and doesn’t change when the formula is copied. Absolute references use a dollar sign ($) to indicate the fixed column or row.

**Q13.** Define Sorting in Excel.
**Ans:** Sorting is the process of arranging data in a specific order. This can be done by ascending order (A to Z, or smallest to largest) or descending order (Z to A, or largest to smallest). Sorting can be done on one column or multiple columns.
# Section to MS-Excel (MS-Excel Advanced Features)

Page: 2.65

What is a filter in Excel?

A filter in Excel is a feature that allows you to display specific data based on certain criteria while hiding the rest of the data. It helps in analyzing and working with large datasets by focusing on relevant information.

What is a Chart in Excel?

A chart is a graphical representation of data. It can be used to visualize data and to make it easier to understand.

List the key benefits of using charts in Excel.

The key benefits of using charts are listed below:

- Charts can help you to understand your data better.
- Charts can help you to identify trends.
- Charts can help you to communicate your findings to others.
- Charts can make your data more visually appealing.

## Long Answer Questions

What is MS-Excel? Explain the salient features of MS-Excel.

Refer section 2.2 & 2.2.1

Define Cell Referencing. Explain relative, mixed and absolute cell referencing with example.

Refer Section 2.16

How to add and delete rows/columns in a table?

Refer section 2.5.1, 2.5.2, 2.5.3 & 2.5.4

Define Sorting. How to sort a table in Excel?

Refer section 2.19

What is Filtering? How to filter a table in Excel?
Refer section 2.20Page : 2.66
Introduction to MS-Excel (MS-Excel Advanced Features)

Q6. What is Chart? How to create a chart in Excel?
Or
What do you mean by Embedded Chart? Write the procedure for creating a chart in MS-Excel.
Ans: Refer section 2.23 & 2.24

