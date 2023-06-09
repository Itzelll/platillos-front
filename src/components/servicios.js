import { useState } from "react";
import CreateImages from "../services/service.create-image";
import ServiceDavinci003 from "../services/service.davinci-003";
import Receta from "../services/service.recipe"

export default function Servicios() {
    const [selectedService, setSelectedService] = useState(null);

    const [animalInputt, setAnimalInputt] = useState("");
    const [resultt, setResultt] = useState();

    const [animalInputi, setAnimalInputi] = useState("");
    const [resulti, setResulti] = useState();
    const [numberOfImages, setNumberOfImages] = useState(1)

    const [animalInput3, setAnimalInput3] = useState("");
    const [result3, setResult3] = useState();

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
            const response = await Receta.getReceta({ animal: animalInputt });

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

    return (
        <div>
            <button className="boton-ia" onClick={() => setSelectedService("image")}>Generador de imágenes</button>
            <button className="boton-ia" onClick={() => setSelectedService("text")}>Generador de nombres</button>
            <button className="boton-ia" onClick={() => setSelectedService("recipe")}>Generador de recetas</button>

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
                    <link rel="icon" href="/dog.png" />

                    <main>
                        <h3>Creador de recetas</h3>
                        <form onSubmit={onSubmitrecipe}>
                            <input
                                type="text"
                                name="recipe"
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

        </div>
    );

}