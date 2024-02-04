
# OrganLink

An intuitive platform designed to streamline the process for organ recipients, enabling them to effortlessly discover hospitals where organs are currently available for transplantation.


## Tech Stack

**Client:** React, Redux, TailwindCSS, TypeScript

**Server:** Node, Express, TypeScript

**Database:** MongoDb


## Features

- Authentication and Autharization with JWT token

![App Screenshot](https://res.cloudinary.com/dxyfqzmew/image/upload/v1707072752/OrganLink-assets/Screenshot_2024-02-05_000344_ykco4a.png)

- Verified hospitals can create listings for      available organs

![App Screenshot](https://res.cloudinary.com/dxyfqzmew/image/upload/v1707072803/OrganLink-assets/Screenshot_2024-02-04_233505_pgofjp.png)

- Hospitals can post urgent organ announcements, signaling critical need or emergencies and Users receive notifications via in-app alerts keeping them informed about urgent organ announcements on the platform.

![App Screenshot](https://res.cloudinary.com/dxyfqzmew/image/upload/v1707072783/OrganLink-assets/Screenshot_2024-02-04_233642_nxuwxo.png)

- Users can filter organs by the type of the organ and distance from their location. See the demo video below

[![Demo](https://res.cloudinary.com/dxyfqzmew/video/upload/v1707073872/OrganLink-assets/Organ_Link_-_Google_Chrome_2024-02-05_00-35-31_fnm1s5.jpg)](https://res.cloudinary.com/dxyfqzmew/video/upload/v1707073872/OrganLink-assets/Organ_Link_-_Google_Chrome_2024-02-05_00-35-31_fnm1s5.mp4)

- Users can send direct messages to hospitals to inquire about specific organs or discuss potential donations. See the demo video below

[![Demo](https://res.cloudinary.com/dxyfqzmew/image/upload/v1707075093/OrganLink-assets/Screenshot_2024-02-05_010107_sxwnn1.png)](https://res.cloudinary.com/dxyfqzmew/video/upload/v1707074864/OrganLink-assets/Organ_Link_-_Google_Chrome_2024-02-05_00-55-23_ca8hna.mp4)
## Environment Variables

To run this project, you will need to add the following environment variable to your .env file in the organdon directory

`VITE_BASE_URL= "http://localhost:4000"`

After adding this, add the following environment variables to your .env file in the server directory

`MONGO_URL="YOUR_MONGODB_URL"`

`PORT=4000`

`JWT_KEY="SECRET-KEY"`

`EMAIL_USER="YOUR_MAIL_ID"`

`EMAIL_APP_PASS="YOUR_PASSWORD"`


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Run the client side code

```bash
  cd client/organdon
  npm install
  npm run dev
```


Start the server

```bash
  cd server
  npm install
  npm run dev
```


## 🔗 Links

Need help? Feel free to contact me on

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-portfolio-j71m.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/santi-singha)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/santi3012139331)

