FROM node:20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm uninstall win-node-env
RUN npm install
COPY . .
CMD ["npm", "start"]