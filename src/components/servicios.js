import { useState } from "react";
import CreateImages from "../services/service.create-image";
import ServiceDavinci003 from "../services/service.davinci-003";
import Receta from "../services/service.recipe"
import Traductor from "../services/service.traductor"
import Restaurant from "../services/service.restaurant"
import Clasification from "../services/service.clasification"

export default function Servicios() {
    const [selectedService, setSelectedService] = useState(null);

    const [animalInputt, setAnimalInputt] = useState("");
    const [resultt, setResultt] = useState();

    const [animalInputi, setAnimalInputi] = useState("");
    const [resulti, setResulti] = useState();
    const [numberOfImages, setNumberOfImages] = useState(1)

    const [animalInput3, setAnimalInput3] = useState("");
    const [result3, setResult3] = useState();

    const [animalInput4, setAnimalInput4] = useState("");
    const [result4, setResult4] = useState();

    const [animalInput5, setAnimalInput5] = useState("");
    const [result5, setResult5] = useState();

    const [animalInput6, setAnimalInput6] = useState("");
    const [result6, setResult6] = useState();

    async function onSubmitimg(event) {
        event.preventDefault();
        try {
            const response = await CreateImages.getImage({ animal: animalInputi, n: numberOfImages });


            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResulti(data.result);
            setAnimalInputi("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    };

    async function onSubmittext(event) {
        event.preventDefault();
        try {
            const response = await ServiceDavinci003.getDaVinci({ animal: animalInputt });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResultt(data.result);
            setAnimalInputt("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    };

    async function onSubmitrecipe(event) {
        event.preventDefault();
        try {
            const response = await Receta.getReceta({ animal: animalInput3 });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult3(data.result);
            setAnimalInput3("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    };

    async function onSubmittraductor(event) {
        event.preventDefault();
        try {
            const response = await Traductor.getTraduccion({ animal: animalInput4 });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult4(data.result);
            setAnimalInput4("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    };

    async function onSubmitrest(event) {
        event.preventDefault();
        try {
            const response = await Restaurant.getRestaurante({ animal: animalInput5 });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult5(data.result);
            setAnimalInput5("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    };

    async function onSubmittipo(event) {
        event.preventDefault();
        try {
            const response = await Clasification.getTipo({ animal: animalInput6 });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult6(data.result);
            setAnimalInput6("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <div>
            <button className="boton-ia" onClick={() => setSelectedService("image")}>Generador de imágenes</button>
            <button className="boton-ia" onClick={() => setSelectedService("text")}>Generador de nombres</button>
            <button className="boton-ia" onClick={() => setSelectedService("recipe")}>Generador de recetas</button>
            <button className="boton-ia" onClick={() => setSelectedService("traductor")}>Traductor de recetas</button>
            <button className="boton-ia" onClick={() => setSelectedService("restaurant")}>Reviews de restaurantes</button>
            <button className="boton-ia" onClick={() => setSelectedService("tipo")}>Clasificaciones</button>

            {selectedService === "text" && (
                <div>
                    <title>OpenAI Quickstart</title>
                    <link rel="icon" href="/dog.png" />

                    <main>
                        <h3>Ingredientes de un platillo</h3>
                        <form onSubmit={onSubmittext}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="Enter a platillo"
                                value={animalInputt}
                                onChange={(e) => setAnimalInputt(e.target.value)}
                            />
                            <input type="submit" value="Generate names" />
                        </form>
                        <div>
                            Ingredients:
                            {resultt}</div>
                    </main>
                </div>
            )}

            {selectedService === "image" && (
                <div>
                    <title>OpenAI Quickstart</title>
                    <link rel="icon" href="/dog.png" />

                    <main>
                        <img src="" alt="" />
                        <h3>Imagenes de platillos</h3>
                        <form onSubmit={onSubmitimg}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="Enter a platillo"
                                value={animalInputi}
                                onChange={(e) => setAnimalInputi(e.target.value)}
                            />
                            <input
                                type="number"
                                name="number"
                                placeholder="Enter a number de images"
                                value={numberOfImages}
                                onChange={(e) => setNumberOfImages(e.target.value)}
                            />
                            <input type="submit" value="Generate images" />
                        </form>
                        <div>
                            {resulti && resulti.map((url) => (
                                <img src={url} key={url} alt="Imagen" className="border-img" />
                            ))}
                        </div>
                    </main>
                </div>
            )}

            {selectedService === "recipe" && (
                <div>
                    <title>OpenAI Quickstart</title>

                    <main>
                        <h3>Creador de recetas</h3>
                        <form onSubmit={onSubmitrecipe}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="Agrega ingredientes"
                                value={animalInput3}
                                onChange={(e) => setAnimalInput3(e.target.value)}
                            />
                            <input type="submit" value="Generate" />
                        </form>
                        <div>
                            Receta:
                            {result3}</div>
                    </main>
                </div>
            )}

            {selectedService === "traductor" && (
                <div>
                    <title>OpenAI Quickstart</title>

                    <main>
                        <h3>Traductor de platillos</h3>
                        <form onSubmit={onSubmittraductor}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="Agrega una comida"
                                value={animalInput4}
                                onChange={(e) => setAnimalInput4(e.target.value)}
                            />
                            <input type="submit" value="Generate" />
                        </form>
                        <div>
                            Traduccion:
                            {result4}</div>
                    </main>
                </div>
            )}

            {selectedService === "restaurant" && (
                <div>
                    <title>OpenAI Quickstart</title>

                    <main>
                        <h3>Review de restaurantes</h3>
                        <form onSubmit={onSubmitrest}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="Agrega unas notas"
                                value={animalInput5}
                                onChange={(e) => setAnimalInput5(e.target.value)}
                            />
                            <input type="submit" value="Generate" />
                        </form>
                        <div>
                            Review:
                            {result5}</div>
                    </main>
                </div>
            )}

            {selectedService === "tipo" && (
                <div>
                    <title>OpenAI Quickstart</title>

                    <main>
                        <h3>Tipo de clasificaciones</h3>
                        <form onSubmit={onSubmittipo}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="Agrega unas notas"
                                value={animalInput6}
                                onChange={(e) => setAnimalInput6(e.target.value)}
                            />
                            <input type="submit" value="Generate" />
                        </form>
                        <div>
                            Clasificacion:
                            {result6}</div>
                    </main>
                </div>
            )} 

        </div>
    );

}