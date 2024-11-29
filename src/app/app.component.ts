import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'Juliano Augusto Cavalcante Urias';

  jobs: Job[] = [
    {
      title: 'Desenvolvedor de Aplicações - IBM Consulting',
      company: 'IBM',
      location: 'Brasil',
      start_date: 'Ago. 2024',
      end_date: 'Presente',
      description: 'Atuando na área de consultoria da IBM, alocado em um projeto da Petrobrás, no qual atuo como desenvolvedor full-stack utilizando a stack Python e Angular.',
      skills: 'Python, Angular, PL/SQL, AWS'
    },
    {
      title: 'Analista de Desenvolvimento - Equipe de IA',
      company: 'Mutant',
      location: 'Brasil',
      start_date: 'Jul. 2024',
      end_date: 'Ago. 2024',
      description: 'Atuei por um curto período no time de Inteligência Artificial da cliente Vivo (Telefónica).',
      skills: 'Python, IA, React, Kubernetes, GitLab, MongoDB, LangChain',
    },
    {
      title: 'Engenheiro de Software - Equipe de Inovação',
      company: 'UOL',
      location: 'Brasil',
      start_date: 'Nov. 2023',
      end_date: 'Jun. 2024',
      description: 'Fiz parte da equipe de inovação do UOL, responsável pelo desenvolvimento de novos produtos dentro da empresa.',
      skills: 'Python, IA, React (com Next), AWS, Kubernetes, Jenkins, SQL (MySQL), Firebase, Linux',
    },
    {
      title: 'Engenheiro de Software - Equipe UOL Ads',
      company: 'UOL',
      location: 'Brasil',
      start_date: 'Mai. 2022',
      end_date: 'Out. 2023',
      description: 'Iniciei minha jornada no UOL na equipe UOL Ads, a plataforma de publicidade self-service do UOL...',
      skills: 'Java (com Spring), Vue.js, Node.js, Angular, Docker, Kubernetes, Jenkins, SQL (MySQL), RabbitMQ, Linux',
    },
    {
      title: 'Programador Full Stack - Analista de Sistemas',
      company: 'KMM by nstech',
      location: 'Brasil',
      start_date: 'Abr. 2021',
      end_date: 'Mai. 2022',
      description: 'Trabalhei desenvolvendo soluções/customizações para algumas das maiores empresas de logística do Brasil.',
      skills: 'Angular, TypeScript, CSS, Testes unitários com utPLSQL, Python, Java, Docker, Apache Airflow, GIT, GitHub, Subversion',
    },
    {
      title: 'Programador Full Stack - Analista de Sistemas',
      company: 'Dominus Software',
      location: 'Paraná, Brasil',
      start_date: 'Jan. 2020',
      end_date: 'Abr. 2021',
      description: 'Nessa função, trabalhei principalmente no desenvolvimento e manutenção de aplicativos mobile usando o framework React Native.',
      skills: 'React Native, Node.js, Delphi, GIT, GitHub',
    },
  ];
}

interface Job {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  skills: string;
}
