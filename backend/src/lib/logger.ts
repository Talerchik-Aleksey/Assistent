import bunyan from "bunyan"

export const log = bunyan.createLogger({
  name: "myapp",
  streams: [
    {
      level: "info",
      stream: process.stdout, // log INFO and above to stdout
    },
    {
      level: "error",
      path: "/var/tmp/myapp-error.log", // log ERROR and above to a file
    },
  ],
})
