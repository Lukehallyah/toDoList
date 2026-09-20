from clear import clear

def removeTask(pythonDict,original_dict):
    askRemove = input("Do you want to remove a task?").lower()

    if askRemove == "yes":
        clear()

        # current_dict = mainMenu
        # current_dict = mainMenu["Main"]
        # current_dict = mainMenu["Completed"]
        # current_dict = mainMenu["Daily"]
        # current_dict = mainMenu["Weekly"]
        # current_dict = mainMenu["Monthly"]
        # current_dict = mainMenu["Yearly"]

        # NOTE: the above is only here to remember the keys of the original_dict, not to stay in the 
        #     final code.

        if pythonDict == original_dict["Main"]:
            new_dict={}

            for i, old_keys in enumerate(original_dict["Main"], start=1):
                new_dict[f"{i}"]=old_keys

            print(new_dict) #print the newly created dict for user to choose
            print() #space for visual sake
            keyChoice = input("Input the number of the task you wish to remove :") # users choice from new_dict
                    # NOTE: keeping keyChoice as a string doesn't hurt anything
            userChoice = new_dict[keyChoice] # This is done to keep us from writing new_dict[keyChoice] every single time
            del original_dict["Main"][userChoice] #Looks up userChoice value and compares to original_dict, then deletes
            clear()
            print(original_dict)
            moveToCompleted = input("Do you wish to add this to the completed toDo List when finished (Y/N) :")
            print()            


        elif pythonDict == original_dict["Completed"]:
            # some code here

        elif pythonDict == original_dict["Daily"]:
            # some code here

        elif pythonDict == original_dict["Weekly"]:
            # some code here

        elif pythonDict == original_dict["Monthly"]:
            # some code here

        elif pythonDict == original_dict["Yearly"]:
            # some code here

        



            # NOTE: loop through the keys of the current dictionary. 

            #       Make a new dictionary but this time make the "key" of the previous dictionary
            #         the new value of the new dictionary. The "key" of the new dict will be a number 
            #         that the user can type to make it easier to remove the task from the to do dict

            #         {"1":"Feed the Birds"}
            #         Something like this, where the user only has to type 1

            
            taskName = input("Enter the number of the task that you wish to remove :")


    else:
          
    