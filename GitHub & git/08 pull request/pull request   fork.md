###团队协作
     （仓库如果是开放的  对于下载读仓库信息不做限制  但是上传修改需要登录认证）
    1、 项目经理创建仓库
         git init 
         配置信息 用户名和邮箱信息  git config user.name " ", git config user.email " "
         配别名 git remote add 别名 URL(远程仓库的HTTPS),
              - git remote -v 查看远程仓库URL对应别名 的列表信息
    2、将本地项目提到远程仓库 
        git push 别名 分支名 ，每次只能提一个分支  同时会创建一个远程跟踪分支
                  注意清除一下 本机上 GitHub凭据  好让GitHub知道是谁在提交项目到仓库
    3、邀请成员  GitHub操作
    4、成员克隆仓库到本地
       git clone URL
       再将更新后的 项目提到远程仓库 
         git push 别名 分支名  ，  同时会创建一个远程跟踪分支
                  (注意清除一下 本机上 GitHub凭据 不是必要的)
    5、项目经理 更新本地仓库（从github上拿更新的内容）
        git fetch 别名 
           拿下来 的更新的内容在 远程跟踪分支上 
             主分支 快进合并 一下就好     
#### 拉取 推送
    1、确保本地分支跟踪 远程跟踪分支  git branch -vv 查看是否跟踪
        clone 仓库 会自动创建主分支master并且 跟踪 远程跟踪分支 ，其他分支需要 跟踪  
            git branch -u 别名/分支名(远程跟踪分支)  此命令  是 当前分支 跟踪远程跟踪分支         
           如果分支还没有创建  git checkout -b 分支名 别名/分支名(远程跟踪分支)，创建并跟踪远程跟踪分支  
                     (git branch --track 别名/分支名  会创建 名字固定的分支 并跟踪远程跟踪分支)       
    2、git push  推送 
    3、git pull  只拉取这一分支的更新的内容
      git fetch  更新全部内容
         如果远程仓库 有本地没有的分支 （拉取下来的信息在 别名/分支名(远程跟踪分支)上  需要创建分支去合并他 以此来更新） 
         需要创建相应的分支  git checkout -b 分支名 别名/分支名(远程跟踪分支)， 创建并跟踪远程跟踪分支
           之后该分支的 拉取信息 只需  git pull 即可  
   - 远程分支 删除
        git push 别名 --delete 分支名 ,  
        git remote prune 别名 --dry-run ，列出远程跟踪分支 但远程分支已删除的无用分支
        git remote prune 别名  ， 删除 无用的远程跟踪分支       
###远程冲突    
   - 本地冲突 
        典型合并       
   - push 的时候 
         成员 与成员新建名字相同的文件但做了不同的修改  一方已上传提交  另一方不知道 也提交上传 
            就会产生冲突 这一方就需要先pull 更新 然后解决冲突  最后再上传  
            之后对方再pull 就不会有冲突 拉取的是解决冲突后的      
   - pull                                 
        成员 与成员新建名字相同的文件  一方已上传提交  另一方不知道 只是修改了但是没有commit提交  直接pull了 就会有冲突（远程与本地的冲突了） 
                需要先将本地的 commit提交   进行push冲突解决  
### 忽略上传文件
      创建  .ignore 文件