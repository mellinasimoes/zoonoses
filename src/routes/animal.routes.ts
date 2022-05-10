import { Router } from "express";
import { ensureAuthenticated } from "../middlerwares/ensureAuthenticated";
import { FindAnimalByOwnerIdController } from "src/modules/registerData/AnimalUseCases/findAnimalByOwnerId/FindAnimalByOwnerIdController";
import { ListAllAnimalsAndOrderByAnimalsNameController } from "src/modules/registerData/AnimalUseCases/listAllAnimalAndOrderByAnimalsName/ListAllAnimalAndOrderByAnimalsNameController";
import { ListAnimalsBetweenBirthYearController } from "src/modules/registerData/AnimalUseCases/listAnimalsBetweenBirthYear/ListAnimalsBetweenBirthYearController";
import { CreateAnimalController } from "src/modules/registerData/AnimalUseCases/createAnimal/CreateAnimalController";
import { FindAnimalByOwnerNameController } from "src/modules/registerData/AnimalUseCases/findAnimalByOwnerName/FindAnimalByOwnerNameController";

const animalRoutes = Router();

const createAnimalController = new CreateAnimalController();
const findAnimalByOwnerNameController = new FindAnimalByOwnerNameController();
const findAnimalByOwnerIdController = new FindAnimalByOwnerIdController();
const listAllAnimalsAndOrderByAnimalsNameController = new ListAllAnimalsAndOrderByAnimalsNameController();
const listAnimalsBetweenBirthYearController = new ListAnimalsBetweenBirthYearController();

animalRoutes.use(ensureAuthenticated);

animalRoutes.post("/", createAnimalController.handle);

animalRoutes.get("/findanimalbyownername", findAnimalByOwnerNameController.handle);

animalRoutes.get("/findanimalownerid", findAnimalByOwnerIdController.handle);

animalRoutes.get("/listallanimalsandorderbyanimalsname", listAllAnimalsAndOrderByAnimalsNameController.handle);

animalRoutes.get("/listanimalsbetweenbirthyear", listAnimalsBetweenBirthYearController.handle);

export { animalRoutes };
