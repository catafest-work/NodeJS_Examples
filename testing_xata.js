// read more on the official website: http://xata.io

import { config as dotenvConfig } from "dotenv";
// Load environment variables from .env file
dotenvConfig();

// import from src folder
import { getXataClient } from "./src/xata.js";

const apiKey = process.env.XATA_API_KEY; // Replace with your actual API key
// you can show the API key defined in the .env file like this: XATA_API_KEY=... and XATA_BRANCH=... 
//console.log("-> ",apiKey);

const xata = getXataClient(apiKey);

const fetchPosts = async () => {
  try {
    const page = await xata.db.Posts.getPaginated();
    console.log(page.records);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

fetchPosts();