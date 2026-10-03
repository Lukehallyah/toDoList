# What I want to accomplish in this file and why its own function:

#     1)If I have to use over and over, no reason to make code so long when can just run function
#     2)keeps all the code for this menu in same place
#     3) Cleans up code. main.py really should just be a hub for code imports
#     4)Cleaner, more easily edited code

from createTodo import createToDo
import time
from clear import clear
from removeTask import removeTask

def displayMenu(original_dict):

# WHAT I WANT TO ACCOMPLISH: 
    # 1) Bring up a menu to create a task, delete a task, view the different lists, view completed

    choices ={
        "1": "Create a new Task",
        "2": "Display your To Do Lists", 
        "3": "View completed To Do Tasks",
        "4": "Delete a task from a To Do List",
        
    }


    print()
    print("Welcome to your toDoList")
    print(choices)
    quest1 = input("Here are your options, choose what you wish to accomplish : ")

    if quest1 == choices["1"]:
        clear()
        print("Creating a New Task")
        time.sleep(0.25)
        createToDo()


########################################################################################################################

    elif quest1 == choices["2"]:
        current_dict = original_dict["Main"]
        clear()
        print("Accessing To Do Lists")

        print()
        print("Main To Do List")
        print("Completed To Do List")
        print("Daily To Do List")
        print("Weekly to Do List")
        print("Monthy to Do List")
        print("Yearly To Do List")
        print()
        questList = input("Which list do you want to access (Main, Completed, Daily, Weekly, Monthly, Yearly))? :").capitalize()

        while questList not in ("Main", "Completed", "Daily", "Weekly", "Monthly", "Yearly"):
            print("You haven't chosen a menu choice, try again")
            questList = input("Which list do you want to access (Main, Completed, Daily, Weekly, Monthly, Yearly))? :").capitalize()

        if questList == "Main":
            current_dict = original_dict["Main"]

            clear()
            print()
            print("Main To Do List")
            print()
            print("You are now on the Main To Do List")
            time.sleep(0.25)
            print("This is where all of your To Dos are held")
            print(original_dict["Main"])
            removeTask(original_dict["Main"], original_dict)

        elif questList == "Completed":
            current_dict = original_dict["Completed"]

            clear()
            print()
            print("Completed To Do List")
            print()
            print("You are now on the Completed To Do List")
            time.sleep(0.25)
            print("This is where all of your completed To Dos are found")
            print(original_dict["Completed"])

        elif questList == "Daily":
            current_dict = original_dict["Daily"]

            clear()
            print()
            print("Daily To Do List")
            print()
            print("You are now on the Daily To Do List")
            time.sleep(0.25)
            print("This is where all of your Daily To Dos are held")
            print(original_dict["Daily"])

        elif questList == "Weekly":
            current_dict = original_dict["Weekly"]

            clear()
            print()
            print("Weekly To Do List")
            print()
            print("You are now on the Weekly To Do List")
            time.sleep(0.25)
            print("This is where all of your Weekly To Dos are held")
            print(original_dict["Weekly"])       

        elif questList == "Monthly":
            current_dict = original_dict["Monthly"]

            clear()
            print()
            print("Monthly To Do List")
            print()
            print("You are now on the Monthly To Do List")
            time.sleep(0.25)
            print("This is where all of your Monthly To Dos are held")
            print(original_dict["Monthly"])

        elif questList == "Yearly":
            current_dict = original_dict["Yearly"]

            clear()
            print()
            print("Yearly To Do List")
            print()
            print("You are now on the Yearly To Do List")
            time.sleep(0.25)
            print("This is where all of your Yearly To Dos are held")
            print(original_dict["Yearly"])



########################################################################################################################

    elif quest1 == choices["3"]:
        print()

        
    elif quest1 == choices["4"]:
        print()
