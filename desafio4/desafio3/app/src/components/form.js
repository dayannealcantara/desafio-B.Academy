import { post } from "../service/http";
import styled from "styled-components";

function Form({ cars, setCars, url }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const car = {
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandModel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value,
    };

    const newCars = [...cars, car];

    const result = await post(url, car);

    if (result.error) return;

    e.target.reset();

    setCars(newCars);
  }
  return (
    <Formm onSubmit={handleSubmit}>
      <Label>
        Imagem (URL)
        <Input type="url" name="image" />
      </Label>
      <Label>
        Modelo / Marca
        <Input type="text" name="brandModel" />
      </Label>
      <Label>
        Ano
        <Input type="number" name="year" placeholder="Ex.: 1996" />
      </Label>
      <Label>
        Placa
        <Input type="text" name="plate" placeholder="Ex.: xxx-0000" />
      </Label>
      <Label>
        Cor
        <Input type="color" name="color" />
      </Label>

      <Button type="submit">Cadastrar Carro</Button>
    </Formm>
  );
}
const Formm = styled.form`
  margin-bottom: 2em;
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border-radius: 1em;
`;
const Button = styled.button`
  width: 300px;
  height: auto;
  padding: 21px 30px;
  background-color: #473bf0;
  color: #fff;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -.5px;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    
    background: none;
    color: #473b12;

    }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;
const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #eaeced;
  padding: 15px;
  transition: .3s;
  font-size: 15px;
  border-radius: 3px;
  padding: 10px 10px;
  margin-top: 10px;
  margin-bottom: 5px;


  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border: 1px solid #2189b9;
    background: none;
    color: #2189b9;

    &::placeholder {
      color: #2189b9;
    }
  }
`;
export default Form;
