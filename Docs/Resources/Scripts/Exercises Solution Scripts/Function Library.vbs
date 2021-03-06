Public Const FLIGHT_APP = "C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

' Option 1
Public Function fDivide(ByVal iNum1, ByVal iNum2)

	If IsNumeric(iNum1) = False Or IsNumeric(iNum2) = False Then
		fDivide = False
		Exit Function
	ElseIf iNum2 = 0 Then
		fDivide = False
		Exit Function
    End If
	
	fDivide = iNum1/iNum2
   
End Function

' Option 2
Public Function fDivideA(ByVal iNum1, ByVal iNum2, ByRef iResult)

	If IsNumeric(iNum1) = False Or IsNumeric(iNum2) = False Then
		fDivideA = False
		Exit Function
	ElseIf iNum2 = 0 Then
		fDivideA = False
		Exit Function
    End If
	
	iResult = iNum1/iNum2
	fDivideA = True
   
End Function

Public Function fDivideB(ByVal iNum1, ByVal iNum2)

	On Error Resume Next
	
    fDivideB = iNum1/iNum2

	If Err.Number <> 0 Then
		Reporter.ReportEvent micFail, "fDivideB", Err.Description
		fDivideB = False
	End If
	
	On Error GoTo 0 
	
End Function

Public Function fLogin(ByVal sUser, ByVal sPwd)
	
	If WpfWindow("HP MyFlight Sample Application").Exist(0) = True Then
		fLogin = True
		Exit Function
	End If
	
	SystemUtil.Run FLIGHT_APP
	
	If WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Exist(2) = False Then
		Reporter.ReportEvent micFail, "Invoke flight", "Application login screen didn't open"
		fLogin = False
	End If

	WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set sUser
	WpfWindow("HP MyFlight Sample Application").WpfEdit("password").Set sPwd
	WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click
		
	' Check if application opened
	If WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Exist(10) = False Then
		Reporter.ReportEvent micFail, "Login flight", "Application main screen didn't open"
		fLogin = False
	End If
		
	fLogin = True
	
End Function

Public Function fCreateOrder(ByVal sFrom, ByVal sTo, ByVal sDate, ByVal sClass, ByVal iNumTickets, ByVal sFlight, ByVal sName)
	
	Dim sOrder, iOrder, arrOrder
	
	If WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Exist(0) Then
		WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Click	
	End If
		
	If sFrom <> "" Then
		WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select sFrom
	End If
	
	WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select sTo
	WpfWindow("HP MyFlight Sample Application").WpfImage("WpfImage_3").Click 8,8
	WpfWindow("HP MyFlight Sample Application").WpfCalendar("datePicker").SetDate sDate
	WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select sClass
	WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select iNumTickets
	WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
	
	' Search for the value (E.g. "12354 AF")
	WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 2,1
	WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click
	WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set sName
	WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click
	
	If WpfWindow("HP MyFlight Sample Application").WpfObject("Order completed").Exist(10) = False Then
		fCreateOrder = -1
		Exit Function
	End If
	
	Wait 2
	
	' Get the order number
	sOrder = WpfWindow("HP MyFlight Sample Application").WpfObject("Order completed").GetROProperty("text")
	arrOrder = Split(sOrder, " ")
	
	If Not IsNumeric(arrOrder(1)) Then
		fCreateOrder = -1
		Exit Function
	End If
		
	fCreateOrder = arrOrder(1)
	
End Function
 
Public Function RecoveryFunction1(Object, Method, Arguments, retVal)
	Object.Select 0
	Reporter.ReportEvent micPass, "Recovery", "Default value was selected"
End Function 
 
