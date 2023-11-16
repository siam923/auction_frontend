This is a simple auction site frontend project built with [Next.js](https://nextjs.org/).

- Authentication system is built using clerk
- backend of the system runs in aws lambda in connected with dynamo db using aws api gateway
- Uses zoom sdk to embed live conference facilities
- For notification service it uses aws sns with lambda integration

## Getting Started

First set the environment variables:

```.env
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL='/'
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL='/'
API_BASE='you api link '
NEXT_PUBLIC_API_BASE='public api url'
```

```.env local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
ZOOM_API_KEY=
ZOOM_API_SECRET=
ZOOM_MEETING_NUMBER=
ZOOM_MEETING_PASSWORD=

```

## Sample api response data:

For getting all items:

```json
[
  {
    "detail": "A primitive aged phone for all home design",
    "image": "image.jpg",
    "ItemId": "1fee323",
    "auctionEndTime": "2023-11-25T18:30:00Z",
    "basePrice": 300,
    "conferenceLink": "https://zoom.us/j/1234567890",
    "name": "Vintage Tele Phone"
  }
]
```

Sample bids data

```
[{"ItemId": "1fee323", "userId": "test@gmail.com", "time": "2023-11-16T08:14:58.315735", "price": 600, "name": "Gabby", "BidId": "1ec3acb7-b274-48ae-b1ed-8d46fe8ce060"}, ...]
```

> Feel free to configure your backend as your own convenience

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
