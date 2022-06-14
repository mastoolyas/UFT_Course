' Initial condition
If WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Exist(0) = True Then
	WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Click
End If
 @@ hightlight id_;_2134126960_;_script infofile_;_ZIP::ssf4.xml_;_
' Check points
WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Check CheckPoint("fromCity") @@ hightlight id_;_2088713144_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Check CheckPoint("toCity") @@ hightlight id_;_2074877480_;_script infofile_;_ZIP::ssf25.xml_;_
 
' Create order
WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select "Frankfurt" @@ hightlight id_;_1934052456_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select "Denver" @@ hightlight id_;_1977898552_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfImage("WpfImage_3").Click 14,12 @@ hightlight id_;_1977896536_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfCalendar("א").SetDate "9-Mar-2017" @@ hightlight id_;_1934084376_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1934086008_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1954738272_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1954738320_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1934086968_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1977899464_;_script infofile_;_ZIP::ssf17.xml_;_

' Check point
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Check CheckPoint("ORDER") @@ hightlight id_;_2089858024_;_script infofile_;_ZIP::ssf26.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set "Gil" @@ hightlight id_;_1954740672_;_script infofile_;_ZIP::ssf18.xml_;_

' Check point
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Check CheckPoint("ORDER_2") @@ hightlight id_;_2089858792_;_script infofile_;_ZIP::ssf27.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click @@ hightlight id_;_1977901000_;_script infofile_;_ZIP::ssf19.xml_;_
 @@ hightlight id_;_65824_;_script infofile_;_ZIP::ssf14.xml_;_
' Sync
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTicketsCombo").WaitProperty "enabled", True, 10000 @@ hightlight id_;_2083236744_;_script infofile_;_ZIP::ssf20.xml_;_
Wait 2

' Check point - verify success message
WpfWindow("HP MyFlight Sample Application").WpfObject("Order completed").Check CheckPoint("Order completed") @@ hightlight id_;_2088280528_;_script infofile_;_ZIP::ssf28.xml_;_

' Verify the sync
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTicketsCombo").Select "3" @@ hightlight id_;_2075812496_;_script infofile_;_ZIP::ssf22.xml_;_
