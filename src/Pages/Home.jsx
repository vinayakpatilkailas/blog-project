import React, { useContext,useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/Homecard";
import Smallcard from "../Component/Smallcard";
// import { store } from "./Details";

const Home = () => {
  const[api, setApi] = useState([])
    const fetchData = async () => {
        try {
          const response = await axios.get("https://vinayakpatil.herokuapp.com/api/details");
          return response.data;
        } catch (error) {}
      };
      useEffect(() => {
        const apiFetch = async () => {
            setApi(await fetchData());
        };
        apiFetch();
      }, [api]);
  // const [detail] = useContext(store);
  return (
    <div>
      <div className="Home">
        <div className="Componenthome">
          <div className="Home1"></div>
          <div className="Homerightcom">
            <div className="Helicopter">
              <Link to="/bollywood">
                {" "}
                <img
                  src="https://m.economictimes.com/thumb/msid-68114348,width-1200,height-900,resizemode-4,imgsize-117186/hal-delivers-first-three-dhruv-helicopters-to-indian-army.jpg"
                  alt="not found"
                />
              </Link>
            </div>

            <div className="Nature">
              <Link to="/food">
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/bird-s-eye-view-nainital-lake-china-peak-bird-s-eye-view-nainital-lake-china-peak-nainital-uttarakhand-india-197870237.jpg"
                  alt="not found"
                />
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="homeleft left1 ">
          {api && api 
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
               
              />
            ))}
        </div>
        <div className="homeleft left1">
          {api && api 
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
              
              />
            ))}
        </div>
        <div className="homeleft left1">
          {api && api 
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="Rightside2">
          {api && api 
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="Leftside2">
          {api && api 
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Smallcard
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="homeleft">
          {api && api 
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="homeleft">
          {api && api 
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
              
              />
            ))}
        </div>

        <div className="homeleft">
          {api && api 
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
               
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
