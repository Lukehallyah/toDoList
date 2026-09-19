
# NOTE: these are only here for remembrance sake, when I finish this code and this works, 
#         I can delete the above commented out code.

def createToDo(main_dict):
    # NOTE: must pass an argument to this instead of specific. Cannot import the main dict from 
    #     main.py because it will create an import/export loop too. So create an argument and when 
    #     it is called in main.py run mainMenu dictionary as your argument.
    toDoName = input("What do you want to name your new ToDo? : ")


    while toDoName in main_dict["Main"]:
        print("You cannot have the same name")
        toDoName = input("What do you want to name your new ToDo? : ")

    # NOTE: the 'while/in' works better than 'if/in' even though they both check all 
    #     keys because 'if/in' only checks once and 'while/in' keeps stopping the user
    #     until it is changed



    toDoDesc = input("Describe your toDo and what you hope to accomplish : ")
    main_dict["Main"][toDoName]=toDoDesc
    listType = input("Which list do you want to put this in (Annual(Year), Monthly (Mon), Weekly (Week), Daily(Day))? :").capitalize()
    # NOTE: .capitalize() makes it so that the first letter of the word is capitalized, nice
    while listType not in ("Year", "Mon", "Week", "Day"):
                listType = input("Which list do you want to put this in (Annual(Year), Monthly (Mon), Weekly (Week), Daily(Day))? :")
    if listType == "Year":
        main_dict["Year"][toDoName]=toDoDesc
    elif listType == "Mon":
        main_dict["Monthly"][toDoName]=toDoDesc
    elif listType == "Week":
        main_dict["Weekly"][toDoName]=toDoDesc
    elif listType == "Day":
        main_dict["Daily"][toDoName]=toDoDesc

        

