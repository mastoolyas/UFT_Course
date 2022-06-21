'with repo manager
i=0
While Browser("QTP Web Demo").Page("QTP Web Demo").WebCheckBox("Row0").Exist(0)
	Browser("QTP Web Demo").Page("QTP Web Demo").WebCheckBox("Row0").Set "ON"
	i = i+1
	Browser("QTP Web Demo").Page("QTP Web Demo").WebCheckBox("Row0").SetTOProperty "html id", "Row" & i
Wend
 @@ hightlight id_;_Browser("QTP Web Demo").Page("QTP Web Demo").WebCheckBox("Row0")_;_script infofile_;_ZIP::ssf1.xml_;_
'with scripting
i=0
While Browser("QTP Web Demo").Page("QTP Web Demo").WebCheckBox("html id:=Row" & i).Exist(0)
	Browser("QTP Web Demo").Page("QTP Web Demo").WebCheckBox("html id:=Row" & i).Set "OFF"
	i = i+1
Wend

'with description 
Set objDesc = Description.Create
objDesc("html id").value = "Row\d+"
Set allCheckBoxs = Browser("QTP Web Demo").Page("QTP Web Demo").ChildObjects(objDesc)
For Iterator = 0 To allCheckBoxs.count -1 Step 1
	allCheckBoxs(Iterator).set "ON"
Next
