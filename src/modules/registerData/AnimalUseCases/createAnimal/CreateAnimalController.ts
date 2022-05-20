import { Request, Response } from "express";

import { container } from "tsyringe";
import { CreateAnimalUseCase } from "./CreateAnimalUseCase";

class CreateAnimalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      owner_id,
      animal_name,
      gender,
      species,
      breed,
      weight_in_kg,
      birth_day_of_month,
      birth_month,
      birth_year,
      death_day_of_month,
      death_month,
      death_year,
      neutering,
      notes,
    } = request.body;

    const createAnimalUseCase = container.resolve(CreateAnimalUseCase);

    const animalCreated = await createAnimalUseCase.execute({
      owner_id,
      animal_name,
      gender,
      species,
      breed,
      weight_in_kg,
      birth_day_of_month,
      birth_month,
      birth_year,
      death_day_of_month,
      death_month,
      death_year,
      neutering,
      notes,
    });

    return response.status(201).json(animalCreated);
  }
}

export { CreateAnimalController };
