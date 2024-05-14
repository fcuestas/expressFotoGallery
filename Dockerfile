FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production
#RUN tsc
CMD ["node", "./dist/app.js"]
EXPOSE 3000
