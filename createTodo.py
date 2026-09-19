

# NOTE: these are only here for remembrance sake, when I finish this code and this works, 
#         I can delete the above commented out code.

def createToDo():
        
    toDoName = input("What do you want to name your new ToDo? : ")


    while toDoName in mainMenu["Main"]:
        print("You cannot have the same name")
        toDoName = input("What do you want to name your new ToDo? : ")

    # NOTE: the 'while/in' works better than 'if/in' even though they both check all 
    #     keys because 'if/in' only checks once and 'while/in' keeps stopping the user
    #     until it is changed



    toDoDesc = input("Describe your toDo and what you hope to accomplish : ")
    mainMenu["Main"][toDoName]=toDoDesc
    listType = input("Which list do you want to put this in (Annual(Year), Monthly (Mon), Weekly (Week), Daily(Day))? :").capitalize()
    # NOTE: .capitalize() makes it so that the first letter of the word is capitalized, nice
    while listType not in ("Year", "Mon", "Week", "Day"):
                listType = input("Which list do you want to put this in (Annual(Year), Monthly (Mon), Weekly (Week), Daily(Day))? :")
    if listType == "Year":
        mainMenu["Year"][toDoName]=toDoDesc
    elif listType == "Mon":
        mainMenu["Monthly"][toDoName]=toDoDesc
    elif listType == "Week":
        mainMenu["Weekly"][toDoName]=toDoDesc
    elif listType == "Day":
        mainMenu["Daily"][toDoName]=toDoDesc

        

