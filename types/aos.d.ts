declare module "aos" {
    interface AOSOptions {
      duration?: number;
      easing?: string;
      once?: boolean;
      delay?: number;
      offset?: number;
    }
  
    export function init(options?: AOSOptions): void;
  }
  