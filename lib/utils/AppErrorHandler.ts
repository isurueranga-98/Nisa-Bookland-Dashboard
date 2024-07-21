import { Prisma } from "@prisma/client";
import AppError from "@/lib/utils/AppError";

const appErrorHandler = (error: unknown) => {
  if (error instanceof Error) {
    // log the error message when ERROR_LOGGING is true
    if (process.env["ERROR_LOGGING"]) console.log(error.message);

    // handle prisma client related errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        // unique constraint error
        throw new AppError(`${error.meta?.modelName} alrady exist`, "database");
      }
    }

    // handle unspecified errors
    throw new AppError("An error occured", "unknown");
  } else {
    // log the error message when ERROR_LOGGING is true
    if (process.env["ERROR_LOGGING"])
      console.log("this error is not instance of the Error");

    // handle unspecified errors
    throw new AppError("An error occured", "unknown");
  }
};

export default appErrorHandler;
