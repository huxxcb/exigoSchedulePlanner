# Web Schedule Planner
This project is the start of an attempt to make a web application tie-in with vico office,
able to accomplish the following:
```
1. Export project schedules from Vico Office
2. Change schedule progress online
3. Import changed project schedules to Vico Office
```

##### Table of Contents
I. Research Notes
II. Usage Notes
III. Test Notes

## I. Research Notes
Vico Office - txt
Bootstrap
EditableGrid

Export / Import - Steps
#### Export
**Vico Connector Configurator**
Every import and export to vico office has to be handled through the Vico Connector Configurator.

**XML vs JSON**
JSON - Feels more like a relational database structure, based on IDs instead of actual inherited structure. I can not recommend using this structure as it is right now. There's a export JSON file included in the project under the folder *vicofiles*.
XML - The XML feels reasonably put together, besides the fact that everything is put in as attributes, which to me is
a somewhat convoluted way to organize every element. This was specifically a problem when importing the XML to Excel,
since everything by default would be named by the attribute identifier, which for most of the attributes is ***v***.
This practically means that, when you import the XML to a table in Excel, most columns are simply named *v1*,*v2*,*v3* ... *vn*.


## II. Usage notes
#### python
To use the EditableGrid library you have to launch a localhost server, this can be done
in multiple ways, I chose to use python.
The setup is as follows.
1. install python 3.X*
2. open command prompt as administrator
3. browse to the webSchedulePlanner main directory (where the index.html file is)
4. type the following in the command prompt:
```
python -m http.server 8080
```

8080 is an arbitrary port number, could be any other port number, eg. 8000.
After launching the server in the folder, open a browser and type in localhost:8080 (or
    whichever port number you chose).

\* *Any version of python 3 should work.*
### III. Test
As of right now, import to Vico Office is officially supported, but I have had no success with it.
The export work's *fine*.
There's an export file included in this project called exigo_grid.xml.
Export and Import is explained in the "*VOWS - Utilization Guide R6.5*", contained within the project
as a pdf file.
To test the import, there has to be an import document, written in a comma separated txt or dat file.
There's an example file ( *t02_schedule_importer* ) included in the project in the *vicofiles* folder.
