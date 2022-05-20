import { Router } from "express";
import { ensureAuthenticated } from "../middlerwares/ensureAuthenticated";
import { CreateOwnerController } from "../modules/registerData/ownerUseCases/createOwner/CreateOwnerController";
import { FindOwnerByCPFController } from "../modules/registerData/ownerUseCases/findOwnerByCPF/FindOwnerByCPFController";
import { FindOwnerByNameController } from "../modules/registerData/ownerUseCases/findOwnerByName/FindlOwnerByNameController";
import { ListAllOwnerByNameController } from "../modules/registerData/ownerUseCases/listAllOwnerByName/ListAllOwnerBynameController";

const ownerRoutes = Router();

const createOwnerController = new CreateOwnerController();
const listOwnerByNameController = new ListAllOwnerByNameController();
const findOwnerByCPFController = new FindOwnerByCPFController();
const findOwnerByNameController = new FindOwnerByNameController();

ownerRoutes.use(ensureAuthenticated);

ownerRoutes.post("/", createOwnerController.handle);

ownerRoutes.get("/listownerbyname", listOwnerByNameController.handle);

ownerRoutes.get("/findownerbycpf", findOwnerByCPFController.handle);

ownerRoutes.get("/findownerbyname", findOwnerByNameController.handle);

export { ownerRoutes };
