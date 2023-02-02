import Head from "next/head";

export default function Home() {
  return (
    <>

      <Head>
        <title>Arthur Moro</title>
      </Head>

      <div className="p-4 container">
        <h1 className="">
          Olá, mundo!
        </h1>
        <p>
          Me chamo Arthur Moro.
        </p>
        <p>Sou um desenvolvedor web full stack  desde 2012 e já consegui  várias ansiedades advindas da programação (mas também, várias conquistas)</p>
        <p>Com todo esse tempo de trabalho eu fui capaz de desenvolver a habilidade de tirar um projeto do papel e leva-lo até o deploy (menos o design, claro).</p>
        <p>Aprendi, através dos anos, meios e métodos de como fazer e também, claro, de como não fazer.</p>
        <p>
          São essas algumas das habilidades e experiências que eu consegui desenvolver durante todos os meus mais de 10 anos de experiência:
        </p>
        <p>No front-end: HTML, JavaScript, CSS.</p>
        <p>Ferramentas e frameworks para frontend: React, VueJS, MapBox, Leaflet, Google Maps, React Query, VueQuery e etc etc etc</p>
        <p>Ferramentas para desenvolvimento mobile: Firebase, React Native, AppCenter e CodePush</p>
        <p>No backe-end: Javascript, Golang, Python</p>
        <p>Experiência sólida utilizando ferramentas da AWS como Beanstalk, EC2, Lambdas, ApiGateway, SNS, SQS, StepFunction, CloudWatch, EventBridge, Route53, S3. Essas ferramentas tamém podem ser utilizadas para a integração de sistemas e gerenciamentos de eventos.</p>
        <p>Como provedor de infraestrutura como código utilizo Terraform para facilitar a criação, exclusão e alteração de conjuntos de infraestrutura completos</p>
        <p>Para armazenamento de dados temos também, aqui a experiência vai de bancos relacionais, não relacionais, chave valor e realtime. Dentro dessas necessidades a minha vivência é dentro do MongoDB, PostgreSQL, MySQL, Redis e Firebase RealtimeDB </p>
      </div>
    </>
  )
}
