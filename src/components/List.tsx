import Article from "./Article";
import Video, { PropsVideo } from "./Video"
import uuid from 'react-uuid';
import withVisualCard from "./HOC/Visual";

interface PropsList {
    list: PropsVideo[];
}

const VideoVisual = withVisualCard(Video);
const ArticleVisual = withVisualCard(Article)

const List = ({list}:  PropsList) => {
    return list.map(item => {
        console.log(item.type);
        switch (item.type) {
            case 'video':
                return (
                    
                    <VideoVisual key={uuid()}{...item} />
                );

            case 'article':
                return (
                    <ArticleVisual key={uuid()} {...item} />
                );
        }
    });
}

export default List;