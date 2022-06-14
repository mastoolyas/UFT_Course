With WpfWindow("HP MyFlight Sample Application")
	.WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1985789176_;_script infofile_;_ZIP::ssf6.xml_;_
	.WpfComboBox("toCity").Select "Frankfurt" @@ hightlight id_;_1985791768_;_script infofile_;_ZIP::ssf8.xml_;_
	.WpfImage("WpfImage_3").Click 8,8 @@ hightlight id_;_1967783408_;_script infofile_;_ZIP::ssf9.xml_;_
	.WpfCalendar("datePicker").SetDate CurrentDate @@ hightlight id_;_1985790856_;_script infofile_;_ZIP::ssf10.xml_;_
	.WpfComboBox("Class").Select "First" @@ hightlight id_;_1985791240_;_script infofile_;_ZIP::ssf12.xml_;_
	.WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1985792344_;_script infofile_;_ZIP::ssf14.xml_;_
	.WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1985793640_;_script infofile_;_ZIP::ssf15.xml_;_
	.WpfTable("flightsDataGrid").SelectCell 2,1 @@ hightlight id_;_2132640352_;_script infofile_;_ZIP::ssf16.xml_;_
	.WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1967789072_;_script infofile_;_ZIP::ssf17.xml_;_
	.WpfEdit("passengerName").Set "Gili" @@ hightlight id_;_1967792576_;_script infofile_;_ZIP::ssf18.xml_;_
	.WpfButton("ORDER").Click
End With


