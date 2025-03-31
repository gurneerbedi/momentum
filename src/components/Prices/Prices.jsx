import "./Prices.scss";

function Prices() {
  return (
    <>
      <section className="prices" id="prices">
      <h1 className="heading">Our Prices</h1>
        <div className="prices__container">
          
          <div className="prices__table">
            <div className="prices__details">
              {" "}
              <p className="prices__session">Grades 11-12</p>
              <p className="prices__price">$35 per session</p>
            </div>
            <div className="prices__details">
              {" "}
              <p className="prices__session">Grades 9-10</p>
              <p className="prices__price">$30 per session</p>
            </div>
            <div className="prices__details">
              {" "}
              <p className="prices__session">Grades 5-8</p>
              <p className="prices__price">$25 per session</p>
            </div>
            <div className="prices__details">
              {" "}
              <p className="prices__sessionnote">For university and college courses, pricing varies by course—please inquire for details.</p>
              {/* <p className="prices__price">$25 per session</p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prices;
