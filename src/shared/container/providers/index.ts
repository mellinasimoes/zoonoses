import { container } from "tsyringe";
import { IDateProvider } from "./implementations/IDateProvider";
import { DayjsDateProvider } from "./implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

