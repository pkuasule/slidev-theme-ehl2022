# get the full path of current folder as SCRIPTPATH;
# for every pdf file under SCRIPTPATH:
## get its relative path as REL_PATH;
## write ${REL_PATH} into file ${SCRIPTPATH}/gui_pdf_paths.txt
# echo "Script successfully executed." when everything is done.


#!/bin/bash

# 0. Get full path of this script file √
SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
echo -e "\033[34m【QuickPoint】\033[0mDetected script path as ${SCRIPTPATH}."

cd ${SCRIPTPATH}
# for every pdf file under SCRIPTPATH:
for file in $(find . -name "*.pdf")
    do
        # 获取文件相对路径并写入文件
        REL_PATH=$(echo $file | sed "s/^\.\///")
        target_path=${REL_PATH}
        echo $target_path >> gui_pdf_paths.txt
    done

# echo "Script successfully executed." when everything is done.
echo -e "\033[34m【QuickPoint】\033[32mScript successfully exetuted.\033[0m"