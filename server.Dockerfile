FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install packages
RUN yarn

# Bundle the app source
COPY . .

EXPOSE 8080
CMD ["yarn", "dev"]