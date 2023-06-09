import { useState } from "react";
import ServiceDavinci003 from "../services/service.davinci-003";
import CreateImages from "../services/service.create-image";

export default function OpenAI() {

    const [selectedService, setSelectedService] = useState(null);
    const [artistsInput, setArtistsInput] = useState("");
    const [artistsInputText, setArtistsInputText] = useState("");
    const [result, setResult] = useState();
    const [numberOfImages, setNumberOfImages] = useState(1)

    async function onSubmitImage(event) {
        event.preventDefault();
        try {
            const response = await CreateImages.getImage({ artist: artistsInput, n: numberOfImages });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setArtistsInput("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitText(event) {
        event.preventDefault();
        try {
            const response = await ServiceDavinci003.getDaVinci({ artist: artistsInputText });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setArtistsInputText("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <div>
            <button className="boton-ia" onClick={() => setSelectedService("image")}>Generador de imágenes</button>
            <button className="boton-ia" onClick={() => setSelectedService("text")}>Generador de nombres</button>

            {selectedService === "image" && (
                <div>
                    <h3>Generador de imágenes</h3>
                    <form onSubmit={onSubmitImage}>
                        <input
                            type="text"
                            className="animal"
                            placeholder="Enter a platillo"
                            value={artistsInput}
                            onChange={(e) => setArtistsInput(e.target.value)}
                        />
                        <input
                            type="number"
                            className="number"
                            placeholder="Enter a number de images"
                            value={numberOfImages}
                            onChange={(e) => setNumberOfImages(e.target.value)}
                        />
                        <input type="submit" value="Generate images" />
                    </form>
                    <div>
                        {result && result.map((url) => (
                            <img src={url} key={url} alt="imagen"></img>
                        ))}
                    </div>
                </div>
            )
            }

            {
                selectedService === "text" && (
                    <div>
                        <h3>Nombra un platillo</h3>
                        <form onSubmit={onSubmitText}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a platillo"
                                value={artistsInputText}
                                onChange={(e) => setArtistsInputText(e.target.value)}
                            />
                            <input type="submit" value="Generate names" />
                        </form>
                        <div>{result}</div>
                    </div>
                )
            }

        </div >

    )
}