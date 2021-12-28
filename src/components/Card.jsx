import { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import FavoriteContext from "../context/favorites-context";

const Card = ({ title, rating, image, id, genre, genreList, date }) => {
  const favoriteCtx = useContext(FavoriteContext);

  const isFavorite = favoriteCtx.toggleFavorite(id);

  const toggleStatusFavorite = () => {
    if (isFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id: id,
        title: title,
        vote_average: rating,
        genre_ids: genreList,
        poster_path: image,
        release_date: date,
      });
    }
  };

  console.log(genre)

  const imageBase = "https://image.tmdb.org/t/p/w500/";

  const dateBuilder = (d) => {
    const [year, month, day] = d.split("-");

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

  const genreName = genre.filter((gen) => {
    return gen.id === genreList[0]
  });

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
            {rating}
          </p>
          <p className="details__genre">{genreName[0].name}</p>
        </div>
        <p className="price">{randomPrice}</p>
      </section>

      <section className="card__actions">
        <button className="buy">Adicionar</button>
        <button className="favorite" onClick={toggleStatusFavorite}>
          <FaHeart />
        </button>
      </section>
    </article>
  );
};

export default Card;
