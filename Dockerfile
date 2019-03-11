FROM node:latest

RUN mkdir -p /app
COPY ./sampleapp.js /app

WORKDIR /app
EXPOSE 8000

CMD ["node", "sampleapp.js"]
