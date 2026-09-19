import time

import subprocess
    # This is only to access the terminal to clear proceding menus
    #     making it easier for me to read my menus



# FOR THE MAIN TO DO LIST: 
#     * Create a main dictionary that has mini lists (the lists have a name and description)
#     * Make a prompt that allows the user to navigate a menu
#     * Learn about functions to make my code cleaner
#     * Use an API or library that lets the user save their todos to their local computer

def clear():
    subprocess.run("clear", shell=True)
    # When I use subprocess I'm using a python library to access the normal routines of my 
    # computer. In this case telling it to access the shell in my command terminal. Shell is what 
    # interprets and uses commands such as "clear" to clear your terminal. Otherwise when I type clear()
    # python would try to find "clear" somewhere instead of using shell. This is why I need shell=True




mainMenu = {
    "1" : {},
    "2" : {},
    "3" : {},
    "4" : {}, 
    "5" : {},
    "6" : {},
}

print()
print("Welcome to your To Do List")
print()
questOne = input("Do you want to create a new To Do (Y/N)?").upper()

if questOne == "Y":
    clear()
    # Put some code here to choose which list
    # Put some code here to create a new task (key = task name, value = desc)


elif questOne == "N":
    clear()
    print("Accessing To Do Lists")

    questList = int(input("Which list do you want to access (1-6)? :"))

    print("1 : Main To Do List")
    print("2 : Completed To Do List")
    print("3 : Daily To Do List")
    print("4 : Weekly to Do List")
    print("5 : Monthy to Do List")
    print("6 : Annual To Do List")

    if questList == 1:
        clear()
        print()
        print("Main To Do List")
        print()
        print("You are now on the Main To Do List")
        time.sleep(0.25)
        print("This is where all of your To Dos are held")
        print(mainMenu["1"])

    elif questList == 2:
        clear()
        print()
        print("Completed To Do List")
        print()
        print("You are now on the Completed To Do List")
        time.sleep(0.25)
        print("This is where all of your completed To Dos are found")
        print(mainMenu["2"])

    elif questList == 3:
        clear()
        print()
        print("Daily To Do List")
        print()
        print("You are now on the Daily To Do List")
        time.sleep(0.25)
        print("This is where all of your Daily To Dos are held")
        print(mainMenu["3"])

    elif questList == 4:
        clear()
        print()
        print("Weekly To Do List")
        print()
        print("You are now on the Weekly To Do List")
        time.sleep(0.25)
        print("This is where all of your Weekly To Dos are held")
        print(mainMenu["4"])       

    elif questList == 5:
        clear()
        print()
        print("Monthly To Do List")
        print()
        print("You are now on the Monthly To Do List")
        time.sleep(0.25)
        print("This is where all of your Monthly To Dos are held")
        print(mainMenu["5"])

    elif questList == 6:
        clear()
        print()
        print("Annual To Do List")
        print()
        print("You are now on the Annual To Do List")
        time.sleep(0.25)
        print("This is where all of your Annual To Dos are held")
        print(mainMenu["6"])




