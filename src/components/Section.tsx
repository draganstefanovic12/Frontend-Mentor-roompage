import arrowShop from "../assets/icon-arrow.svg";
import arrowLeft from "../assets/icon-angle-left.svg";
import arrowRight from "../assets/icon-angle-right.svg";
import { text } from "../textAndImage";

interface SectionProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const Section = ({ number, setNumber }: SectionProps) => {
  return (
    <>
      <section className="section">
        <h1>{text[number].title}</h1>
        <p>{text[number].subtitle}</p>
        <div>
          <button>S H O P N O W</button>
          <img src={arrowShop} alt="shop" />
        </div>
      </section>
      <div className="arrows">
        <img
          onClick={() => number > 0 && setNumber(number - 1)}
          src={arrowLeft}
          alt="left"
        />
        <img
          onClick={() => number < 2 && setNumber(number + 1)}
          src={arrowRight}
          alt="right"
        />
      </div>
    </>
  );
};
