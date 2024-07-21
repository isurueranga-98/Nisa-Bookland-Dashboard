export default class AppError extends Error {
  constructor(
    message: string, // this is a gneric message that describes the error
    public scope: "database" | "action" | "unknown", // this is the scope of the error
    public detail?: string // this is a detailed message that describes the error
  ) {
    super(message);
    this.scope = scope;
  }
}
