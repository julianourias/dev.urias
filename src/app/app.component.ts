import { Component } from '@angular/core';
import { Job } from '../model/job';
import { Base } from '../model/base';
import { Education } from 'src/model/education';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'Juliano Augusto Cavalcante Urias';

  description = `
      <p>
        Desenvolvedor Full-stack, com experiência em Javascript (Angular, Node.js, React Native, Vue.js),
        Python (Flask, FastAPI, AirFlow, Pandas, LangChain), Java (Spring), SQL, testes unitários (PyTest, Jest,
        Vue Test, JUnit, Cucumber, Mockito, utPLSQL), GIT, metodologias ágeis, CI/CD, e outras linguagens como Pascal e C.
      </p>
      <p>
        Desde o ínicio do ensino médio técnico (2017) tive oportinidade de atuar em projetos extracurriculares que me introduziram
        à programação, e desde de então comecei a aprender mais sobre o assunto de forma autodidata, até que no inicío de
        2020 tive minha primeira oportunidade de emprego como analista de sistemas, e desde então continuo trabalhando e
        estudando na área.
      </p>
      <p>
        Essas experiências em projetos e no mercado de trabalho me ensinaram muito sobre trabalho em equipe, liderança, e
        como lidar com situações de urgência (em correções e entregas). Gosto muito de aprender novas tecnologias, sempre
        busco me manter atualizado sobre as novidades do mundo de desenvolvimento de software e suas boas práticas.
      </p>
  `;

  jobs: Job[] = [
    {
      title: 'Desenvolvedor de Aplicações',
      area: 'IBM Consulting',
      company: 'IBM',
      location: 'Brasil',
      start_date: 'Ago. 2024',
      end_date: 'Presente',
      description: 'Atualmente, estou iniciando em uma nova oportunidade na área de consultoria da IBM.',
      skills: ['Python', 'Angular']
    },
    {
      title: 'Analista de Desenvolvimento',
      area: 'Equipe de IA',
      company: 'Mutant',
      location: 'Brasil',
      start_date: 'Jul. 2024',
      end_date: 'Ago. 2024',
      description: 'Atuei por um curto período no time de Inteligência Artificial da cliente Vivo (Telefónica).',
      skills: ['Python', 'IA', 'React', 'Kubernetes', 'GitLab', 'MongoDB', 'LangChain',]
    },
    {
      title: 'Engenheiro de Software',
      area: 'Equipe de Inovação',
      company: 'UOL',
      location: 'Brasil',
      start_date: 'Nov. 2023',
      end_date: 'Jun. 2024',
      description: 'Fiz parte da equipe de inovação do UOL, responsável pelo desenvolvimento de novos produtos dentro da empresa.',
      skills: ['Python', 'IA', 'React (com Next)', 'AWS', 'Kubernetes', 'Jenkins', 'SQL (MySQL)', 'Firebase', 'Linux',]
    },
    {
      title: 'Engenheiro de Software',
      area: 'Equipe UOL Ads',
      company: 'UOL',
      location: 'Brasil',
      start_date: 'Mai. 2022',
      end_date: 'Out. 2023',
      description: 'Iniciei minha jornada no UOL na equipe UOL Ads, a plataforma de publicidade self-service do UOL...',
      skills: ['Java (com Spring)',' Vue.js', 'Node.js', 'Angular', 'Docker', 'Kubernetes', 'Jenkins', 'SQL (MySQL)', 'RabbitMQ', 'Linux',]
    },
    {
      title: 'Programador Full Stack',
      area: 'Analista de Sistemas',
      company: 'KMM by nstech',
      location: 'Brasil',
      start_date: 'Abr. 2021',
      end_date: 'Mai. 2022',
      description: 'Trabalhei desenvolvendo soluções/customizações para algumas das maiores empresas de logística do Brasil.',
      skills: ['Angular', 'TypeScript', 'CSS', 'Testes unitários com utPLSQL', 'Python', 'Java', 'Docker', 'Apache Airflow', 'GIT', 'GitHub', 'Subversion',]
    },
    {
      title: 'Programador Full Stack',
      area: 'Analista de Sistemas',
      company: 'Dominus Software',
      location: 'Paraná, Brasil',
      start_date: 'Jan. 2020',
      end_date: 'Abr. 2021',
      description: 'Nessa função, trabalhei principalmente no desenvolvimento e manutenção de aplicativos mobile usando o framework React Native.',
      skills: ['React Native', 'Node.js', 'Delphi', 'GIT', 'GitHub',]
    },
  ];

  educations: Education[] = [
    {
      title: 'Tecnologia Em Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdades Integradas do Vale do Ivaí (UNIVALE)',
      location: 'Paraná, Brasil',
      start_date: '2021',
      end_date: '2024',
    },
    {
      title: 'Técnico em Eletrotécnica - Integrado ao Ensino Médio',
      institution: 'Instituto Federal do Paraná',
      location: 'Paraná, Brasil',
      start_date: '2017',
      end_date: '2021',
    },
  ]

   projects: Base[] = [
    {
      title: 'Projeto de Extensão - Agro Serviços',
      company: 'Univale Ivaiporã - Faculdades Integradas do Vale do Ivaí',
      location: 'Paraná, Brasil',
      start_date: 'Abr. 2024',
      end_date: 'Jul. 2023',
      description: 'Desenvolvi este projeto de extensão, que envolveu a criação de um aplicativo móvel usando Flutter e backend em Python.',
      skills: ['Flutter', 'Python (Flask)', 'Google Cloud Platform (GCP)', 'NGINX', 'Firebase', 'Bootstrap', 'GitHub Pages']
    },
    {
      title: 'Projeto de Extensão - Pocket Physics',
      company: 'Instituto Federal do Paraná - IFPR',
      location: 'Paraná, Brasil',
      start_date: 'Mar. 2021',
      end_date: 'Jul. 2020',
      description: 'Projeto de extensão com bolsa, no qual contribuí para o desenvolvimento de uma API com Node.js, um aplicativo em React Native.',
      skills: ['React Native', 'Node.js', 'Arduino IDE', 'GIT', 'GitHub']
    },
    {
      title: 'Olimpíada de Robótica',
      company: 'Instituto Federal do Paraná - IFPR',
      location: 'Paraná, Brasil',
      start_date: '2019 e 2017',
      end_date: '2017',
      description: 'Em 2017 e 2019 participei com minha equipe na Olimpíada de Robótica do IFPR. O objetivo desta Olimpíada era criar protótipos de hardware e software para Arduino.',
      skills: ['Arduino', 'Linguagem C']
    },
  ]
}
