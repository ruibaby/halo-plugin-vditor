#!/bin/zsh

cd src/main/resources/static
rm -rf dist
pwd
curl -o vditor.tgz \
 https://git.mczhengyi.top/zhengyi/-/packages/npm/@zhengyi%2Fvditor/3.9.10/files/262
tar -xzvf vditor.tgz
mv package/dist .
rm -rf package
rm -f vditor.tgz
