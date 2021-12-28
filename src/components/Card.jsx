import { FaHeart, FaStar } from "react-icons/fa";

const Card = ({ title, rating, image, id, genre, genreList, date }) => {
  const imageBase = "https://image.tmdb.org/t/p/w500/";

  const genreName = genre.filter((gen) => {
    return gen.id === genreList[0]
  })

  const dateBuilder = (d) => {
    let [year, month, day] = d.split("-");

    let months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro ",
    ];

    let monthString = months[month - 1];

    return `${day} de ${monthString}, ${year}`;
  };

  const randomPrice = (Math.floor(Math.random() * 100) + 20).toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  return (
    <article className="card" key={id}>
      <section className="card__image">
        <img src={imageBase + image} alt="" />
        <span className="date">{dateBuilder(date)}</span>
      </section>
      <section className="card__content">
        <h3 className="title">{title}</h3>

        <div className="details">
          <p className="details__rating">
            <span className="star">
              <FaStar />
            </span>
            {rating.toFixed(0)}
          </p>
          <p className="details__genre">{genreName[0].name}</p>
        </div>
        <p className="price">{randomPrice}</p>
      </section>

      <section className="card__actions">
        <button className="buy">Adicionar</button>
        <button className="favorite">
          <FaHeart />
        </button>
      </section>
    </article>
  );
};

export default Card;
