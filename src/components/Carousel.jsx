import React from "react";

const Carousel = ({srch}) => {
  const {search, setSearch} = srch;
  return (
    <div>
      {/* main carousel loading here */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.1Vw2Q5yg2-QQyolad3TyawHaE2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              style={{ height: "500px", objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-none btn-info" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=bowl-cuisine-delicious-1640773.jpg&fm=jpg"
              style={{ height: "500px", objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button className="btn btn-outline-none btn-info" type="submit">
                  Search
                </button> */}
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/767054.jpg"
              style={{ height: "500px", objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-none btn-info" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* buton area  */}
        {/* prev */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        {/* next */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
