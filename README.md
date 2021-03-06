# Web Schedule Planner
This project is the start of an attempt to make a web application tie-in with
vico office, able to accomplish the following:
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
The project is based on Bootstrap and EditableGrid, more on how to handle this
in the Usage notes.
#### Export
**Vico Connector Configurator**
Documentation on how to use the Connector Configurator can be found here:
```
http://support.vicosoftware.com/FlareFiles/Content/Online%20Help/VOWS/VOWS%20-%20Utilization%20guide%20R6.5.pdf
```
Every import and export to Vico Office has to be handled through the Vico
Connector Configurator.

##### XML vs JSON

JSON - Feels more like a relational database structure, based on IDs instead of
an inheritance structure. I can't really recommend using this structure as it is
right now. There's a export JSON file included in the project
under the folder *vicofiles*.

XML - The XML feels reasonably put together, besides the fact that everything is
put in as attributes, which to me is a somewhat convoluted way to organize every
element. This was specifically a problem when importing the XML to Excel, since
everything by default would be named by the attribute identifier, which for most
of the attributes is ***v***. This practically means that, when you import the XML to a
bbtable in Excel, most columns are simply named *v1*,*v2*,*v3* ... *vn*.

### Import
As of right now, import to Vico Office is officially supported, but I have had
no success with it. The export work's *fine*. There's an export file included in
this project called exigo_grid.xml. Export and Import is explained in the
"*VOWS - Utilization Guide R6.5*", contained within the project as a pdf file.
To test the import, there has to be an import document, written in a comma
separated txt or dat file. There's an example file ( *t02_schedule_importer* )
included in the project in the *vicofiles* folder.
The format of the import file is very strict and is also documented in the VOWS
Utilization Guide.

## II. Usage notes
#### python
To use the EditableGrid library you have to launch a localhost server, this can
be done in multiple ways, I chose to use python.
The setup is as follows.
1. install python 3.X*
2. open command prompt as administrator
3. browse to the webSchedulePlanner main directory (where the index.html file is)
4. type the following in the command prompt:
```
python -m http.server 8080
```

8080 is an arbitrary port number, could be any other port number, eg. 8000.
After launching the server in the folder, open a browser and type in
localhost:8080 (or whichever port number you chose).

\* *Any version of python 3 should work.*
