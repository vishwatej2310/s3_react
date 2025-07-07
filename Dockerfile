from node
workdir /app
copy . /app
run npm install
EXPOSE 3000

CMD ["npm","start"]