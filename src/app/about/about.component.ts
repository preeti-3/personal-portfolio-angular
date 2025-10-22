import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private dialog: MatDialog) { }

  openPopup(company: any): void {
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: company,
    });
  }

  // Array of data
  aboutme: string = `As a full-stack developer my journey in web development has been marked by a relentless pursuit of creating robust, user-centric digital experiences. Leveraging the power of back-end technologies and object-relational mapping, I have a passion for engineering solutions that are not only functional but also intuitive for users. 

Currently, I am enriching my knowledge through a Bachelor of Computer Applications at Indira Gandhi National Open University, which complements my hands-on experience. My competencies in Full-Stack Development have been honed through practical application and continuous learning, with a focus on optimizing web applications for scalability and performance.`;

  work: Array<any> = [
    {
      id: 1,
      company: 'I Trend Solution',
      position: 'Software Engineer',
      time_period: 'May 2025 - Present',
      place: 'Hisar Haryana India',
      overview:
        'iTrend Solution is a leading e-commerce company specializing in selling a wide range of products across major international platforms such as Amazon',
      my_role:
        'As a Full-Stack Developer at iTrend Solution, I worked on building and maintaining an internal Amazon Seller Partner (SP) inventory management platform, integrating multiple warehouse APIs, and developing Amazon Ads management solutions. My responsibilities spanned the entire development lifecycle from database architecture and backend logic to user interface design and process automation. I also implemented AI-driven recommendations to optimize bidding and budget allocation for ad campaigns, ensuring better sales performance. Additionally, I managed server-side deployments, handled server administration, and optimized system performance.',
      impact:
        'This role provided invaluable hands-on experience with Amazon SP-API, Amazon Ads API, and other critical third-party APIs. I gained deep expertise in real-time inventory synchronization, automated workflow creation (using cron jobs), and scalable architecture design. Working on AI-based ad optimization and multi-warehouse integrations demonstrated my ability to deliver robust, data-driven solutions that improved efficiency and sales outcomes.',
      projects: [
        {
          name: 'Amazon SP Manager',
          link: '#',
          image: 'assets/img/itrend-sp.webp',
          gallery: [
            { image: 'assets/img/projects/itrend-login.webp', name: 'Login' },
            { image: 'assets/img/itrend-sp.webp', name: 'Dashboard' },
            {
              image: 'assets/img/projects/itrend-notifications.webp',
              name: 'Notifications',
            },
            {
              image: 'assets/img/projects/itrend-product.webp',
              name: 'Products',
            },
          ],
        },
      ],
      tech: [
        {
          name: 'laravel',
          link: 'https://laravel.com/',
          image: 'assets/img/laravel.svg',
        },
        {
          name: 'php',
          link: 'https://www.php.net/',
          image: 'assets/img/php.svg',
        },
        {
          name: 'Mysql',
          link: 'https://www.mysql.com/',
          image: 'assets/img/mysql.svg',
        },
        {
          name: 'HTML5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          image: 'assets/img/html5.svg',
        },
        {
          name: 'CSS3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          image: 'assets/img/css3.svg',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'jQuery',
          link: 'https://jquery.com/',
          image: 'assets/img/jquery.svg',
        },
        {
          name: 'Visual Studio Code',
          link: 'https://code.visualstudio.com/',
          image: 'assets/img/vscode.svg',
        },
        {
          name: 'Github',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/github.svg',
        },
      ],
    }
  ];

  education: Array<any> = [
    {
      studied_at: 'Indira Gandhi National Open University',
      qualified: 'Bachelor of Computer Applications',
      time_period: '2024 - Present',
      place: '',
    },
    {
      studied_at: 'Government Polytechnic College',
      qualified: 'Diploma of Education, Computer Engineering',
      time_period: '2020 - 2023',
      place: 'Hisar Haryana India',
    }
  ];
}
