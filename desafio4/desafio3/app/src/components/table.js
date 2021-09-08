import { del } from "../service/http";

function Table({ cars, url, setCars}) {
    async function handleRemove(plate){
        const newCars = cars.filter(car => car.plate !== plate)

        const response=await del(url,{plate})

      if(response.error) return;

      setCars(newCars);
        
    }
    return (
        <div class="table-wrapper">
        <table >
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Marca / Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
            <th></th>
          </tr>

        </thead>
        <tbody>
            {cars && (
                cars.map(car => (
                    <tr key={car.plate}>
                    <td>
                      <img src={car.image} alt={car.brandModel} />
                    </td>
                    <td>
                      <p>{car.brandModel}</p>
                    </td>
                    <td>
                      <p>{car.year}</p>
                    </td>
                    <td>
                      <p>{car.plate}</p>
                    </td>
                    <td>
                      <div 
                        className="container-color" 
                        style={{ 
                          backgroundColor: `${car.color}`
                        }}
                      ></div>
                    </td>
                    <td>
                      <button onClick={() => handleRemove(car.plate)} className="delete">×</button>
                    </td>
                  </tr>
                ))
            )}
       
        </tbody>
      </table>
      </div>
    )

}
export default Table