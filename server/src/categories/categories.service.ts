import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  getAllCategories(): Promise<Array<Category>> {
    return this.categoryRepository.find();
  }

  getCategoryById(categoryId: number): Promise<Category> {
    const category = this.categoryRepository.findOne({ id: categoryId });
    return category ? category : null;
  }
}
