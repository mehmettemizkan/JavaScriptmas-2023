/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN) // change here with your HF_TOKEN
import { HfInference } from '@huggingface/inference'

const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')

const sendButton = document.querySelector('.btn-send')



const imageSrc = 'https://avatars.githubusercontent.com/u/56386597?s=400&u=97b7f7a1f5e70750012c1df685c7ae00b9317f6e&v=4' // burayı AI'den almalıyım

/** show dialog on load **/
dialogModal.show()

sendButton.addEventListener('click', async function (e) {
        e.preventDefault()
        dialogModal.style.visibility = 'hidden'

        const userInput = document.getElementById('user-input')
        const prompt = userInput.value

        let image = document.createElement('img')
        image.src = await generateAnImage(prompt)
        imageContainer.appendChild(image)

})


async function generateAnImage(prompt) {
        const response = await hf.textToImage({
                model: "stabilityai/stable-diffusion-2",
                inputs: prompt,
                parameters: {
                        negative_prompt: "blurry",
                },
        })

        async function blobToBase64(blob) {
                return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(blob)
                })
        }

        const imageUrl = await blobToBase64(response)
        return imageUrl
}



