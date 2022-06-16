import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Test 1",
    price: 5,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Test 2",
    price: 10,
    description: "This is a second product - amazing!",
  },
  {
    id: 3,
    title: "Test 3",
    price: 15,
    description: "This is a third product - amazing!",
  },
  {
    id: 4,
    title: "Test 4",
    price: 20,
    description: "This is a fourth product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
