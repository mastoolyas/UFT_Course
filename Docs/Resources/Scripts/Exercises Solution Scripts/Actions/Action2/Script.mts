WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1929874456_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select DataTable("From", dtGlobalSheet) @@ hightlight id_;_1945125464_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select DataTable("To", dtGlobalSheet) @@ hightlight id_;_1945125128_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfImage("WpfImage_2").Click 2,6 @@ hightlight id_;_1929875032_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfCalendar("א").SetDate "22-Mar-2017" @@ hightlight id_;_1929873640_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2098218992_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1929810904_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1929810760_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 6,2 @@ hightlight id_;_1929812440_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1968771144_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set "Gili" @@ hightlight id_;_1929812008_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click @@ hightlight id_;_1929813832_;_script infofile_;_ZIP::ssf19.xml_;_


WpfWindow("HP MyFlight Sample Application").WpfObject("Order 138 completed").Output CheckPoint("Order 138 completed") @@ hightlight id_;_1969038872_;_script infofile_;_ZIP::ssf20.xml_;_

Public Function fSearchOrder(ByVal iOrder)
	
	' Code here
	
End Function

