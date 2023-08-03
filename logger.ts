export class Logger {
  private static instance: Logger;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }

  public static getInstance(): Logger {
    // Hacemos la verificación de la instancia y si es así retornarla.
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    this.logs.push(message);
  }

  public printLogs(): void {
    console.log("Logs:");
    for (const log of this.logs) {
      console.log(log);
    }
  }
}