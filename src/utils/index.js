export const formatPrice = (number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(number);
};

export const convertDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};
