<h1> Sample Portfolio </h1>
This static website is generated using Bolt.new

## Usage instructions to run locally
Run following commands
```sh
npm install
```
```sh
npm run dev
```
Open http://localhost:5173/ in browser


## Run on Docker

1. Build Docker image
```sh
docker build -t sample-portfolio .
```

2. Run the container
```sh
docker run -itd -p 5173:5173 --name my-portfolio sample-portfolio
```