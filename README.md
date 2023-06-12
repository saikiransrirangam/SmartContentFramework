# SmartContentFramework

Smart Content Framework POC...

## Mongo Database

Run the following command:

```bash
$ docker-compose up --build -d mongodb
```

The connection string is

```bash
mongodb://root:pass1wd@localhost:27017/?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256
```
