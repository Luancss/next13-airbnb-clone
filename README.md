# Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

### Desktop (screenshot):

| Home  | Info Propertie | 
| --- | --- |
| ![airbnb1](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/ca1eeaab-3c30-4f51-8966-ab4a4e688b45) | ![airbnb2](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/f6a3120f-eef0-4e19-bfa0-e49b3c57bad8)


| Reserve | My Trips |
| --- | --- |
| ![airbnb3](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/e943c998-01cb-4750-8e4d-fdebb79d3096) | ![airbnb4](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/f21059ea-c7a6-4e64-b1c0-476d9366a35b)

| My Properties  | Location | 
| --- | --- |
| ![airbnb11](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/5b00e46b-3eaa-4efe-922a-04c5d62b927b) | ![airbnb5](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/98a590a2-3e6f-453c-afbf-d422c12c2cd2)

| Location Map | Add Info Reservation |
| --- | --- |
| ![airbnb6](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/7260f7f7-0454-4f0e-8d72-3304845ef09e) | ![airbnb7](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/fd0d43d3-c8b0-4b57-bff4-0188697cc367)

| Upload Photo  | Title and Description | 
| --- | --- |
| ![airbnb8](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/abda9a7b-11be-41b8-ab38-6cf3d0decba2) | ![airbnb9](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/12efe872-7c97-4ec3-9961-ec355ee5738f)

![airbnb10](https://github.com/Luancss/next13-airbnb-clone/assets/104950187/84177110-0575-4a81-86d5-1573fcfb4fdd)


This is a repository for a Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.

[DEPLOY]()

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/Luancss/next13-airbnb-clone
```

### Install packages

```shell
npm install
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
