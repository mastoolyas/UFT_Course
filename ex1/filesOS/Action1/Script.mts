'Set objFS = CreateObject("Scripting.FileSystemObject")
'Set objFile = objFS.OpenTextFile("Z:\Yaron\UFT\.gitignore",1)
'all = objFile.ReadAll
'arrLines = split(all, vbNewLine)
'objFile.Close


Set objDB = CreateObject("ADODB.Connection")
objDB.ConnectionString("Driver={SQLite3 ODBC Driver};Database=Z:\Yaron\UFT\Docs\Flights Application\DB\Flights.s3db;StepAPI=;Timeout=;PWD=")
objDB.Open
