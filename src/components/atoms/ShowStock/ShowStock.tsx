interface ShowStockProps {
  stock: number;
}

const ShowStock = ({ stock }: ShowStockProps) => {
  return <span>{stock.toFixed(0)} || </span>;
};

export default ShowStock;
