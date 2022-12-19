FROM node 

WORKDIR /server 

COPY package.json /server

RUN yarn install 

COPY . . 

EXPOSE 3001 

CMD ["node", "server.ts"] 

