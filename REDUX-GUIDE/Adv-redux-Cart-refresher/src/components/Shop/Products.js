import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  {
    id: 'p1',
    title: 'Shahi Paneer',
    price: 125,
    description: 'Rich, creamy, delicious'
  },
  {
    id: 'p2',
    title: 'Butter Paneer',
    price: 125,
    description: 'Rich, creamy, delicious'
  },
  {
    id: 'p3',
    title: 'Dal Makhani',
    price: 125,
    description: 'Full of creamy lentils'
  },
  {
    id: 'p4',
    title: 'Gulab Jamun',
    price: 125,
    description: 'Soft, delicate, sweet'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((product) => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
