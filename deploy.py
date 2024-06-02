import os
import sys
import shutil
import xml.etree.ElementTree as et

os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"

os.chdir(sys.path[0])
os.system("yarn build")

tree = et.parse("../blogpages/docs/.vuepress/dist/rss.xml")
root = tree.getroot()
for i in root[0]:
    if i.find('guid') is not None and i.find('guid').text in [
        'https://axiomofchoice-hjt.github.io/archives/',
        'https://axiomofchoice-hjt.github.io/categories/',
        'https://axiomofchoice-hjt.github.io/',
    ]:
        root[0].remove(i)
tree.write("../blogpages/docs/.vuepress/dist/rss.xml", encoding='utf-8')

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
