import React, { Component } from "react";

export default class NewsItem extends Component {
  API_KEY = "16a4e1d512a7489caf4110e00dc64625";
  
  render() {
    let {title,description,imageUrl,newsUrl}= this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                 {description}
            </p>
            <a href={`/newsdetail/:${newsUrl}`} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
