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
tweet.user = Promise.resolve(user);
tweet.title = "I got  a job";
tweet.content = " Im working now guys"
await tweetRepo.save(tweet).catch((err)=>{
    console.log(err);
})
console.log(tweet)
};

export const find = async()=> {
    const userRepo = getRepository(User)
    const user = await userRepo.findOne({where: {firstName: "sama"}})
    .catch((err)=>{
        console.log(err)
    });
    if (user)
    console.log("user: ",user,await user.tweets)
}