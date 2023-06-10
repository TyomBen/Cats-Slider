import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData, fetchingDataSlides } from "../store/actions/action";
import { Carousel } from "antd";
import "./styles.css";
import Link from "antd/es/typography/Link";
const Card = () => {
  const [idname, setIdName] = useState([]);
  const data = useSelector(({ data }) => data);
  const dataSlider = useSelector((state) => state.data.dataSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchingData());
    }catch (eror) {
      console.log(eror);
    }

  }, []);

  const handleSelect = (id) => {
    dispatch(fetchingDataSlides(id));
  };

  const handleClick = (event) => {
    const id = event.target.value;
    handleSelect(id);
    setIdName(data.data.filter((elementId) => elementId.id === id));
  };

  return (
    <>
      <select onChange={handleClick}>
        {data.data.map((cats) => {
          const { id, name, cfa_url, vetstreet_url } = cats;
          return (
            <>
              <option value={id}>{name}</option>
            </>
          );
        })}
      </select>
      <Carousel autoplay>
        {dataSlider.map((cats) => {
          const { id, url } = cats;
          return (
            <div key={id} className="cats-container">
              <img src={url} className="img" />
            </div>
          );
        })}
      </Carousel>
      {idname.map((cats) => {
        const {
          id,
          name,
          description,
          temperament,
          origin,
          weight,
          wikipedia_url,
        } = cats;
        return (
          <>
            <h3
              style={{
                fontSize: "24px",
                textAlign: "center",
                paddingTop: "20px",
              }}
            >
              {name}
            </h3>
            <h4 style={{ textAlign: "center" }}>id : {id}</h4>
            <p
              style={{
                textAlign: "center",
                paddingLeft: "660px",
                paddingRight: "660px",
              }}
            >
              {description}
            </p>
            <p style={{ textAlign: "center" }}>---</p>
            <p
              style={{
                textAlign: "center",
                paddingLeft: "660px",
                paddingRight: "660px",
                paddingTop: "5px",
                fontStyle: "italic",
              }}
            >
              {temperament}
            </p>
            <p
              style={{
                textAlign: "center",
                paddingLeft: "660px",
                paddingRight: "660px",
                paddingTop: "5px",
              }}
            >
              {origin}
            </p>
            <p
              style={{
                textAlign: "center",
                paddingLeft: "660px",
                paddingRight: "660px",
                paddingTop: "5px",
              }}
            >
              {weight.metric} kgs
            </p>
            <p
              style={{
                textAlign: "center",
                paddingLeft: "660px",
                paddingRight: "660px",
                paddingTop: "5px",
              }}
            >
              {weight.imperial} average life span
            </p>
            <Link
              href={wikipedia_url}
              style={{
                color: "orange",
                textAlign: "center",
                display: "block",
                paddingTop: "5px",
              }}
            >
              {" "}
              WIKIPEDIA{" "}
            </Link>
            {/* styler@| enqan vor tvel em  */}
          </>
        );
      })}
    </>
  );
};

export default Card;
