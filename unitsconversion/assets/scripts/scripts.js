function calculate() {
    "use strict";
  
    var form = $( "#myform" );

    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("Operand1").value;

        // Operator
        // Get the value associated with the operator that was checked
        var operator;
        if (document.getElementById("CentimeterOperator").checked) {
            operator = document.getElementById("CentimeterOperator").value;
        }
        if (document.getElementById("MeterOperator").checked) {
            operator = document.getElementById("MeterOperator").value;
        }
        if (document.getElementById("KilometerOperator").checked) {
            operator = document.getElementById("KilometerOperator").value;
        }
        if (document.getElementById("InchOperator").checked) {
            operator = document.getElementById("InchOperator").value;
        }
        if (document.getElementById("FeetOperator").checked) {
            operator = document.getElementById("FeetOperator").value;
        }
        if (document.getElementById("YardOperator").checked) {
            operator = document.getElementById("YardOperator").value;
        }
        if (document.getElementById("MileOperator").checked) {
            operator = document.getElementById("MileOperator").value;
        }
        

        CalculateResult(operand1, operator, operator);
    }
}

async function CalculateResult(operand1, operator, operator) {
    
}









