import { Category } from "../models/postgreSQL/categoriesModel"
import { Profession } from "../models/postgreSQL/professionModule"

export function getProfessionsByCategoryName(categoryName: string) {
  return Profession.findAll({
    include: [
      {
        model: Category,
        where: { name: categoryName },
      },
    ],
  })
}
