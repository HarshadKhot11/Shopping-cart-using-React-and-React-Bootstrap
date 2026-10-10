import { useState } from "react";
import products from "./products.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Products() {
  return (
    <>
    <div style={{ backgroundColor: "rgb(214, 229, 245)", minHeight: "100vh" }}>
      <Container className="py-5">
        <h2 className="mb-4 text-center">Our Products</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 fw-bold">
                    {product.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted small">
                    {product.brand}
                  </Card.Subtitle>
                  <Card.Text className="small text-secondary flex-grow-1">
                    {product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold text-success">
                     <p>{product.price.toFixed(2)} Rs</p>
                    </span>
                    <span className="small text-warning">
                      ★ {product.rating} ({product.reviewsCount})
                    </span>
                  </div>
                  <Button variant="primary" size="sm" className="mt-3">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </>
  );
}
