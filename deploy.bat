pnpm docs:build
cd src/.vuepress/dist
git init
git branch -m master deploy
git add .
git commit -m "deploy"
git push -f https://github.com/fkomorebi/komorebi_blog.git deploy
