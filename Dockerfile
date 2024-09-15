FROM node:alpine AS builder

WORKDIR /app

COPY ./package.json ./

RUN npm install --verbose

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf