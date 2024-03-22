const ERROR_TEXT = "Not implemented Error";

export class NotImplementedError extends Error{
  constructor() {
    super(ERROR_TEXT);
  }
}
