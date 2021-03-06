import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Tweet } from "./Tweet";

@Entity({name: "user"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({type: "int"})
    role: number

    @OneToMany(type => Tweet,tweet => tweet.user)
    tweets: Promise<Tweet[]>;


}
