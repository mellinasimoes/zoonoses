import { Router } from "express";
import { ensureAuthenticated } from "../middlerwares/ensureAuthenticated";
import { FindAnimalByOwnerIdController } from "../modules/registerData/AnimalUseCases/findAnimalByOwnerId/FindAnimalByOwnerIdController";
import { ListAllAnimalsAndOrderByAnimalsNameController } from "../modules/registerData/AnimalUseCases/listAllAnimalAndOrderByAnimalsName/ListAllAnimalAndOrderByAnimalsNameController";
import { ListAnimalsBetweenBirthYearController } from "../modules/registerData/AnimalUseCases/listAnimalsBetweenBirthYear/ListAnimalsBetweenBirthYearController";
import { CreateAnimalController } from "../modules/registerData/AnimalUseCases/createAnimal/CreateAnimalController";

const animalRoutes = Router();

const createAnimalController = new CreateAnimalController();
const findAnimalByOwnerIdController = new FindAnimalByOwnerIdController();
const listAllAnimalsAndOrderByAnimalsNameController = new ListAllAnimalsAndOrderByAnimalsNameController();
const listAnimalsBetweenBirthYearController = new ListAnimalsBetweenBirthYearController();

animalRoutes.use(ensureAuthenticated);

animalRoutes.post("/", createAnimalController.handle);

animalRoutes.get("/findanimalownerid", findAnimalByOwnerIdController.handle);

animalRoutes.get("/listallanimalsandorderbyanimalsname", listAllAnimalsAndOrderByAnimalsNameController.handle);

animalRoutes.get("/listanimalsbetweenbirthyear", listAnimalsBetweenBirthYearController.handle);

export { animalRoutes };
