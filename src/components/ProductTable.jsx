import React, { useContext } from "react";
import { Table, Image } from "react-bootstrap";
import { SearchContext } from "../contexts/SearchContext";
import { ProductsContext } from "../contexts/ProductsContext";
import { SingleFilterContext } from "../contexts/SingleFilterContext";
import { MultiFiltersContext } from "../contexts/MultiFiltersContext";

function ProductTable() {
  const { products } = useContext(ProductsContext);
  const { search } = useContext(SearchContext);
  const { singleFilter } = useContext(SingleFilterContext);
  const { multiFilters } = useContext(MultiFiltersContext);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesSingleFilter =
      singleFilter === "All" || product.category === singleFilter;
    const matchesMultiFilters =
      multiFilters.length === 0 || multiFilters.includes(product.category);
    return matchesSearch && matchesSingleFilter && matchesMultiFilters;
  });

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts &&
          filteredProducts.map((product, idx) => (
            <tr key={idx + product.title}>
              <td>{idx + 1}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  className="w-25"
                  src={product.thumbnail}
                  alt={product.title}
                  thumbnail
                />
              </td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default ProductTable;
