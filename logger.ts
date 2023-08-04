// se implementa el patron singleton para la clase Logger, 
//asi con ayuda este patron garantiza que solo haya una instancia de la clase.

class Logger {
  private static instance: Logger;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }
  // getInstance funcionara para verificar si ya existe una instancia de Logger, si no existe creara una nueva instancia y la devuelve,
  // si ya existe devuelve la instancia existente
  public static getInstance(): Logger {
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

export default Logger;
