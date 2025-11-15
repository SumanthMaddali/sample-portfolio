FROM node:lts-alpine3.22

WORKDIR /app

#copy package.json and package-lock.json
COPY package*.json .

#install npm packages
RUN npm install

#copy rest of the code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]