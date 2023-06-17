#!/bin/bash

# 0. Get full path of this script file √
SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
echo "Detected script path as ${SCRIPTPATH}."

# 1. clean up √
if [ -d "${SCRIPTPATH}/icons-pdf" ]; then
  rm -r "${SCRIPTPATH}/icons-pdf"
  echo "Removed old /icons-pdf folder."
fi

# 2. 用curl下载zip文件 √
echo "Downloading zip file from https://github.com/pkuasule/slidev-theme-ehl2022/archive/refs/heads/main.zip"
curl -L https://github.com/pkuasule/slidev-theme-ehl2022/archive/refs/heads/main.zip -o ${SCRIPTPATH}/slidev-theme-ehl2022-main.zip
echo "Download complete."


# 3. 解压zip文件
echo "Unziping..."
unzip -qq ${SCRIPTPATH}/slidev-theme-ehl2022-main.zip

# 4. 移动icons-pdf文件夹
echo "Move the downloaded /icons-pdf into the same folder as the current script."
mv ${SCRIPTPATH}/slidev-theme-ehl2022-main/resources/icons-pdf .

# 5. 删除slidev-theme-ehl2022-main文件夹
echo "Remove the unused folder and zip file."
rm -r ${SCRIPTPATH}/slidev-theme-ehl2022-main

# 6. 删除zip文件 
rm ${SCRIPTPATH}/slidev-theme-ehl2022-main.zip

echo -e "\n\033[32mScript successfully exetuted.\033[0m"