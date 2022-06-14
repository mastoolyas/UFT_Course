wpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2070747784_;_script infofile_;_ZIP::ssf1.xml_;_
wpfWindow("Micro Focus MyFlight Sample").WpfRadioButton(DataTable("SearchBy", dtGlobalSheet)).Set
If DataTable("Name", dtGlobalSheet) <> "" Then
	wpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set DataTable("Name", dtGlobalSheet)
    wpfWindow("Micro Focus MyFlight Sample").WpfCalendar("byDatePicker").SetDate "07-Jul-2022" @@ hightlight id_;_1932887048_;_script infofile_;_ZIP::ssf6.xml_;_
    wpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
 	wpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectCell 0,1 @@ hightlight id_;_2028658160_;_script infofile_;_ZIP::ssf11.xml_;_
	wpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click @@ hightlight id_;_2028661280_;_script infofile_;_ZIP::ssf12.xml_;_
else
	wpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set DataTable("OrderNum", dtGlobalSheet)
	wpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
End If
 @@ hightlight id_;_1982785512_;_script infofile_;_ZIP::ssf5.xml_;_
wpfWindow("Micro Focus MyFlight Sample").WpfObject("TotalPrice").Output CheckPoint("TotalPrice") @@ hightlight id_;_2022986840_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("flightNumber").Output CheckPoint("FlightNumber") @@ hightlight id_;_2033451176_;_script infofile_;_ZIP::ssf15.xml_;_
Environment("ON1") = wpfWindow("Micro Focus MyFlight Sample").WpfObject("TotalPrice").GetROProperty("text")
'msgbox Environment("ON1")
DataTable("FlightNumber", dtGlobalSheet) = Environment("FlightNumber")
