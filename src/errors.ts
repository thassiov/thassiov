type ErrorOpts = {
  details?: Record<string, unknown>;
  cause?: Error;
};

export class CustomError extends Error {
  details?: Record<string, unknown>;
  cause?: Error;

  constructor(message: string, opts?: ErrorOpts) {
    super(message);
    this.name = 'CustomError';

    if (opts) {
      if (opts.details) {
        this.details = opts.details;
      }

      if (opts.cause) {
        this.cause = opts.cause;
      }
    }
  }
}

export class ImageEditorError extends CustomError {
  name = 'ImageEditorError';
}

export class GHAPICallError extends CustomError {
  name = 'GHAPICallError';
}
