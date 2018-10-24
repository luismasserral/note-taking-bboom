# Note App - BBoom

![Note App - BBoom](https://i.imgur.com/LlOtjyN.png "Note App - BBoom")


## Configuring Server

Install dependencies in `server` folder

```
cd server
npm install
```

Make a copy of `server/db/config/config.example.json` as `server/db/config/config.json`

Set your MySQL configuration in `server/db/config/config.json` for the `development` key

```
{
  "development": {
    "username": "theUsername",
    "password": "thePassword",
    "database": "theDatabaseName",
    "host": "theHost",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

Make a copy of `.env.example` as `.env` and set the port and secret key

```
PORT=8001
TOKEN_SECRET=mySuperSecretKey
```

Run sequelize migration task. This will create the database and load default users (user1@email.com, user2@email.com, user3@email.com with password `123456` for all of them)

```
npm run sequelize
```

And now you can start the server running

```
npm run start:dev
```

## Configuring Client

Install dependencies in `frontend` folder

```
cd client
npm install
```

You can change the port in `vue.config.js` file

```
module.exports = {
  devServer: {
    port: 7072,
  },
};

```

And now you can start the client running

```
npm run serve
```