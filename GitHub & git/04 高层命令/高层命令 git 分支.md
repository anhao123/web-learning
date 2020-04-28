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
         git log --oneline  简单日志信息
         git log --pretty=oneline   
         git diff  查看哪些修改没有被暂存
         git diff --staged  查看哪些暂存 没有被提交
         git rm  文件名  删除工作目录中的该文件并加到暂存区
         git mv  原文件名 新名  重命名工作目录中的该文件并加到暂存区
### 分支操作
       **分支本质是一个提交对象，所有的分支都会有机会被HEAD所引用(HEAD--个时刻只会指向一个分支)
         当我们有新的提交的时候HEAD会携带当前持有的分支往前移动********
       git branch 查看分支列表 
       git branch --merged  查看已合并 的分支列表
       git branch --no-merged  查看没有合并 的分支列表       
       git log --oneline --decorate --graph --all 查看完整分支 图信息
       *****git reflog 查看 所有 分支操作 的历史信息
       配别名  git config --global alias.别名  命令    git  别名  运行 命令
  - 创建分支  git branch 分支名    
  - 切换分支  git checkout 分支名    
    - git checkout -b 分支名 
      - 新建一个分支 并切换过去
    - 切换分支 特别注意   
      - 一定要查看 当前分支 的文件的状态是否已提交 
  - 删除分支  git branch -d 分支名  
  - 合并分支
    - git merge 分支名  （注意一定是主分支 合并子分支 要事先切换到主分支去合并）
    - 快进合并
      - 是指 主分支与子分支在一条线上 主分支直接过渡到 子分支上
    - 典型合并
      - 主分支有两条或多条子分支时  当主分支首次与子分支合并  就叫快进合并（此时主分支到了其他分支前边）
      -  再次合并其他分支 就叫典型合并（可能会产生冲突因为合并的子分支可能修改了同一文件 解决冲突：进入冲突文件 修改要保留的代码 再 git add ./   git commit -m '注释'）        
    - 合并之后 无用的子分支 可删除  git branch -d 分支名    
  - 切换分支时 如果当前分支还没做完 不想提交为一个版本              
      - 使用 git stash   将当前信息 存到栈中   再次切换回来时  git stash apply  名字（不写就是栈顶的） 找回之前的信息 同时需要删除栈中的信息 git stash drop
      - 使用 git stash   将当前信息 存到栈中   再次切换回来时  git stash pop   取出并删除
          - git stash list   查看栈中的列表信息
          
            
            
            
            
            
            
      