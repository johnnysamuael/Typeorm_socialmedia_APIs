import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import { bootstrap, find } from "./bootstrap";
import { Tweet } from "./entity/tweet";
import {User} from "./entity/User";

createConnection().then(async connection => {
   
    await bootstrap().catch((err)=>{
        console.log(err);
    })
    await find().catch((err)=>{
        console.log(err);
    })

}).catch(error => console.log(error));
