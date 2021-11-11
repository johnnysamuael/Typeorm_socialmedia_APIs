import {createConnection, getRepository, Repository} from "typeorm";
import { Tweet } from "./entity/Tweet";
import {User} from "./entity/User";
export const bootstrap = async()  => {

    const userRepo = getRepository(User);
    const user = userRepo.create({firstName: "sama", lastName: "mana", age:15})
    await userRepo.save(user).catch((err)=> {
        console.log(err)
    });

console.log(user);
const tweetRepo = getRepository(Tweet);
const tweet = new Tweet;
tweet.user = user;
tweet.title = "I got  a job";
tweet.content = " Im working now guys"
await tweetRepo.save(tweet).catch((err)=>{
    console.log(err);
})
console.log(tweet)
};