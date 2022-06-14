RunAction "LogIn", oneIteration
RunAction "NewOrder", allIterations, Environment("fCreateOrder")
RunAction "SearchOrder", allIterations, Parameter("NewOrder", "fCreateOrder")
RunAction "LogOut", oneIteration
