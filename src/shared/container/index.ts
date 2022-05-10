import {container} from "tsyringe"
import {IOwnerRepository} from "../../modules/registerData/repositories/IOwnerRepository"
import { IAnimalRepository } from "../../modules/registerData/repositories/IAnimalRepository";
import {AnimalRepository} from "../../modules/registerData/repositories/implementations/AnimalRepository"
import {IUsersRepository} from "../../modules/accounts/repositories/IUsersRepository"
import {UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository"
import { IUsersTokensRepository } from "src/modules/accounts/repositories/implementations/IUsersTokensRepository";
import { UsersTokensRepository } from "../../../src/modules/accounts/repositories/implementations/UsersTokenRepository";
import "./providers/index";
import { OwnerRepository } from "src/modules/registerData/repositories/implementations/OwnerRepository";


container.registerSingleton<IOwnerRepository>(
  "OwnerRepository",
  OwnerRepository
);

container.registerSingleton<IAnimalRepository>(
  "AnimalRepository",
  AnimalRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

