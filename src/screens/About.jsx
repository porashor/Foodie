import React from "react";
import Logo from "../assets/logo.png";
import ContactInfo from "../components/ContactInfo";
const About = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center gap-5 ">
        {/* logo section  */}
        <div className="w-50 d-flex flex-column justify-content-between">
          <div className="d-flex align-items-center justify-content-center my-5 flex-column">
            <img src={Logo} alt="" className="w-75  " />
            <h1 className="text-center text-danger">Foodie</h1>
          </div>
          <div>
            <p className="text-center fs-4 fw-bold">Foodie</p>
            <h3 className="text-center text-danger text-uppercase">
              Everyday we make fresh food
            </h3>
          </div>
          <div>
            <div className="container my-5">
              <div className="text-center">
                <h2 className="text-uppercase fw-bold text-primary fs-4">
                  Our Mission
                </h2>
                <h4 className="text-uppercase text-secondary mt-3 fs-5">
                  What Drives Us Forward
                </h4>
                <p className="mt-4 fs-6 text-muted">
                  We strive to deliver world-class cuisine in a welcoming and
                  vibrant setting. Our commitment to friendly service and a warm
                  atmosphere is what sets us apart and fuels our continued
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* details section  */}
        <div className="py-5 w-50">
          <h1 className="capitalize">About Us</h1>
          <p className="fs-5 d-flex flex-column gap-3">
            <p>
              Foodie Fast Food Company Limited is one of the fastest-growing
              quick-service restaurant (QSR) brands in Bangladesh. Since our
              inception in 2010, we’ve been redefining the fast food experience
              with our flagship outlet at Agrabad 29, Chattogram.
            </p>
            <p>
              At Foodie, freshness isn’t just a slogan—it’s our standard. Every
              item on our menu is prepared fresh daily using premium
              ingredients. We never compromise on taste, hygiene, or quality.
              Our kitchens operate under the strict guidelines of ISO
              22000:2018, ensuring a robust food safety management system. We
              are proud to be both HACCP and Halal certified, guaranteeing that
              every bite meets international standards.
            </p>
            <p>
              We source the finest raw materials from trusted suppliers across
              Bangladesh, Malaysia, and Thailand, ensuring consistency and
              flavor in every product. With over 50 outlets across Dhaka,
              Chittagong, Khulna, and Sylhet, Foodie has become a household name
              for burgers, fried chicken, wraps, and more. Beyond borders,
              Foodie is making its mark by exporting frozen snacks and sauces to
              markets in the Middle East, UK, and Southeast Asia, bringing
              Bangladeshi flavors to global tables.
            </p>
            <p>
              Diversity, equity, and inclusion are embedded in our DNA. We
              believe that a vibrant team culture drives innovation and customer
              satisfaction. Foodie fosters a healthy, respectful, and
              growth-oriented work environment, empowering our employees to
              thrive and contribute meaningfully.
            </p>
          </p>
        </div>
      </div>
      <ContactInfo/>
    </div>
  );
};

export default About;
