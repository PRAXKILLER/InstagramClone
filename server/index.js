require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from 'express-session';

// Routes
import Routes from './routes';

// RouteConfig
import privateRouteConfig from './config/routeConfig';

import db from './database';

privateRouteConfig(passport);

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "InstaApp"
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.use('/insta', Routes);

app.listen(4000, () => {
    db()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running but Database connection failed");
            console.log(error);
        });
});