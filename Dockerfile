FROM node:19.6.0-alpine as build


#copy the react app to container

WORKDIR /app

COPY . .


RUN npm install
RUN npm run build

#prepare nginx
FROM nginx:stable-alpine
ENV PORT=80

COPY --from=build /app/build /usr/share/nginx/html
#copy preapred file with $PORT variable
COPY ./default.conf /etc/nginx/conf.d/

# Replace $PORT with $PORT value and run nginx.
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'