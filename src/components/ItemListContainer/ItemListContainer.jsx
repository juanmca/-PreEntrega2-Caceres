import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ productsData }) => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.productContainer}>
      {productsData.map((product) => {
        return (
          <Card style={{ width: "16rem" }} key={product.id} className={styles.zoomCard}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className={styles.botonDetalles}>
              <Button
                variant="primary" 
                onClick={() => navigate(`/item/${product.id}`)} 
              >
                Detalles
              </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;