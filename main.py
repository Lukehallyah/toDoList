from clear.py import clear
import time

import subprocess
    # This is only to access the terminal to clear proceding menus
    #     making it easier for me to read my menus



# FOR THE MAIN TO DO LIST: 
#     * Create a main dictionary that has mini lists (the lists have a name and description)
#     * Make a prompt that allows the user to navigate a menu
#     * Learn about functions to make my code cleaner
#     * Use an API or library that lets the user save their todos to their local computer




mainMenu = {
    "Main" : {},
    "Completed" : {},
    "Daily" : {},
    "Weekly" : {}, 
    "Monthly" : {},
    "Yearly" : {},
}

print()
print("Welcome to your To Do List")
print()
questOne = input("Do you want to create a new To Do (Y/N)?").upper()

if questOne == "Y":
    clear()
    # Put some code here to create a new task (key = task name, value = desc)


elif questOne == "N":
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
    questList = int(input("Which list do you want to access (Main, Completed, Daily, Weekly, Monthly, Yearly))? :"))


    if questList == "Main":
        clear()
        print()
        print("Main To Do List")
        print()
        print("You are now on the Main To Do List")
        time.sleep(0.25)
        print("This is where all of your To Dos are held")
        print(mainMenu["Main"])

    elif questList == "Completed":
        clear()
        print()
        print("Completed To Do List")
        print()
        print("You are now on the Completed To Do List")
        time.sleep(0.25)
        print("This is where all of your completed To Dos are found")
        print(mainMenu["Completed"])

    elif questList == "Daily":
        clear()
        print()
        print("Daily To Do List")
        print()
        print("You are now on the Daily To Do List")
        time.sleep(0.25)
        print("This is where all of your Daily To Dos are held")
        print(mainMenu["Daily"])

    elif questList == "Weekly":
        clear()
        print()
        print("Weekly To Do List")
        print()
        print("You are now on the Weekly To Do List")
        time.sleep(0.25)
        print("This is where all of your Weekly To Dos are held")
        print(mainMenu["Weekly"])       

    elif questList == "Monthly":
        clear()
        print()
        print("Monthly To Do List")
        print()
        print("You are now on the Monthly To Do List")
        time.sleep(0.25)
        print("This is where all of your Monthly To Dos are held")
        print(mainMenu["Monthly"])

    elif questList == "Yearly":
        clear()
        print()
        print("Yearly To Do List")
        print()
        print("You are now on the Yearly To Do List")
        time.sleep(0.25)
        print("This is where all of your Yearly To Dos are held")
        print(mainMenu["Yearly"])

    else : 
        print("You did not choose one of the menu options")
        print()
        print("You must choose one of the options : (Main, Completed, Daily, Weekly, Monthly, Yearly)")




