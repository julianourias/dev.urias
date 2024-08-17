import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'Juliano Augusto Cavalcante Urias';

 /*
  <div class="job">
        <h4>Analista de Desenvolvimento - Equipe de IA</h4>
        <p><strong>Mutant</strong>, Brasil (Ago. 2024 - Jul. 2024)</p>
        <p>Atualmente, estou iniciando em uma nova oportunidade para atuar no time de Inteligência Artificial da cliente Vivo (Telefónica).</p>
        <p><strong>Habilidades Técnicas:</strong> Python, IA, React, Kubernetes, GitLab, MongoDB, LangChain</p>
      </div>
      <div class="job">
        <h4>Engenheiro de Software - Equipe de Inovação</h4>
        <p><strong>UOL</strong>, Brasil (Jun. 2024 - Nov. 2023)</p>
        <p>Fiz parte da equipe de inovação do UOL, responsável pelo desenvolvimento de novos produtos dentro da empresa.</p>
        <p><strong>Habilidades Técnicas:</strong> Python, IA, React (com Next), AWS, Kubernetes, Jenkins, SQL (MySQL), Firebase, Linux</p>
      </div>
      <div class="job">
        <h4>Engenheiro de Software - Equipe UOL Ads</h4>
        <p><strong>UOL</strong>, Brasil (Out. 2023 - Mai. 2022)</p>
        <p>Iniciei minha jornada no UOL na equipe UOL Ads, a plataforma de publicidade self-service do UOL...</p>
        <p><strong>Habilidades Técnicas:</strong> Java (com Spring), Vue.js, Node.js, Angular, Docker, Kubernetes, Jenkins, SQL (MySQL), RabbitMQ, Linux</p>
      </div>
      <div class="job">
        <h4>Programador Full Stack - Analista de Sistemas</h4>
        <p><strong>KMM by nstech</strong>, Brasil (Mai. 2022 - Abr. 2021)</p>
        <p>Trabalhei desenvolvendo soluções/customizações para algumas das maiores empresas de logística do Brasil.</p>
        <p><strong>Habilidades Técnicas:</strong> Angular, TypeScript, CSS, Testes unitários com utPLSQL, Python, Java, Docker, Apache Airflow, GIT, GitHub, Subversion</p>
      </div>
      <div class="job">
        <h4>Programador Full Stack - Analista de Sistemas</h4>
        <p><strong>Dominus Software</strong>, Paraná, Brasil (Abr. 2021 - Jan. 2020)</p>
        <p>Nessa função, trabalhei principalmente no desenvolvimento e manutenção de aplicativos mobile usando o framework React Native.</p>
        <p><strong>Habilidades Técnicas:</strong> React Native, Node.js, Delphi, GIT, GitHub</p>
      </div>
 */

  jobs: Job[] = [
    {
      title: 'Desenvolvedor de Aplicações - IBM Consulting',
      company: 'IBM',
      location: 'Brasil',
      start_date: 'Ago. 2024',
      end_date: 'Presente',
      description: 'Atualmente, estou iniciando em uma nova oportunidade na área de consultoria da IBM.',
      skills: 'Python, Angular'
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
