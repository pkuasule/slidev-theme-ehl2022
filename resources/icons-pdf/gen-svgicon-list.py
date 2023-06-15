import os

# 获取当前.py文件所在的文件夹路径
folder_path = os.path.dirname(os.path.abspath(__file__))

# 遍历文件夹中的所有.svg文件，并将它们的相对路径写入一个.txt文件中
with open("svg_paths.txt", "w") as f:
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".svg"):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, folder_path)
                f.write("./" + rel_path + "\n")
