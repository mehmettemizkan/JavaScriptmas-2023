const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)
import { HfInference } from '@huggingface/inference'


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

const result = document.getElementById('result')
// result.style.display = 'none'

document.getElementById('btn').addEventListener('click', function () {
        calculateDinner();
});

async function calculateDinner() {
        const numGuests = parseInt(document.getElementById('num-input').value, 10);
        const isVegetarian = document.getElementById('vegetarian-input').checked;

        let suggestion = '';
        let imagePath = '';

        if (isVegetarian) {
                // Different vegetarian suggestions
                const vegetarianOptions = [
                        { suggestion: 'Winter Squash Risotto' },
                        { suggestion: 'Vegetarian Lasagna' },
                        { suggestion: 'Stuffed Bell Peppers' }
                ];

                const randomIndex = Math.floor(Math.random() * vegetarianOptions.length);
                suggestion = vegetarianOptions[randomIndex].suggestion;
        }
        else if (numGuests === 2) {
                suggestion = 'Intimate Dinner for Two';
        } else if (numGuests === 3) {
                suggestion = 'Family Feast for Three';
        } else if (numGuests >= 4 && numGuests <= 6) {
                suggestion = 'Festive Roast Chicken Dinner';
        } else {
                suggestion = 'Grand Banquet with Multiple Courses';
        }
        imagePath = await generateAnImage(suggestion)

        const resultElement = document.getElementById('result');
        const foodElement = document.getElementById('food');
        const foodImageElement = document.getElementById('foodImage')

        // You can replace the links with actual recipe links
        const suggestionLink = '<a href="#">Recipe Link</a>';

        resultElement.innerHTML += `${suggestion}</span>.</br></br> ${suggestionLink}`;
        foodImageElement.src = imagePath;
        result.style.display = 'block'
}