import React from "react"
import { PropsVideo } from "./Video";

interface PropsCard {
    title: string,
    views: number,
}

const Article = ({ title, views} : PropsVideo) => {
    return (
        <div className="item item-article">
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
        )
    }


export default Article;
export type {PropsCard};