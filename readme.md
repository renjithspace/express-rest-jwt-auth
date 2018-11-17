## RESTful API server in ExpressJs with JWT authentication

#### Serve
- Clone the repository
- Install dependencies
```
$ npm i
```
- Serve
```
$ npm run serve
```

#### Check
- Authenticate user with `api_key` to api server and get token
```
$ curl -X POST http://localhost:8080/api/auth -d api_key=uniqueapiauthkey
```
- Access data from api server with the token
```
curl -X GET http://localhost:8080/api/books -H 'authorization: <paste token here>'
```