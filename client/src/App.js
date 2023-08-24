import './App.css';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getProducts {
    products {
      id
      title
      colors
      sizes
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(query);
  console.log({ data, loading, error });

  if (loading) return 'Loading...';

  return (
    <div className="App">
      <h2>Products</h2>
      {data?.products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default App;
