from clear import clear
from createTodo import createToDo
from removeTask import removeTask
from displayMenu import displayMenu

import time

import subprocess


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

# current_dict = mainMenu

######
# Some code here to bring up a menu, maybe I should put this in a function 
#     and then just activate that function here.

displayMenu(mainMenu)




######







