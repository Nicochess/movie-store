import { FaHeart, FaStar } from "react-icons/fa";

const Card = ({ title, rating, image, id, genre }) => {
  const imageBase = "https://image.tmdb.org/t/p/w500/";

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
      </section>
      <section className="card__content">
        <h3 className='title'>{title}</h3>

        <div className="details">
          <p className="details__rating">
            <span className='star'><FaStar /></span>
            {rating.toFixed(0)}
          </p>
          <p className='details__genre'>Ação</p>
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
