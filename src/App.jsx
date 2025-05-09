import React from "react";
import "./index.css";

const cardData = [
  {
    id: 1,
    title: "Мокка",
    description: "Развиваем финтех-продукт для международного рынка",
    date: "24 апреля 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#финтех", "#международный", "#рынок"],
    archived: false,
  },
  {
    id: 2,
    title: "Деньги Вперед",
    description: "Фронтенд и бэкенд для сервиса выплат зарплат по запросу",
    date: "16 января 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#финансы", "#сервис", "#выплаты"],
    archived: false,
  },
  {
    id: 3,
    title: "ResolHR",
    description: "Помогли HR-tech-стартапу с кастомизацией для VIP-клиентов",
    date: "10 октября 2023",
    imageUrl: "/img-3.jpeg",
    tags: ["#HR", "#кастомизация", "#VIP"],
    archived: false,
  },
  {
    id: 4,
    title: "ActivePlatform",
    description: "Интеграция Adobe и развитие платформы комплексной подписки",
    date: "10 ноября 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#интеграция", "#платформа", "#подписка"],
    archived: false,
  },
  {
    id: 5,
    title: "START",
    description: "Разработали платформу A/B тестов для стримингового сервиса",
    date: "22 сентября 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B тесты", "#стриминг", "#платформа"],
    archived: false,
  },
  {
    id: 6,
    title: "Mindbox",
    description:
      "Поддерживаем редизайн платформы автоматизированного маркетинга",
    date: "21 сентября 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#маркетинг", "#редизайн", "#автоматизация"],
    archived: false,
  },
];

export default function App() {
  return <CardContainer />;
}

function CardContainer() {
  return (
    <div className="card-container">
      {cardData.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}
function Card({ card }) {
  if (card.archived) return null;
  return (
    <div className="card">
      <img className="card-image" src={card.imageUrl} alt={card.title} />
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        <span className="card-date">{card.date}</span>
        <CardTag tags={card.tags} />
      </div>
    </div>
  );
}

function CardTag({ tags }) {
  return (
    <div className="card-tags">
      {tags.map((tag) => (
        <div key={tag} className="card-tag">
          {tag}
        </div>
      ))}
    </div>
  );
}
