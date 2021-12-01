#

# docker build -t angular-front-start .
# docker build -t angular-front-start --build-arg HTTP_PROXY=http://192.168.1.253:3128 --build-arg HTTPS_PROXY=http://192.168.1.253:3128 .
# docker run -d -p 8081:80 sample-app-image:latest


#STAGE 1
FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
### Proxy
RUN npx dockerproxy start --address http://192.168.1.253 --port 3128
#RUN npm config set https-proxy http://192.168.1.253:3128
#RUN npm config set proxy http://192.168.1.253:3128
#RUN npm config set registry http://registry.npmjs.org/
### Proxy
# RUN npm install
# RUN npm -d install
RUN npm install --production
COPY . .
# RUN npm run build
RUN npm run build:production

#STAGE 2
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/sample-app /usr/share/nginx/html
