import os

# 获取母文件夹的母文件夹中符合条件的 .fmp12 文件
for file in os.listdir("../../../"):
    if file.endswith(".fmp12") and ("GUI" in file.upper()):
        # 获取文件名并去掉扩展名
        filename = os.path.splitext(file)[0]

        # 设置目标路径并创建目录
        target_dir = f"./{filename}/resources/icon-pdf/"
        os.makedirs(target_dir, exist_ok=True)

        # 遍历当前文件夹及其子文件夹，查找符合条件的 .pdf 文件
        for root, dirs, files in os.walk("."):
            for file in files:
                if file.endswith(".pdf"):
                    # 获取文件相对路径并写入文件
                    rel_path = os.path.relpath(os.path.join(root, file), start=target_dir)
                    rel_path = rel_path.lstrip("./")
                    target_path = os.path.join(target_dir, rel_path)
                    with open("gui_pdf_paths.txt", "a") as f:
                        f.write(target_path + "\n")
    elif file.endswith(".fmp12"):
        # 遍历文件夹中的所有 .pdf 文件并将它们的相对路径写入文件 "gui_pdf_paths.txt" 中
        for root, dirs, files in os.walk("."):
            for file in files:
                if file.endswith(".pdf"):
                    # 获取文件相对路径并写入文件
                    rel_path = os.path.relpath(os.path.join(root, file), start=".")
                    rel_path = rel_path.lstrip("./")
                    with open("gui_pdf_paths.txt", "a") as f:
                        f.write(rel_path + "\n")
