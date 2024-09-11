# FROM 指定基础镜像
# WORKDIR 设置工作目录
# RUN 执行shell命令
# ENV 设置环境变量
# COPY 复制文件到镜像中
# USER 指定用户
# EXPOSE 暴露端口
# CMD 容器启动时的执行命令，docker run的参数会覆盖CMD指定的参数，多个CMD，只有最后一个CMD才多个
# ENTRYPOINT 容器启动时的入口点命令，docker run的参数不会覆盖ENTRYPOINT指定的参数

# 构建镜像
FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","run", "start"]