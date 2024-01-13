import Article from "./Article";

interface PropsVideo {
    title?: string, 
    url?: string,
    views: number,
    type: string,
}


const Video = ({url, views }: PropsVideo) => {
    return (
        <div className="item item-video">
            <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    )
}

export default Video;
export type {PropsVideo};