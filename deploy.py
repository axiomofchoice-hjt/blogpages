import os
import sys
import shutil

os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"

os.chdir(sys.path[0])
os.system("yarn build")
os.chdir("../Puzzles")
os.system("yarn build")

os.chdir("../Axiomofchoice-hjt.github.io")

for i in os.listdir("."):
    if i == ".git" or i == "README.md" or i == "LICENSE":
        continue
    if os.path.isfile(i):
        os.remove(i)
    else:
        shutil.rmtree(i)

for i in os.listdir("../blogpages/docs/.vuepress/dist"):
    path = os.path.join("../blogpages/docs/.vuepress/dist", i)
    if os.path.isfile(path):
        shutil.copy(path, i)
    else:
        shutil.copytree(path, i)

shutil.copytree("../Puzzles/dist", "puzzles")
os.system("git add .")
os.system("git commit -m deploy")
os.system("git push")
print("deploy ok")
