from clear import clear

def removeTask(pythonDict,original_dict):
    # NOTE: pythonDict = mainMenu[subDict] and original_dict = mainMenu
    askRemove = input("Do you want to remove a task (Yes/No?").lower()

    if askRemove == "yes":
        clear()

        if pythonDict == original_dict["Main"]:
            new_dict={}

            for i, old_keys in enumerate(original_dict["Main"], start=1):
                new_dict[f"{i}"]=old_keys

#         1) creates 'i' for enumerate which it needs for 'start=1'
#         2) old_keys to go through mainMenu["Main"] to gather all the keys of old dict

#       Then, takes new_dict and dynamically adds "i" which is the counter, and makes old_keys
#         the value now instead of the key. This creates a new key:value pair. {"1": "old_key"}


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
            new_dict={}

            for i, old_keys in enumerate(original_dict["Completed"], start=1):
                new_dict[f"{i}"]=old_keys

            print(new_dict) 
            print()  

            keyChoice = input("Input the number of the task you wish to remove :") 
            userChoice = new_dict[keyChoice]   

            del original_dict["Completed"][userChoice] 


        elif pythonDict == original_dict["Daily"]:

            new_dict={}

            for i, old_keys in enumerate(original_dict["Daily"], start=1):
                new_dict[f"{i}"]=old_keys

            print(new_dict) 
            print()  

            keyChoice = input("Input the number of the task you wish to remove :") 
            userChoice = new_dict[keyChoice]   

            del original_dict["Daily"][userChoice] 
            clear()
            print(original_dict)
            moveToCompleted = input("Do you wish to add this to the completed toDo List when finished (Y/N) :")
            print()                                               

        elif pythonDict == original_dict["Weekly"]:
            new_dict={}

            for i, old_keys in enumerate(original_dict["Weekly"], start=1):
                new_dict[f"{i}"]=old_keys

            print(new_dict) 
            print()  

            keyChoice = input("Input the number of the task you wish to remove :") 
            userChoice = new_dict[keyChoice]   

            del original_dict["Weekly"][userChoice] 
            clear()
            print(original_dict)
            moveToCompleted = input("Do you wish to add this to the completed toDo List when finished (Y/N) :")
            print()                                               

        elif pythonDict == original_dict["Monthly"]:
            new_dict={}

            for i, old_keys in enumerate(original_dict["Monthly"], start=1):
                new_dict[f"{i}"]=old_keys

            print(new_dict) 
            print()  

            keyChoice = input("Input the number of the task you wish to remove :") 
            userChoice = new_dict[keyChoice]   

            del original_dict["Monthly"][userChoice] 
            clear()
            print(original_dict)
            moveToCompleted = input("Do you wish to add this to the completed toDo List when finished (Y/N) :")
            print()                                               

        elif pythonDict == original_dict["Yearly"]:
            new_dict={}

            for i, old_keys in enumerate(original_dict["Yearly"], start=1):
                new_dict[f"{i}"]=old_keys

            print(new_dict) 
            print()  

            keyChoice = input("Input the number of the task you wish to remove :") 
            userChoice = new_dict[keyChoice]   

            del original_dict["Yearly"][userChoice] 
            clear()
            print(original_dict)
            moveToCompleted = input("Do you wish to add this to the completed toDo List when finished (Y/N) :")
            print()                                               


    else:
          print("Exiting deleting function")
    