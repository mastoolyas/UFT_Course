WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_2097071264_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select "London" @@ hightlight id_;_1972121824_;_script infofile_;_ZIP::ssf4.xml_;_

WpfWindow("HP MyFlight Sample Application").WpfImage("WpfImage_2").Click 11,6 @@ hightlight id_;_2097531664_;_script infofile_;_ZIP::ssf5.xml_;_

WpfWindow("HP MyFlight Sample Application").WpfCalendar("א").SetDate "15-Mar-2017" @@ hightlight id_;_1972123600_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2097068768_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1987349128_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1972126192_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 1,0 @@ hightlight id_;_1975935664_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1975936624_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set "Gili" @@ hightlight id_;_1975936240_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click @@ hightlight id_;_1975938544_;_script infofile_;_ZIP::ssf15.xml_;_

If WpfWindow("HP MyFlight Sample Application").WpfObject("Order completed").Exist(10) = False Then
	MsgBox "NO"
End If

