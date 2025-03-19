# MDA Server

Hosting at your doorsteps

Static or dynamic – add a few lines of code to make your site truly yours. Built by developers, for developers

## Table of Contents- 
- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#for-advance-settings)
- [Features](#features)
- [Pricing](#pricing)
- [Design](#design)
- [How it Works](#how-it-works)
- [Credits and Acknowledgements](#credits-and-acknowledgements)
- [Contributing](#contributing)
- [License](#license)


## Introduction

MDA Server is a versatile hosting solution tailored for developers. Whether you need static or dynamic hosting, MDA Server provides the flexibility and control you need to make your site truly yours. Built on Node.js, it offers lightning-fast hosting that scales with your ideas. With features like custom port selection, real-time monitoring, and secure dynamic site support via MongoDB, MDA Server is built by developers, for developers.

## Installation

To get started with MDA Server, follow these steps:
**make sure this are installed** if it's already installed than you can skip this part!
```
sudo apt install nodejs
```
```
sudo apt install git 
```
```
sudo apt install ssh
```

Now :- 
```
git clone https://github.com/AdnanDLuffy/MDA-Server.git
```
```
cd MDA-Server
```
```
npm install
```
```
node Server.js
```

That's it—you are good to go!

## For Advance Settings

after running **node Server.js** you will see a promt asking you about further settings..
you can change any settings there ! like port or what ever ...But if you planning to use it for big thing than 
create a MongoDB account and copy paste the authToken into next promt ! 
it will look like this !
```bash
mongodb+srv://username:password@cluster0.cbnst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
if you don't wan't to use it for big stuff .. than there is not need to warry .. cause we will use default one ! 
but if you are a privecy freak than you your own authToken 

## Ngrok Setup
If everything is ok after visiting `localhost:port/DashBoard` ... you will find a input field to give your ngrok authtoken ..
- So click in this [Ngork](https://dashboard.ngrok.com/login) and create a ngrok account or if you already have one than login to the site next 
- after login to the site click here [See your AuthToken](https://dashboard.ngrok.com/get-started/your-authtoken) and copy the token !
- just paste it into the input field and click launch button ... 

## Serveo Setup 

It's more good than ngrok since it use ssh ... you just have to give a subdomain name and click launch ... it's will start within a sec.

**If you see any Error**
Just type in the following commands ! 

```
ssh -keygen
```
replace the port with your server port !
```
ssh -R anipub:80:localhost:port serveo.net
```
you will find a google/github verification link.. just follow the link and confirm your account ! 
That's it , you don't have to do anything again

***Why it's better than ngrok?***

-You don't have to create another account since it's a hassle
-You can't create custom subdomain in ngrok unless you pay them money 


| Feature         | Ngrok                                                                 | Serveo.net                                                   |
|-----------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| **Pros**        |                                                                      |                                                              |
| Ease of Use     | Simple setup and easy to use with a single command                   | No installation required, uses SSH for tunneling             |
| Features        | Offers a variety of features: HTTP(s), TCP, custom subdomains etc.   | Lightweight, straightforward tunneling                       |
| Dashboard       | Provides a web-based dashboard for monitoring traffic                | No web-based dashboard, purely command-line based            |
| Security        | Supports secure tunnels with HTTPS                                   | Uses SSH, inherently secure                                  |
| Customization   | Allows custom subdomains and custom domains                          | Custom subdomains supported                                  |
| Support         | Extensive documentation and community support                        | Minimal documentation, relies on SSH knowledge               |
| **Cons**        |                                                                      |                                                              |
| Pricing         | Free tier available, but advanced features require a paid plan       | Free, but lacks advanced features                            |
| Limitations     | Free tier has limits on session duration and connections             | Limited features compared to Ngrok                           |
| Setup           | Requires installation of Ngrok client                                | Requires SSH access and setup                                |
| Custom Domains  | Custom domains are a paid feature                                    | No support for custom domains                                 |
| Advanced Features| Advanced features are behind a paywall                              | Lacks advanced features like HTTP(s), TCP, and custom domains |


## Features

- **Your Rules, Your Way**: Pick any port you want for your project. No restrictions, just pure flexibility to match your workflow. Built for devs who hate being boxed in.
- **Command Central**: Manage everything from one sleek admin panel. Upload files, tweak settings, or check status—total control, zero hassle.
- **See It All**: Your site’s heartbeat in real time. Monitor uptime, resources, or whatever matters to you, all in a clean dashboard view.
- **Locked Down Security**: Power your dynamic sites with MongoDB, wrapped in custom auth tokens so your data stays safe. No stress, just secure vibes.
- **File Freedom**: Host HTML, CSS, JSON, JS, Markdown, TXT, DOC, or EJS—bring any file type you want. Your creativity, our support.
- **Node.js Power**: Built on Node.js for lightning-fast hosting that scales with your ideas. Devs know it, devs love it.
- **Free Forever**: Host your sites without spending a dime. 100% free, because great tools shouldn’t cost you.
- **Join the Party**: Open-source on GitHub—peek under the hood, tweak the code, or add your magic. Built by the community, for the community.
- **Tunneling Made Easy**: Test or share your site in seconds with Serveo or Ngrok. Public URLs, no setup pain—boom, you’re live.

## Pricing

### Price: Free

- **Totally Free**: Host your sites, tweak your ports, and go dynamic—all for zero bucks. No hidden fees, no upsells, just pure dev goodness.
- **Why Free?**: Built with Node.js and powered by GitHub contributions, this tool is by devs, for devs.
- **What’s the Catch?**: There isn’t one. Host anything, add a few lines for dynamic magic, and pay nothing. Skeptical? Try it—your wallet stays happy.

## How it Works

1. Sign Up
2. Give File Path
3. Go live!

## Design

### Clean and Intuitive

A modern, sleek UI designed for ease of use. Navigate with simplicity and efficiency, ensuring you spend less time managing and more time developing.

### Responsive Layout

Optimized for any device—desktop, tablet, or mobile. Manage your server on the go without sacrificing functionality or aesthetics.

### Customizable Themes

Choose from a variety of themes to match your style. Dark mode, light mode[Isn't available yet], and everything in between—make your workspace truly yours.

### User Experience Focused

Every feature and button is designed with the developer in mind. Intuitive placements and a thoughtful layout streamline your workflow, making server management a breeze.


## Why MDA-Server 

| Feature               | MDA Server                                                                                   | Heroku                                            | Vercel                                            | Other Platforms                                  |
|-----------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|
| **Pricing**           | 100% Free                                                                                    | Free tier with limited features; Paid plans available | Free tier with limited features; Paid plans available | Varies, usually includes free and paid tiers     |
| **Ease of Use**       | Easy to use with CLI and dashboard                                        | Easy to use with CLI and dashboard                | Easy to use with CLI and dashboard                | Varies, some may require complex setup            |
| **Customization**     | Full control over ports and settings                                                         | Limited by platform constraints                   | Limited by platform constraints                   | Varies, often limited by platform constraints    |
| **Flexibility**       | Host any file type (HTML, CSS, JSON, JS, Markdown, TXT, DOC, EJS)                            | Limited to certain file types and build processes | Limited to certain file types and build processes | Varies, often limited to specific use cases      |
| **Security**          | Custom auth tokens and MongoDB integration                                                   | Basic security features; additional costs for advanced security | Basic security features; additional costs for advanced security | Varies, often requires additional configuration  |
| **Performance**       | Built on Node.js for fast and scalable hosting                                               | Good performance, but may require paid plans for best performance | Good performance, but may require paid plans for best performance | Varies, often depends on paid plans              |
| **Open Source**       | Fully open-source on GitHub—community-driven improvements and transparency                    | Proprietary platform                              | Proprietary platform                              | Varies, some may offer open-source components    |
| **Real-Time Monitoring** | Real-time dashboard for monitoring uptime and resources                                    | Basic monitoring features; advanced features require paid plans | Basic monitoring features; advanced features require paid plans | Varies, often requires third-party tools         |
| **Tunneling**         | Easy tunneling with Serveo or Ngrok                                                          | No built-in tunneling features                    | No built-in tunneling features                    | Varies, often requires third-party tools         |
| **Community Support** | Community-driven, open-source project with contributions from developers                     | Strong community support, but platform-specific   | Strong community support, but platform-specific   | Varies, often depends on the platform            |
| **Deployment Time**   | Fast deployment with minimal setup                                                           | Can be slow depending on build processes and platform limitations | Can be slow depending on build processes and platform limitations | Varies, often depends on the platform            |
| **Scalability**       | Scales with your ideas using Node.js                                                         | Scales well, but may require paid plans for higher scalability | Scales well, but may require paid plans for higher scalability | Varies, often requires additional configuration  |



## Contributing

We welcome contributions to enhance MDA Server! To contribute, please follow these steps:

1. **Fork the Repository**: Click on the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.

2. **Clone the Fork**: Clone your forked repository to your local machine using:
   ```bash
   git clone https://github.com/<your-username>/MDA-Server.git
   cd MDA-Server```
3. **Create a Branch**: Create a new branch for your feature or bug fix:
```bash
git checkout -b feature-branch
```
4. **Make Changes**: Make your changes in the code. Ensure your code follows the project's coding standards.
5. **Commit Changes**: Commit your changes with a meaningful commit message:
```bash
git add .
git commit -m "Add feature X"
```   
6.**Push to GitHub**:Push your changes to your forked repository:
```bash
git push origin feature-branch
```
7.**Create a Pull Request**: Go to the original repository and click on the "Pull requests" tab. Click the "New pull request" button and select your branch to create a pull request.

8.**Review Process**: Your pull request will be reviewed by the maintainers. Be responsive to any feedback and make necessary changes.

9.**Merge**: Once your pull request is approved, it will be merged into the main branch of the repository.

### Guidelines
- Ensure your code follows the project's coding standards.
- Write clear and concise commit messages.
- Include comments in your code where necessary.
- Update documentation if your changes affect it.
- Write tests for any new features or bug fixes.

  **Thank you for contributing to MDA Server!**


## Credits and Acknowledgements

This project is developed and maintained by [AdnanDLuffy](https://github.com/AdnanDLuffy). We thank the following contributors for their valuable input and support:

- [AdnanDLuffy](https://github.com/AdnanDLuffy)
- Contribute to see your name here

Special thanks to the open-source community for their contributions and support. This project is powered by contributions from developers worldwide and built with the following technologies:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Serveo](https://serveo.net/)
- [Ngrok](https://ngrok.com/)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as you see fit. For more details, see the [LICENSE](LICENSE) file.
