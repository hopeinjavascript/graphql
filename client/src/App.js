import './App.css';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      colors
      sizes
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
      title
      colors
      sizes
    }
  }
`;

function App() {
  // const client = useApolloClient();

  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const [removeProduct] = useMutation(DELETE_PRODUCT);

  const handleDeleteProduct = (productId) => {
    removeProduct({
      variables: { id: productId },
      update: (cache) => {
        const newProducts = data.products.filter(
          (product) => product.id !== productId
        );
        cache.writeQuery({
          query: GET_PRODUCTS,
          data: { products: newProducts },
        });
      },
      onCompleted: (data) => console.log({ onCompleted: data }),
      onError: (error) => console.error({ onError: error }),
    });
    // client.mutate({
    //   mutation: DELETE_PRODUCT,
    //   variables: { id: productId },
    //   update: (cache) => {
    //     const newProducts = data.products.filter(
    //       (product) => product.id !== productId
    //     );
    //     cache.writeQuery({
    //       query: GET_PRODUCTS,
    //       data: { products: newProducts },
    //     });
    //   },
    // });
  };

  if (loading) return 'Loading...';

  return (
    <div className="App">
      <h2>Products</h2>

      <div className="product-list">
        {data?.products.map((product) => (
          <p key={product.id}>
            <span>{product.title}</span>
            <button
              type="button"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
