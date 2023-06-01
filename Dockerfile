# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /FAB-APP
COPY package*.json ./
ENV NODE_ENV production
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000