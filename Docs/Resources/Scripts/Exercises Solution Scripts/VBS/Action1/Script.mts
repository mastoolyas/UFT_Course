' Declare variables
Public Const FLIGHT_APP = "C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
Dim CurrentDate, NumberOfFromCities, arrFrom()

SetLocale 1033 ' Israel format
' SetLocale 1037 ' USA format

' Set CurrentDate to the correct format + move it forward to be legal (MM/DD/YY)
CurrentDate = Date()

' Age the date a month forward
CurrentDate = DateAdd("m", 1, CurrentDate)

arrDates = Split(CurrentDate, "/")

' Remove 0 from day if necesary
If Len(arrDates(1)) = 1 Then
	arrDates(1) = Right(arrDates(0), 1)
End If

' Change month number to short name
arrDates(0) = MonthName(arrDates(0), True)

CurrentDate = arrDates(1) & "-" & arrDates(0) & "-" & arrDates(2)

' Check if application is already open. If not - invoke and log in
If WpfWindow("HP MyFlight Sample Application").Exist(0) = False Then
	SystemUtil.Run FLIGHT_APP

	If WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Exist(2) = False Then
		Reporter.ReportEvent micFail, "Invoke flight", "Application login screen didn't open"
		ExitRun
	End If

	WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set "john" @@ hightlight id_;_1967835872_;_script infofile_;_ZIP::ssf2.xml_;_
	WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure "58b828e62082f195a325"
	WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click
End If

' Check if application opened
If WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Exist(10) = False Then
	Reporter.ReportEvent micFail, "Login flight", "Application main screen didn't open"
	ExitRun
End If

WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1985789176_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select "Frankfurt" @@ hightlight id_;_1985791768_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfImage("WpfImage_3").Click 8,8 @@ hightlight id_;_1967783408_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfCalendar("datePicker").SetDate CurrentDate @@ hightlight id_;_1985790856_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select "First" @@ hightlight id_;_1985791240_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1985792344_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1985793640_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 2,1 @@ hightlight id_;_2132640352_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1967789072_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set "Gili" @@ hightlight id_;_1967792576_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click

' Custom sync
Do
	isEnabled = WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTicketsCombo").GetROProperty("enabled")
Loop While isEnabled = False

' Check for completion message
If WpfWindow("HP MyFlight Sample Application").WpfObject("Order completed").Exist(10) = False Then
	Reporter.ReportEvent micFail, "Login flight", "Completion message doesn't exist"
	ExitRun
End If

' Back to start screen
WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Click

' Get number of items in the "From" list
NumberOfFromCities = WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").GetItemsCount

' Get items into array
For i = 0 to NumberOfFromCities - 1
	ReDim Preserve arrFrom(i)
	arrFrom(i) = WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").GetItem(i)
Next

' Write items to the report
For i = 0 to UBound(arrFrom)
	reporter.ReportEvent micDone, "Item " & i, arrFrom(i)
Next

' Verify price calculation
iTickets = WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTicketsCombo").GetROProperty("text")
iPrice = WpfWindow("HP MyFlight Sample Application").WpfObject("Price Per Ticket").GetROProperty("text")
iTotal = WpfWindow("HP MyFlight Sample Application").WpfObject("Total Price").GetROProperty("text") @@ hightlight id_;_2132637136_;_script infofile_;_ZIP::ssf4.xml_;_
 @@ hightlight id_;_1967792816_;_script infofile_;_ZIP::ssf19.xml_;_
' Option 1
iPrice = Mid(iPrice, 2)
iTotal = Mid(iTotal, 2) 

' Option 2
iPrice = Replace(iPrice, "$", "")
iTotal = Replace(iTotal, "$", "")

' Wrong
If iTickets * iPrice = iTotal Then
	MsgBox "1 OK"
End If

' Correct
If Cdbl(iTickets * iPrice) = Cdbl(iTotal) Then
	MsgBox "2 OK"
End If
