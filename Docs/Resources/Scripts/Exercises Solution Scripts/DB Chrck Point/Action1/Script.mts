
DbTable("DbTable_3").Check CheckPoint("DbTable_3")

' Installations:
' Go to: http://www.ch-werner.de/sqliteodbc/
' Click sqliteodbc.exe and install it (Select both check boxes during installation)

Set db = CreateObject("adodb.connection")
db.ConnectionString = "Driver={SQLite3 ODBC Driver};Database=C:\Users\User\AppData\Local\UFT\Demo\DB\Flights.s3db;StepAPI=0;SyncPragma=;NoTXN=0;Timeout=;ShortNames=0;LongNames=0;NoCreat=0;NoWCHAR=0;FKSupport=0;JournalMode=;OEMCP=0;LoadExt=;BigInt=0;JDConv=0;PWD="
db.Open
sSQL = "select OrderNumber from Orders where OrderNumber < 6 order by OrderNumber Desc"
Set rs = db.Execute(sSQL)
MsgBox rs.Fields(0).Value

