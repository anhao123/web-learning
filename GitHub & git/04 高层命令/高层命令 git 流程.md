###文件的状态
   - 已跟踪
     - 已修改
     - 已暂存
     - 已提交
   - 未跟踪
         
### git命令
   - 初始化 git init  
       创建工作目录
   - git add ./  
        创建git对象  并到暂存区中      
   - git commit -m "注释信息"
       - 有多注释信息时  git commit  回车 进入编辑注释 保存退出
   - git commit -a -m "注释信息"
       - （前提是文件状态为 已跟踪 才可使用 -a ）跳过 git add 操作   直接一步到位  提交版本到版本库
##### git status  查看文件状态
##### git log  查看日志  具体日志信息
   - git log --oneline  简单日志信息
   - git log --pretty=oneline   
#### git diff  查看哪些修改没有被暂存
#### git diff --staged  查看哪些暂存 没有被提交
#### git rm  文件名  删除工作目录中的该文件并加到暂存区
 #### git mv  原文件名 新名  重命名工作目录中的该文件并加到暂存区
    
            
            
            
            
            
            
            
      