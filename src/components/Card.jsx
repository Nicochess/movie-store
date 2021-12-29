import { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import FavoriteContext from "../context/favorites-context";

const Card = ({ title, rating, image, id, date, genres, genreList }) => {
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
        poster_path: image,
        release_date: date,
        genre_ids: genreList,
      });
    }
  };

  let genreCode = genreList[0];

  const genreName = genres.filter((gen) => {
    return gen.id === genreCode;
  });

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

    return `${day} de ${months[month - 1]}, ${year}`;
  };

  const randomPrice = Number(String(id).slice(0, 2)).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
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
        <button
          className={isFavorite ? "favorite active" : "favorite"}
          onClick={toggleStatusFavorite}
        >
          <FaHeart />
        </button>
      </section>
    </article>
  );
};

export default Card;
