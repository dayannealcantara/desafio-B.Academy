import { post } from "../service/http";



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

    if(result.error) return;

    e.target.reset()

    setCars(newCars);
  }
  return (
     <form onSubmit={handleSubmit}>
       <h1> Cadastrar carros</h1>
      <label>
        Imagem (URL)
        <input type="url" name="image" />
      </label>
      <label>
        Modelo / Marca
        <input type="text" name="brandModel" />
      </label>
      <label>
        Ano
        <input type="number" name="year" />
      </label>
      <label>
        Placa
        <input type="text" name="plate" />
      </label>
      <label>
        Cor
        <input  type="color" name="color" />
      </label>

      <button type="submit">Cadastrar Carro</button>
    </form>
 
  );
}
export default Form;
