import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "Bankman-Fried, FTX execs received billions in hidden loans, ex-Alameda CEO says - Reuters",
            "description": "<a href=\"/business/how-did-bankman-fried-secure-250-mln-bail-2022-12-22/\">Sam Bankman-Fried</a> and other FTX executives received billions of dollars in secret loans from the crypto mogul's Alameda Research, the hedge fund's former chief told a judge when she…",
            "url": "https://www.reuters.com/legal/alamedas-ex-ceo-tells-judge-she-hid-billions-loans-ftx-execs-2022-12-23/",
            "urlToImage": "https://www.reuters.com/resizer/MVth4PJYd7crjPNi_yEbudwYsIM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HGIBS6V6DVLOFDBEJMSIQK4J54.jpg",
            "publishedAt": "2022-12-23T23:59:00Z",
            "content": "NEW YORK, Dec 23 (Reuters) - Sam Bankman-Fried and other FTX executives received billions of dollars in secret loans from the crypto mogul's Alameda Research, the hedge fund's former chief told a jud… [+3817 chars]"
          },
          {
            "source": { "id": null, "name": "ESPN" },
            "author": null,
            "title": "Jets assistant Miles Austin suspended for gambling, to appeal - ESPN",
            "description": "Jets receivers coach Miles Austin is being suspended for at least one year, a source told ESPN, after he violated the NFL's gambling policy by betting on sports.",
            "url": "https://www.espn.com/nfl/story/_/id/35311671/source-jets-assistant-miles-austin-suspended-gambling",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1223%2Fr1110166_1296x729_16%2D9.jpg",
            "publishedAt": "2022-12-23T22:59:24Z",
            "content": "New York Jets wide receiver coach Miles Austin is being suspended for at least one year, a source told ESPN's Adam Schefter and Rich Cimini, for violating the NFL's gambling policy.\r\nThe NFL issued a… [+2030 chars]"
          },
          {
            "source": { "id": "fox-news", "name": "Fox News" },
            "author": "Gabriel Hays",
            "title": "Pelosi mocked for wishing Americans a ‘Happy Shwanza’ during final speech as House Speaker: 'Shawarma?' - Fox News",
            "description": "Conservatives on Twitter ripped House Speaker Nancy Pelosi, D-Calif., for accidentally saying, \"Happy Shwanza\" during remarks to Congress on Friday.",
            "url": "https://www.foxnews.com/media/pelosi-mocked-wishing-americans-happy-shwanza-during-final-speech-house-speaker",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/Shwanza.png",
            "publishedAt": "2022-12-23T22:42:33Z",
            "content": "Twitter grilled Speaker of the House Nancy Pelosi, D-Calif., on Friday for wishing people a \"Happy Shwanza,\" instead of \"Kwanzaa\" during remarks closing out the Houses vote on the \"omnibus\" spending … [+2704 chars]"
          }
    ]
    constructor(){
        super();
        console.log('Hello I am a constructor from news component');
        this.state={
            articles:this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey -Top Headlines</h2>
        <div className='row'>
        <div className='col-md-4'>
        <NewsItem title={'news title'} description={'my description'} imageUrl={'https://www.foxnews.com/media/pelosi-mocked-wishing-americans-happy-shwanza-during-final-speech-house-speaker'}/>
        </div>

        <div className='col-md-4'>
        <NewsItem title={'news title'} description={'my description'}/>
        </div>

        <div className='col-md-4'>
        <NewsItem title={'news title'} description={'my description'}/>
        </div>
        </div>
      </div>
    )
  }
}
