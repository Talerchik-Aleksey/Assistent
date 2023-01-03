import { getRandomElements } from "../../utilities/GetRandomElements";

const professions = [
  { profession_name: "доктор", category: 1 },
  { profession_name: "юрист", category: 1 },
  { profession_name: "воспитатель", category: 1 },
  { profession_name: "тренер", category: 1 },
  { profession_name: "микробиология", category: 2 },
  { profession_name: "аграном", category: 2 },
  { profession_name: "овощевод", category: 2 },
  { profession_name: "фермер", category: 2 },
  { profession_name: "инженер", category: 3 },
  { profession_name: "радиомонтажник", category: 3 },
  { profession_name: "сварщик", category: 3 },
  { profession_name: "конструктор", category: 3 },
  { profession_name: "флорист", category: 4 },
  { profession_name: "актёр", category: 4 },
  { profession_name: "парикмахер", category: 4 },
  { profession_name: "дирижер", category: 4 },
  { profession_name: "кассир", category: 5 },
  { profession_name: "экономист", category: 5 },
  { profession_name: "программист", category: 5 },
  { profession_name: "телефонист", category: 5 },
];

export default getRandomElements(professions, 10);
