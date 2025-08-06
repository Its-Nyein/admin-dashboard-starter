FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist ./

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# useful tips
#CMD /bin/sh -c 'find /usr/share/nginx/html/assets -type f -name "index-*.js" -exec sed -i "s|http://localhost:3000|${BACKEND_URL}|g" {} \; && nginx -g "daemon off;"'
