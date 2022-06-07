If wpfWindow("Micro Focus MyFlight Sample").Exist(0) Then
	WpfWindow("Micro Focus MyFlight Sample").Close
End If

SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

If WpfWindow("Login").Exist(5) = false Then
	ExitRun
End If


WpfWindow("Login").WpfEdit("agentName").Set "john" @@ hightlight id_;_2082978080_;_script infofile_;_ZIP::ssf48.xml_;_
WpfWindow("Login").WpfEdit("password").SetSecure "6295be5065320f91c848" @@ hightlight id_;_2082969392_;_script infofile_;_ZIP::ssf49.xml_;_
WpfWindow("Login").WpfButton("OK").Click @@ hightlight id_;_2082286784_;_script infofile_;_ZIP::ssf50.xml_;_


WpfWindow("Micro Focus MyFlight Sample").Move 649,223 @@ hightlight id_;_1050546_;_script infofile_;_ZIP::ssf60.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Check CheckPoint("fromCity") @@ hightlight id_;_1980128584_;_script infofile_;_ZIP::ssf61.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Check CheckPoint("toCity") @@ hightlight id_;_1980129016_;_script infofile_;_ZIP::ssf62.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_2114732952_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "London" @@ hightlight id_;_1942633800_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "First" @@ hightlight id_;_2114737944_;_script infofile_;_ZIP::ssf26.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2114738136_;_script infofile_;_ZIP::ssf28.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2114737896_;_script infofile_;_ZIP::ssf29.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,1 @@ hightlight id_;_2114738568_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2114738760_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Check CheckPoint("ORDER")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "ha" @@ hightlight id_;_2114740632_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2114739960_;_script infofile_;_ZIP::ssf35.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Check CheckPoint("ORDER") @@ hightlight id_;_2089577288_;_script infofile_;_ZIP::ssf63.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").WaitProperty "text", "2" , 10000 @@ hightlight id_;_2083469584_;_script infofile_;_ZIP::ssf41.xml_;_
wait 1

' WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order completed").Exist(5)

OrderNumber = WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order completed").GetROProperty("text")
print OrderNumber


WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").Select "4"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1988086760_;_script infofile_;_ZIP::ssf36.xml_;_
WpfWindow("Micro Focus MyFlight Sample").InsightObject("InsightObject").Click

