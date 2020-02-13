
var col1 = ["Full time student checking (Age 22 and under) ", "Customers over age 65", "Below  $500.00"];
var col2 = ["None", "None", "$8.00"];

function createtable() {
    <!--To fill the table with javascript-->
    for (var j = 0; j < col1.length; j++) {
        if (j % 2 == 0) {
            document.write("<tr><td>" + col1[j] + " </td>");
            document.write("<td>" + col2[j] + "</td></tr>");
        } else {
            document.write("<tr  bgcolor='#aeb2bf'><td>" + col1[j] + " </td>");
            document.write("<td>" + col2[j] + "</td></tr1>");
        }
    }
}
