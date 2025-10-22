import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "Contractor Plus",
      description: "Contract Plus, An all-inclusive mobile solution for contractors. Everything you need to manage your business, get organized and save time",
      image: "assets/img/hinez.webp",
      github: false,
      view: "https://contractorplus.app/",
      status: false,
      date: "May - 2024",
      demo: false,
      tech: [
        {
          name: "Splade",
          image: "assets/img/splade.svg",
        },
        {
          name: "Mysql",
          image: "assets/img/mysql.svg",
        },
        {
          name: "Bootstrap",
          image: "assets/img/bootstrap.svg",
        },
      ]
    },
    {
      name: "QRCode Generate",
      description: "This tool is perfect for anyone needing a quick and reliable way to create QR codes for personal or professional use.",
      image: "assets/img/qrcode-page.webp",
      github: "https://github.com/sahrawataditya/quote-generator",
      view: "https://timspass.vercel.app/qrcode",
      status: false,
      date: "Augest - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Apininja",
          image: "assets/img/ninja.png",
        },
      ]
    },
    {
      name: "Instagram",
      description: "A clone of Instagram, the popular social media platform, allowing users to browse, post, and interact with content in a visually appealing and user-friendly environment.",
      image: "assets/img/instagram.webp",
      github: "https://github.com/sahrawataditya/instagram-angular",
      view: "https://devinstagram.vercel.app",
      status: true,
      date: "July - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "ChatGPT",
          image: "assets/img/openai.svg",
        },
      ]
    },
    {
      name: "Netflix",
      description: "A Netflix clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
      image: "assets/img/netflix-cole.webp",
      github: "https://github.com/sahrawataditya/netflix-clone-angular",
      view: "https://netflix-clone-angular2.vercel.app",
      status: false,
      date: "June - 2024",
      demo: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Swipper",
          image: "assets/img/swipper.svg",
        },
        {
          name: "Tmdb",
          image: "assets/img/tmdb.svg",
        },
      ]
    },
    {
      name: "Invoice Generator",
      description: "A basic invoice generator application built with Laravel Breeze and styled with Tailwind CSS. This project offers minimal yet essential functionality for creating, viewing, and managing invoices",
      image: "assets/img/invoice.png",
      github: "https://github.com/sahrawataditya/InvoiceGenerator",
      view: false,
      status: false,
      date: "April - 2024",
      demo: true,
      tech: [
        {
          name: "Laravel",
          image: "assets/img/laravel.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Vite",
          image: "assets/img/vitejs.svg",
        },
        {
          name: "Mysql",
          image: "assets/img/mysql.svg",
        },
      ]
    },
    {
      name: "Student 360",
      description: "A final year project: A student management portal designed to efficiently manage attendance, grades, student details, and other academic information.",
      image: "assets/img/student360.webp",
      github: "https://github.com/sahrawataditya/Student-360",
      view: false,
      status: false,
      date: "April - 2022",
      demo: false,
      tech: [
        {
          name: "Nodejs",
          image: "assets/img/nodejs.svg",
        },
        {
          name: "Bootstrap",
          image: "assets/img/bootstrap.svg",
        },
        {
          name: "MongoDB",
          image: "assets/img/mongodb.svg",
        },
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "Javascript",
          image: "assets/img/js.svg",
        },
      ]
    },
  ]
}
