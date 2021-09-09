import { del } from "../service/http";
import styled from "styled-components";

function Table({ cars, url, setCars }) {
  async function handleRemove(plate) {
    const newCars = cars.filter((car) => car.plate !== plate);

    const response = await del(url, { plate });

    if (response.error) return;

    setCars(newCars);
  }
  return (
    <Div>
      <Tablee>
        <Thead>
          <tr>
            <Th>Imagem</Th>
            <Th>Marca / Modelo</Th>
            <Th>Ano</Th>
            <Th>Placa</Th>
            <Th>Cor</Th>
            <Th></Th>
          </tr>
        </Thead>

        <tbody>
          {cars &&
            cars.map((car) => (
              <tr key={car.plate}>
                <Tdimg>
                  <Img src={car.image} alt={car.brandModel} />
                </Tdimg>
                <Td>
                  <p>{car.brandModel}</p>
                </Td>
                <Td>
                  <p>{car.year}</p>
                </Td>
                <Td>
                  <p>{car.plate}</p>
                </Td>
                <Td>
                  <Color backgroundcolor={car.color}
                   
                  ></Color>
                </Td>
                <Td>
                  <Button onClick={() => handleRemove(car.plate)}>×</Button>
                </Td>
              </tr>
            ))}
        </tbody>
      </Tablee>
    </Div>
  );
}

const Div = styled.div`
  overflow-x: auto;
`;

const Color = styled.div`
    width: 100%;
    padding: 2px;
    height: 50px;
    border-radius: 9px;
    max-width: 100px;
    display: flex;
    background-color: ${props => props.backgroundcolor};
`;

const Tablee = styled.table`
  width: 60%;
  border-collapse: collapse;
  border: 1px solid black;
  margin: 0 auto;
`;
const Thead = styled.thead`
  background: #555555;
  color: white;
  font-weight: bold;
`;

const Th = styled.th`
  background-color: #42b4b4c9;
  color: black;
  text-align: left;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
`;

const Td = styled.td`

  border: 1px solid black;
  text-align: center;
  padding: 10px;
`;

const Tdimg = styled.td`
 display: flex;
 justify-content: center;
  border: 1px solid black;
  padding: 10px;
`;


const Img = styled.img`
  display: block;
  width: 135px;
  
`;
const Button = styled.button`
  border: 3px;
  padding: 10px;
  margin: auto;
  background-color: #63e431a8;
`;

export default Table;
