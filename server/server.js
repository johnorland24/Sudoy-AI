// import express from 'express';
// import * as dotenv from 'dotenv';
// import cors from 'cors';
// import { Configuration, OpenAIApi } from 'openai';


// dotenv.config();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY ,// This is also the default, can be omitted
// });

// const openai = new OpenAIApi(configuration);

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', async (req, res) => {
//    res.status(200).send({ 
//     message: 'Hello From SUDOY AI'
//    })
// });

// app.post('/', async (req, res) => {
//    try {
//       const prompt = req.body.prompt;

//       const response = await openai.createCompletion({
//          model: "text-davinci-003",
//          prompt: `${prompt}`,
//          temperature: 0,
//          max_tokens: 3000,
//          top_p: 1,
//          frequency_penalty: 0.5,
//          presence_penalty: 0
//       });

//       res.status(200).send({
//          bot: response.data.choices[0].text
//       });
//    } catch (error) {
//       console.log(error);
//       res.status(500).send({ error });
//    }
// });

// app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));











import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have the correct environment variable set
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({ message: 'Hello From SUDOY AI' });
});

app.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));






// import express from 'express';
// import * as dotenv from 'dotenv';
// import cors from 'cors';
// //import  OpenAIApi from 'openai';
// import { OpenAI } from "openai";

// // import Configuration from 'openai';
// dotenv.config();

// //   console.log(process.env.OPENAI_API_KEY)
// // const configuration = new Configuration({
// //    apiKey: process.env.OPENAI_API_KEY, 
// // });

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// // const openai = new OpenAIApi(configuration);
// //const config = new Configuration({apiKey:process.env.OPENAPI_KEY}); 
// // const openai = new OpenAIApi(config);

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', async (req, res) => {
//    res.status(200).send({ 
//     message:'Hello From SUDOY AI',

//    })
// });

// app.post('/', async (req,res) =>{
//    try {
      
//       const prompt = req.body.prompt;

//       const response = await openai.createCompletion({
//          model: "text-davinci-003",
//           prompt: `${prompt}`,
//           temperature: 0,
//           max_tokens: 3000,
//           top_p: 1,
//           frequency_penalty:0.5,
//           presence_penalty: 0,
//       });
//       res.status(200).send({
//          bot: response.data.choices[0].text 
//       })
      
//    } catch (error){
//       console.log(error);
//       res.status(500).send({error })
       
//    }
// });

// app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));




















// import express from 'express';
// import * as dotenv from 'dotenv';
// import cors from 'cors';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const apiKey = process.env.OPENAI_API_KEY;

// const configuration = new Configuration({
//   apiKey: apiKey,
// });

// const openai = new OpenAIApi(configuration);

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', async (req, res) => {
//    res.status(200).send({ 
//       message: 'Hello From SUDOY AI'
//    });
// });

// app.post('/', async (req, res) =>{
//    try {
//       const prompt = req.body.prompt;

//       const response = await openai.createCompletion({
//          model: "text-davinci-003",
//          prompt: `${prompt}`,
//          temperature: 0,
//          max_tokens: 3000,
//          top_p: 1,
//          frequency_penalty: 0.5,
//          presence_penalty: 0,
//       });

//       res.status(200).send({
//          bot: response.data.choices[0].text
//       });
      
//    } catch (error){
//       console.log(error);
//       res.status(500).send({ error });
//    }
// });

// app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));
