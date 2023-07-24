import "../../style/home_style/topPlaces.css";

const TopPlaces = () => {
  return (
    <div className="tPlace">
      <div className="tPlaceItem">
        <img
          src="https://www.revv.co.in/blogs/wp-content/uploads/2020/02/visit-in-delhi-with-self-drive.jpg"
          alt=""
          className="tPlaceImg"
        />
        <div className="tPlaceTitles">
          <h1>Delhi</h1>
        </div>
      </div>
      <div className="tPlaceItem">
        <img
          src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/08/Gateway-of-India-Mumbai.jpg"
          alt=""
          className="tPlaceImg"
        />
        <div className="tPlaceTitles">
          <h1>Mumbai</h1>
        </div>
      </div>
      <div className="tPlaceItem">
        <img
          src="https://thumbs.dreamstime.com/b/famous-hyderabad-landmark-charminar-india-world-built-quli-qutb-shah-th-century-128124667.jpg"
          alt=""
          className="tPlaceImg"
        />
        <div className="tPlaceTitles">
          <h1>Hyderabad</h1>
        </div>
      </div>
      <div className="tPlaceItem">
        <img
          src="https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/017/large/Mysore_Palace.jpg"
          alt=""
          className="tPlaceImg"
        />
        <div className="tPlaceTitles">
          <h1>Bangalore</h1>
        </div>
      </div>
      <div className="tPlaceItem">
        <img
          src="https://blog.thomascook.in/wp-content/uploads/2018/07/img-7-e1531194581524.jpg"
          alt=""
          className="tPlaceImg"
        />
        <div className="tPlaceTitles">
          <h1>Chennai</h1>
        </div>
      </div>
    </div>
  );
};

export default TopPlaces;