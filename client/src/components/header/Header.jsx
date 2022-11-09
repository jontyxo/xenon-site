import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Xenon Car Service</span>
        <span className="headerTitleLg">Just like home</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/jonty-mern/image/upload/v1668007944/xenon/make-money-with-your-car_b0b3hl.jpg"
        alt=""
      />
    </div>
  );
}
