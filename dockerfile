FROM node:alpine as builder
WORKDIR '/app'
COPY ./ ./
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=stagefrom builder /app/dist/SecondDemo/usr/share/nginx/html