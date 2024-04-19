# qp-assessment

# Prequsite
 1. Create a .env file in src directory
 2. Add db credentials like environment variable (DATABASE_USER,DATABASE_PASSWORD,DATABASE_HOST,DATABASE_PORT etc)

# To start the service :
 1. first install all dependencies run ```npm i```
 2. run ``` npm start ```

# Docker Build :
 1. to build docker image you have to pass environment vaiable as build arguments like HOST ,PORT ,etc as we have in .env file
 2. run ```docker build --build-arg HOST=${value} --build-arg PORT=${value} --build-arg DATABASE_HOST=${value} --build-arg DATABASE_PORT=${value} --build-arg DATABASE_USER=${value} --build-arg DATABASE_PASSWORD=${value} --build-arg DATABASE_NAME=${value} --build-arg JWT_SECRET=${value} -t qp_assessment  ./``` in directory where dockerfile is located
