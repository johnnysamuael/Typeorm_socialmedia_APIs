import { type } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name: "tweets"})

export class Tweet {
@PrimaryGeneratedColumn("uuid")
id: string;

@Column({length: 80})
title: string;

@Column({length: 300})
content: string;

@ManyToOne(type=> User, user=> user.tweets)
user: Promise<User>
  
}