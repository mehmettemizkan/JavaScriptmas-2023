🎁 Use an eventListener to listen for a 'submit' event and capture the value of the textarea.

🎁 Which built-in JavaScript method closes a <dialog> element?

🎁 You can use OpenAI or HuggingFace to complete the AI section of this challenge.

🎁 For OpenAI you will need to use the image generation endpoint, which you can read about in the docs here: https://platform.openai.com/docs/api-reference/images/create

🎁 For HuggingFace, I would recommend using the "stabilityai/stable-diffusion-2" model. You can read up on it here:
https://huggingface.co/tasks/text-to-image

🎁 A lot of the HuggingFace docs are in Python so look out for HuggingFace.js code snippets.

🎁 The above HuggingFace method will provide you with a Blob, and not an image URL. You will need to convert this to Base64. You can google how to do this, but if you get stuck scroll down for some extra help. 👇👇👇👇

SPOILER: EXTRA HELP BELOW! THIS IS ALMOST CHEATING 😛

🎁 OK, because getting this to work with HuggingFace is quite challenging, here is some extra help.

1. Use the "stabilityai/stable-diffusion-2" model to generate your image (see code snippet in first HF link above).

2. Step 1 will get you a blob. Convert it using this async function:

    async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
    })
    }

So you could take your response and do this to get your URL:
const imageUrl = await blobToBase64(response)

That will give you a special data url. You can use this to render your image. Just use it in the "src" of an <img> element as usual.
