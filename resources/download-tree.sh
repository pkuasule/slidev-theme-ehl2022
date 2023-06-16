#!/bin/bash

# 0 clean up
if [ -d "icons-pdf" ]; then
  rm -r "icons-pdf"
fi

# 1. 用curl下载zip文件
curl -L https://github.com/pkuasule/slidev-theme-ehl2022/archive/refs/heads/main.zip -o slidev-theme-ehl2022-main.zip

# 2. 解压zip文件
unzip slidev-theme-ehl2022-main.zip

# 3. 移动icons-pdf文件夹
mv slidev-theme-ehl2022-main/resources/icons-pdf .

# 4. 删除slidev-theme-ehl2022-main文件夹
rm -r slidev-theme-ehl2022-main

# 5. 删除zip文件 
rm slidev-theme-ehl2022-main.zip