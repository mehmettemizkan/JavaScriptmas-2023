import { HfInference } from '@huggingface/inference'
const hf = new HfInference() // you have to enter the hf token here
import { blobToBase64 } from '/utils'

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function (e) {
        e.preventDefault()
        const imageDescription = document.getElementById('user-input').value
        dialogModal.close()
        generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {
        const response = await hf.textToImage({
                inputs: imageToGenerate,
                model: "stabilityai/stable-diffusion-2",
        })
        const imageUrl = await blobToBase64(response)

        generateAltText(imageUrl)
}

async function generateAltText(imageUrl) {
        const altText = await hf.imageToText({
                data: await (await fetch(imageUrl)).blob(),
                model: "Salesforce/blip-image-captioning-base",
        });

        renderImage(imageUrl, altText)
}

const renderImage = (imageUrl, altText) => {
        const imageContainer = document.getElementById('image-container')
        imageContainer.innerHTML = ''
        const image = document.createElement('img')
        image.src = imageUrl
        image.alt = altText.generated_text
        imageContainer.appendChild(image)

        const imageHeader = document.createElement('p')
        imageHeader.innerText = capitalizeWords(altText.generated_text)
        imageContainer.appendChild(imageHeader)
}

const capitalizeWords = (str) => {
        // Split the string by spaces
        const words = str.split(" ");

        // Capitalize the first letter of each word
        const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

        // Join the capitalized words and return the result
        return capitalizedWords.join(" ");
};