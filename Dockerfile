#* Nodejs Image 
FROM node:18-alpine3.18

#* Working directory
WORKDIR /app

#* copy the package.json and package-lock.json to the working directory
COPY package*.json ./

#* copy the tsconfig.json and tsconfig-build.json to the working directory
COPY tsconfig*.json ./

#* Install all dependencies
#RUN npm install
RUN npm install --production

#* Copy the entire app
COPY . . 

#* Creates a "dist" folder with the production build
#RUN npm run build

#* Expose port
EXPOSE 3000

#* Run the command
CMD ["npm", "run", "start:dev"]










