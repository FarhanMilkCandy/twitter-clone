import { BsStars } from 'react-icons/bs';
import Posts from '../Posts';
import TweetBox from './TweetBox';

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [{
    displyName: 'Farhan',
    username: '0xFarhan',
    avatar: 'https://avatars.githubusercontent.com/u/59729868?s=400&u=8aeb83fee5b79a48d2abd6b6590d252a9ae7ea19&v=4',
    text: 'Hello World',
    isProfileImageNFT: false,
    timeStamp: "2021-02-07T18:00:00.000Z"
},
{
    displyName: 'Farhan',
    username: '0xFarhan',
    avatar: 'https://avatars.githubusercontent.com/u/59729868?s=400&u=8aeb83fee5b79a48d2abd6b6590d252a9ae7ea19&v=4',
    text: 'This is another tweet',
    isProfileImageNFT: false,
    timeStamp: "2022-04-07T12:00:00.000Z",
    tweet: "This is a tweet"
},
]

function Feed() {
    return (
        <div className={`${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <div>
                <TweetBox />
                {tweets.map((tweet, index) => (
                    <Posts
                        key={index}
                        displyName={tweet.displyName}
                        username={`${tweet.username.slice(0,4)}...${tweet.username.slice(-4)}`}
                        avatar={tweet.avatar}
                        text={tweet.text}
                        isProfileImageNFT={tweet.isProfileImageNFT}
                        timeStamp={tweet.timeStamp}
                        tweet={tweet} />
                ))}
            </div>
        </div>
    )
}

export default Feed