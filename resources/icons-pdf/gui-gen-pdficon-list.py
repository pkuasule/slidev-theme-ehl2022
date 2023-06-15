import os

# 遍历当前文件夹及其子文件夹，查找符合条件的 .fmp12 文件
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".fmp12") and ("GUI" in file.upper()):
            # 获取文件名并去掉扩展名
            filename = os.path.splitext(file)[0]

            # 设置目标路径并创建目录
            target_dir = f"./{filename}/resource/icon-pdf/"
            os.makedirs(target_dir, exist_ok=True)

            # 遍历当前文件夹及其子文件夹，查找符合条件的 .pdf 文件
            for root2, dirs2, files2 in os.walk("."):
                for file2 in files2:
                    if file2.endswith(".pdf"):
                        # 获取文件相对路径并写入文件
                        rel_path = os.path.relpath(os.path.join(root2, file2), start=target_dir)
                        with open("gui_pdf_paths.txt", "a") as f:
                            f.write(rel_path + "\n")
                            
# 如果没有找到符合条件的 .fmp12 文件，则直接遍历文件夹中的所有 .pdf 文件
if not os.path.exists("gui_pdf_paths.txt"):
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith(".pdf"):
                # 获取文件相对路径并写入文件
                rel_path = os.path.relpath(os.path.join(root, file), start=".")
                with open("gui_pdf_paths.txt", "a") as f:
                    f.write(rel_path + "\n")