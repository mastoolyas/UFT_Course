Const FLIGHT_APP = "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
Dim currentDate, numberOfFromCities, arrFrom(), NewDate, passName

currentDate = date()
currentDate = dateAdd("m",1, currentDate)
'print CurrentDate
passName = DataTable("UserName", dtGlobalSheet)'"john"

If wpfWindow("Micro Focus MyFlight Sample").Exist(0) Then
	wpfWindow("Micro Focus MyFlight Sample").Close
End If

SystemUtil.Run FLIGHT_APP
pass1 = DataTable("Pass", dtGlobalSheet)'"6295be5065320f91c848"
'Ex 10.2
a = fLogIn(passName, pass1)
If a = False Then
	ExitRun
End If
