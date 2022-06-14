' Call the function
rc = fDivide(4, 2)

If rc = False Then
	reporter.ReportEvent micFail, "fDivide", "Ilegal parameters"
Else
	reporter.ReportEvent micPass, "fDivide", "Result: " & rc
End If

' Call the function
rc = fDivideA(4, 2, iRes)

If rc = False Then
	reporter.ReportEvent micFail, "fDivide", "Ilegal parameters"
Else
	reporter.ReportEvent micPass, "fDivide", "Result: " & iRes
End If

' Call the functions
If fLogin("john", "hp") = True Then
	reporter.ReportEvent micPass, "Login", "Login passed"
Else
	reporter.ReportEvent micFail, "Login", "Login failed"
	ExitRun
End If

rc = fCreateOrder("London", "Paris", "5-May-2017", "Economy", "2", "12354 AF", "Gili")
If rc <> -1 Then
	reporter.ReportEvent micPass, "Create Order", "Order " & rc & " created succesfully"
Else
	reporter.ReportEvent micFail, "Create Order", "Order wasn't created succesfully"
	ExitRun
End If

' MsgBox WpfWindow("HP MyFlight Sample Application").WpfProgressBar("progBar").Object

