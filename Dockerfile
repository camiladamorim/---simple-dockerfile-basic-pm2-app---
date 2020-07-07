FROM node:10.16.0-alpine
RUN npm install pm2@latest -g
RUN npm install express
COPY app/package.json app/
COPY app/ecosystem.config.js app/
COPY app/app.js app/
#falta fazer ele pegar o codigo do git e não ficar dependendo do seu pc
EXPOSE 7000
CMD ["pm2-runtime", "app/app.js"]
