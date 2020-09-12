README for Calculate Project, Saturday 12 September 2020
Group: Sweet return Gnomes

JAVASCRIPT FILE SETUP: ESSENTIAL
The first thing to do is enter the $(document).ready(function(){.....will enter the JQuery inside these brackets} statement as all JQuery must be contained within this statement.


ESTABLISH VARIABLES AND ASSIGN THEIR VALUE/TYPE
The html has buttons and ids established for the calculator NUMBERs of 0 to 9 and OPERATORS to perform the mathematical functions.
The javascript file therefore requires:
    (a) Each number to be declared as a constant and a NUMBER (not a string). Once we establish the code for a NUMBER, it can be replicated and just change the number assigned.
    (b) Each OPERATOR to be declared as a constant and the operation it performs viz:
        + (add);
        - (minus);
        * (multiply);
        ^ (to the power of),;
        / (divide).
        Once we establish the code for one OPERATOR, it can be replicated and just change the OPERATOR assigned.


FUNCTIONS
We need to establish functions for:
    (1) Storing the NUMBER(s) entered by the user. This NUMBER can be >1 click by the user as the NUMBER can be >9. 
        Therefore the function must understand that the NUMBER requested by the user is only complete when the user clicks an OPERATOR.
        The NUMBER is then stored as a variable to be passed back into the final function to perform the arithmetic calculation.
        The arithmetic calculation occurs when all numbers and operators have been entered, triggered by the EQUALS button being clicked by the user.
        Each NUMBER must be stored sequentially as the rules of arithmetic apply which are influenced by the OPERATOR type.
        
    (2) Storing the OPERATOR(s) entered by the user. 
        The OPERATOR requested by the user is complete when the user clicks an OPERATOR - there is no possibility for multiple entries like a number.
        The OPERATOR is then stored as a variable to be passed back into the final function to perform the arithmetic calculation.
        The arithmetic calculation occurs when all numbers and operators have been entered, triggered by the EQUALS button being clicked by the user.
        Each OPERATOR must be stored sequentially (assigned to follow the number previously entered) as the rules of arithmetic apply which are influenced by the OPERATOR type.

    (3) The FUNCTION must loop to enable the entry of muliple NUMBERS and FUNCTIONS.

    (4) Showing the numbers and operators entered. We need functions to show the NUMBER(s) and OPERTOR entered each time so that the user can see their entries.

    (5) The EQUALS button. The EQUALS button when clicked must first check that the final variable stored is a NUMBER not an OPERATOR, or that NUMBERS > OPERATORS?
        (Refer Error Checks item (1) below).
        The EQUALS function takes the variables of NUMBERS and OPERATORS in the order entered to ensure arithmetic rules are adhered to.
        The result is then passed to the "Results" container.

    (6) The CLEAR button must have a function that clears all of the stored data. We could program it to clear the last variable entered but this is getting complicated.
        We could change the text assigned to the button from "clear" to "all clear" to make this evident.



ERROR CHECKS
The checks we can make are:
    (1) The entry by the user prior to the EQUALS sign being clicked must be a NUMBER not an OPERATOR. Therefore when EQUALS is clicked it checks the last variable?
        This seems complicated. So it could check that NUMBERS > OPERATORS?

    (2) Number entered is not a real number. The number entered must not start with a 0.

    (3)


        


