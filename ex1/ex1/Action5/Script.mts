wpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
wpfWindow("Micro Focus MyFlight Sample").WpfRadioButton(DataTable("SearchBy", dtLocalSheet)).Set
If DataTable("Name", dtGlobalSheet) <> "" Then
	wpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set DataTable("Name", dtGlobalSheet)
    wpfWindow("Micro Focus MyFlight Sample").WpfCalendar("byDatePicker").SetDate "07-Jul-2022"
    wpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
 	wpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectCell 0,1
	wpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click
else
	wpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("a")
	wpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
End If



