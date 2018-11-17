## RESTful API server in ExpressJs with JWT authentication

#### Serve
1. Clone the repository
2. Install dependencies
```
$ npm i
```
3. Serve
```
$ npm run serve
```

#### Check
1. Authenticate user with `api_key` to api server and get token
```
$ curl -X POST http://localhost:8080/api/auth -d api_key=uniqueapiauthkey
```
2. Access data from api server with the token
```
curl -X GET http://localhost:8080/api/books -H 'authorization: <paste token here>'
```