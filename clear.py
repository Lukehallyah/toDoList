
import subprocess
def clear():
    subprocess.run("clear", shell=True)
    # When I use subprocess I'm using a python library to access the normal routines of my 
    # computer. In this case telling it to access the shell in my command terminal. Shell is what 
    # interprets and uses commands such as "clear" to clear your terminal. Otherwise when I type clear()
    # python would try to find "clear" somewhere instead of using shell. This is why I need shell=True

# NOTE: every python file is automatically a module unlike javascript. This means that you do not have
#       to export anything and you can just import whatever you need as long as it's in the same folder.
#       This makes python much easier to use.