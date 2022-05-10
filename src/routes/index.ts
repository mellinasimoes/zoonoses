import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { animalRoutes } from "./animal.routes";
import { ownerRoutes } from "./owner.routes";
import { usersRoutes } from "./users.routes";

const router = Router ();

router.use("/owner", ownerRoutes);
router.use("/animal", animalRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
