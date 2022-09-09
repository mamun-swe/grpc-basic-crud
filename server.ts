import process from "process";
import cluster from "cluster";
import { cpus } from "os";
import * as grpc from "@grpc/grpc-js";
const notesProto = grpc.load("./protos/books.proto")


const numCPUs = cpus().length;
const port: any = process.env.APP_PORT || 5001;

if (cluster.isMaster) {
  console.log(`Primary ${process.pid} is running`);

  /* Fork workers. */
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  /* Start gRPC server to specific PORT */
  const server = new grpc.Server();
  server.bindAsync(
    `localhost:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        throw err;
      }
      console.log(`Listening on http://localhost:${port}`);
      server.start();
    }
  );
}
