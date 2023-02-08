
# docker ssi

Build with:
```
docker build -t bidi-image .

Example:
docker build -t test-image .
```

Run with:
```
docker run --rm --name bidi-container -p 5001:80 -v ${PWD}/www:/var/www/html bidi-image

Example:
docker run --rm --name test-container -p 5001:80 -v ${PWD}/www:/var/www/html test-image
```

```
http://localhost:5001/
```
