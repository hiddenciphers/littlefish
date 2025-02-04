# littlefishaccounting.com.au

To run locally:

Navigate to your chosen local directory, then follow these steps.

Run:

`git clone https://github.com/hiddenciphers/littlefish.git`

Once cloned, run:

- `cd littlefish`

- `cd backend`

- `npm i`

- `cd server`

- `touch .env`

- `open .env` > copy the following into the .env file > `RESEND_API_KEY=your_resend_api_key_here`

- Goto https://resend.com > Sign up and create an API key, then inside the .env file replace 'your_resend_api_key_here' with your new API key

- Open `index.js` > The email address on line 17 needs to be valid and then verified on https://resend.com/domains by adding the newly generated resend DNS records to cloudflare

- To start the backend server which handles form submission/email sending, ensure you are inside `server`, then run: `node index.js`

- You can now test functionality by filling out and submitting the contact form which if successful will route to thomas@littlefishaccounting.com.au

- Once these steps are completed and all tests are passing, remove the console.log statements inside `index.js` on lines 28 and 32

- Project is now ready for deployment > please note - `backend` and `server` directories will have to be deployed separately using a node.js build tool that will install dependencies and start the server
