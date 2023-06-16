# 获取向上3层文件夹中符合条件的 .fmp12 文件 
for file in ../../../*
do
    if [[ $file == *.fmp12 ]] && [[ $(echo $file | tr '[:lower:]' '[:upper:]') == *GUI* ]] 
    then
        # 获取文件名并去掉扩展名
        filename=${file%.*} 

        # 遍历当前文件夹及其子文件夹,查找符合条件的 .pdf 文件
        for file in $(find . -name "*.pdf")
        do
            # 获取文件相对路径并写入文件
            rel_path=$(echo $file | sed "s/^\.\///")
            target_path=${filename}/${rel_path}
            echo $target_path >> gui_pdf_paths.txt
        done
    fi
done