import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
  }
  // static propTypes={
  //    country:PropTypes.string,
     
  // }
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=16a4e1d512a7489caf4110e00dc64625&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    // if (!this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=16a4e1d512a7489caf4110e00dc64625&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let res = await fetch(url);
      let data = await res.json();
      this.setState({
        page: this.state.page + 1,
        articles: data.articles,
        loading: false,
      });
    // }
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=16a4e1d512a7489caf4110e00dc64625&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3 ">
        <h2>News Monkey -Top Headlines</h2>
        {this.state.loading && <Loader loading={this.state.loading} />}
        <div className="row">
          {!this.state.loading && this.state.articles?.map((el) => (
            <div className="col-md-4" key={el.url}>
              <NewsItem
                title={el.title ? el.title.slice(0, 30) : ""}
                description={el.description ? el.description.slice(0, 88) : ""}
                imageUrl={el.urlToImage}
                newsUrl={el.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
