Dim myArr
myArr = Array("Yaron", "Telyas", 1234)
ReDim Preserve myArr(3)
myArr(3) = 11
For Iterator = 0 To uBound(myArr) Step 1
	
	If Iterator = 3 or Iterator = 2 Then
		print "val: " + cSTR(myArr(Iterator))
	else
		print "val: " + myArr(Iterator)
	End If
	
Next

