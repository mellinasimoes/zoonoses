import { Router } from "express";
import { ensureAuthenticated } from "../middlerwares/ensureAuthenticated";
import { CreateOwnerController } from "src/modules/registerData/ownerUseCases/createOwner/CreateOwnerController";
import { ListOwnerByNameController } from "src/modules/registerData/ownerUseCases/listOwnerByName/ListOwnerBynameController";
import { ListOwnerController } from "src/modules/registerData/ownerUseCases/listAllOwner/ListAllOwnerController";
import { ListOwnerByCPFController } from "src/modules/registerData/ownerUseCases/listOwnerByCPF/ListOwnerByCPFController";

const ownerRoutes = Router(); 

const createOwnerController= new CreateOwnerController();
const listOwnerByNameController= new ListOwnerByNameController();
const listOwnerByCPFController= new ListOwnerByCPFController();
const listOwnerController= new ListOwnerController();

ownerRoutes.use(ensureAuthenticated); 

ownerRoutes.post ("/", createOwnerController.handle);

ownerRoutes.get ("/listownerbyname", listOwnerByNameController.handle);

ownerRoutes.get ("/listownerbycpf", listOwnerByCPFController.handle);

ownerRoutes.get ("/listall", listOwnerController.handle);

export { ownerRoutes };
