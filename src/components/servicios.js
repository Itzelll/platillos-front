import { useState } from "react";
import CreateImages from "../services/service.create-image";
import ServiceDavinci003 from "../services/service.davinci-003";
import Receta from "../services/service.recipe"
import Traductor from "../services/service.traductor"
import Restaurant from "../services/service.restaurant"
import Clasification from "../services/service.clasification"
import { useTranslation } from 'react-i18next';

export default function Servicios() {
    const { t } = useTranslation();
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
            <button className="boton-ia" onClick={() => setSelectedService("text")}>{t("gen2")}</button>
            <button className="boton-ia" onClick={() => setSelectedService("image")}>{t("gen1")}</button>
            <button className="boton-ia" onClick={() => setSelectedService("recipe")}>{t("gen3")}</button>
            <button className="boton-ia" onClick={() => setSelectedService("traductor")}>{t("gen4")}</button>
            <button className="boton-ia" onClick={() => setSelectedService("restaurant")}>{t("gen5")}</button>
            <button className="boton-ia" onClick={() => setSelectedService("tipo")}>{t("gen6")}</button>

            {selectedService === "text" && (
                <div>
                    <main>
                        <h3>{t("h1")}</h3>
                        <form onSubmit={onSubmittext}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="{t(placeholder1)}"
                                value={animalInputt}
                                onChange={(e) => setAnimalInputt(e.target.value)}
                            />
                            <input type="submit" value={t("gen1")} />
                        </form>
                        <div>
                            {t("text1")}:
                            {resultt}</div>
                    </main>
                </div>
            )}

            {selectedService === "image" && (
                <div>
                    <main>
                        <img src="" alt="" />
                        <h3>{t("h2")}</h3>
                        <form onSubmit={onSubmitimg}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="{t(placeholder1)}"
                                value={animalInputi}
                                onChange={(e) => setAnimalInputi(e.target.value)}
                            />
                            <input
                                type="number"
                                name="number"
                                placeholder="{t(placeholder)}"
                                value={numberOfImages}
                                onChange={(e) => setNumberOfImages(e.target.value)}
                            />
                            <input type="submit" value={t("gen2")}  />
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
                    <main>
                        <h3>{t("h3")}</h3>
                        <form onSubmit={onSubmitrecipe}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="{t(placeholder2)}"
                                value={animalInput3}
                                onChange={(e) => setAnimalInput3(e.target.value)}
                            />
                            <input type="submit" value={t("gen3")}  />
                        </form>
                        <div>
                            {t("text3")}:
                            {result3}</div>
                    </main>
                </div>
            )}

            {selectedService === "traductor" && (
                <div>                    
                    <main>
                        <h3>{t("h4")}</h3>
                        <form onSubmit={onSubmittraductor}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="{t(placeholder1)}"
                                value={animalInput4}
                                onChange={(e) => setAnimalInput4(e.target.value)}
                            />
                            <input type="submit" value={t("gen4")} />
                        </form>
                        <div>
                            {t("text4")}:
                            {result4}</div>
                    </main>
                </div>
            )}

            {selectedService === "restaurant" && (
                <div>                    
                    <main>
                        <h3>{t("h5")}</h3>
                        <form onSubmit={onSubmitrest}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="{t(placeholder3)}"
                                value={animalInput5}
                                onChange={(e) => setAnimalInput5(e.target.value)}
                            />
                            <input type="submit" value={t("gen5")}  />
                        </form>
                        <div>
                            {t("text5")}:
                            {result5}</div>
                    </main>
                </div>
            )}

            {selectedService === "tipo" && (
                <div>                    
                    <main>
                        <h3>{t("h6")}</h3>
                        <form onSubmit={onSubmittipo}>
                            <input
                                type="text"
                                name="animal"
                                placeholder="{t(placeholder3)}"
                                value={animalInput6}
                                onChange={(e) => setAnimalInput6(e.target.value)}
                            />
                            <input type="submit" value={t("gen6")}  />
                        </form>
                        <div>
                            {t("text6")}:
                            {result6}</div>
                    </main>
                </div>
            )} 

        </div>
    );

}