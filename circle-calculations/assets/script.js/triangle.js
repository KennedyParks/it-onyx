/* The following should be a file in your js or script folder */

$( "#TriangleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius

         var diameter; // floating point diameter
         var circumference; // floating point circumference
         var area;  // floating point hypotenuse
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius );  

         // calculate the diameter
         diameter = calcDiameter(radius);

         // display the hypotenuse
         document.getElementById("diameter").innerHTML = diameter.toString();

         circumference = calcCircumference(radius);

         document.getElementById("circumference").innerHTML = circumference.toString();

         area = calcArea(radius);

         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (r)
  // returns the diameter
  // 2 times the radius
  {
      return 2 * r;
  }

  function calcCircumference (r)

{
    return r * 2 * Math.PI;
}

function calcArea (r)

{
  return  Math.PI * r * r;
}

  function clearForm()
{
    document.getElementById("leg1").value = "";
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2").value = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";
}
