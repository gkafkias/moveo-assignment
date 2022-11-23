This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the project, first, install the dependencies:

```bash
npm i
# or
yarn
```

Add a `.env` file to the root of the project with the following content:

```bash
NEXT_PUBLIC_API_URL=https://637e4c73cfdbfd9a63add456.mockapi.io
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**IMPORTANT:** In localhost, the API call will be blocked by CORS. To avoid this, you can use a browser extension like [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf).
