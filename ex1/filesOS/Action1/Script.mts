'RunAction "LogIn [ex1]", oneIteration

Set objFS = CreateObject("Scripting.FileSystemObject")
Set objFile = objFS.OpenTextFile("Z:\Yaron\UFT\orderList.txt",1)
all = objFile.ReadAll
arrLines = split(all, vbNewLine)
objFile.Close

For I = 1 To 4 Step 1
	a = arrLines(i)
    RunAction "SearchOrder [ex1]", oneIteration
next



'Set objDB = CreateObject("ADODB.Connection")
'objDB.ConnectionString("Driver={SQLite3 ODBC Driver};Database=Z:\Yaron\UFT\Docs\Flights Application\DB\Flights.s3db;StepAPI=;Timeout=;PWD=")
'objDB.Open


