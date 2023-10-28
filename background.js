document.addEventListener("DOMContentLoaded", function() {
    const backgrounds = ["botwbg.png", "factoriobg.png", "Marvel_Spider-Man_bg.png", "ETO2bg.png", "MCbg.png", "TLOU2bg.png", "totkbg.png","sotcbg.png"];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];

    document.body.style.backgroundImage = `url(${selectedBackground})`;

    function getAverageColor(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.crossOrigin = "Anonymous";

        let bgColorBrightness; // Declare bgColorBrightness here

        image.onload = function() {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, image.width, image.height);

            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            const data = imageData.data;

            let r = 0;
            let g = 0;
            let b = 0;

            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            const totalPixels = data.length / 4;
            const averageColor = [
                Math.round((r / totalPixels) * 1.5), // éclaircir la composante rouge
                Math.round((g / totalPixels) * 1.5), // éclaircir la composante verte
                Math.round((b / totalPixels) * 1.5)  // éclaircir la composante bleue
            ];

            // Appliquer la couleur extraite au bouton
            const buttonElements = document.querySelectorAll(".special-button");
            buttonElements.forEach(button => {
                button.style.backgroundColor = `rgb(${averageColor[0]}, ${averageColor[1]}, ${averageColor[2]})`;

                // Déterminer la luminosité de la couleur de fond
                const bgColorBrightness = (averageColor[0] * 299 + averageColor[1] * 587 + averageColor[2] * 114) / 1000;

                // Changer la couleur du texte en noir ou blanc en fonction de la luminosité
                if (bgColorBrightness > 128) {
                    button.style.color = "#000"; // Texte noir pour les couleurs claires
                } else {
                    button.style.color = "#fff"; // Texte blanc pour les couleurs foncées
                }
            });

            // Changer la couleur du texte avec the "color-change" class en fonction de la luminosité
            const textElements = document.querySelectorAll(".color-change");
            textElements.forEach(textElement => {
                
                // Déterminer la luminosité de la couleur de fond
                const bgColorBrightness = (averageColor[0] * 299 + averageColor[1] * 587 + averageColor[2] * 114) / 1000;

                // Changer la couleur du texte en noir ou blanc en fonction de la luminosité
                if (bgColorBrightness > 128) {
                    textElement.style.color = "#000"; // Texte noir pour les couleurs claires
                } else {
                    textElement.style.color = "#fff"; // Texte blanc pour les couleurs foncées
                }
            });
        };
    }

    getAverageColor(selectedBackground);
});
