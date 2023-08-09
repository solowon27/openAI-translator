const { OpenAI } = require('langchain/llms/openai');
const inquirer = require('inquirer');
const dotenv = require('dotenv').config();

const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY, // Adjust the environment variable name
    temperature: 0,
    model: 'gpt-3.5-turbo'
});

const promptFunc = async (input) => {
    try {
        const res = await model.call(input);
        console.log(res);
    } catch (err) {
        console.error(err);
    }
};

const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text you want to translate:',
        },
        {
            type: 'input',
            name: 'targetLanguage',
            message: 'Enter the target language:',
        },
    ]).then((inquirerResponse) => {
        promptFunc(inquirerResponse.text); // Use inquirerResponse.text for the question
    });
};

init();
