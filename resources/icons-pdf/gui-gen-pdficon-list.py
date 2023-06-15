import os

# 获取向上3层文件夹中符合条件的 .fmp12 文件
for file in os.listdir("../../../"):
    if file.endswith(".fmp12") and ("GUI" in file.upper()):
        # 获取文件名并去掉扩展名
        filename = os.path.splitext(file)[0]

        # 遍历当前文件夹及其子文件夹，查找符合条件的 .pdf 文件
        for root, dirs, files in os.walk("."):
            for file in files:
                if file.endswith(".pdf"):
                    # 获取文件相对路径并写入文件
                    rel_path = os.path.relpath(os.path.join(root, file), start=".")
                    rel_path = rel_path.lstrip("./")
                    target_path = os.path.join(filename, rel_path)
                    with open("gui_pdf_paths.txt", "a") as f:
                        f.write(target_path + "\n")