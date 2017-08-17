var x,xmlhttp,xmlDoc;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "exigo_grid.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("schTask");
 
