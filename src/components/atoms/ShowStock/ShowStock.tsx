interface ShowStockProps {
  stock: number;
}

const ShowStock = ({ stock }: ShowStockProps) => {
  return <p>{stock.toFixed(0)}</p>;
};

export default ShowStock;
