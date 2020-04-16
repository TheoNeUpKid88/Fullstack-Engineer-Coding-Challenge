import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
const app = express();

dotenv.config({ path: `./lib/enviornment/.${process.env.NODE_ENV}.env` });
const PORT: number = parseInt(process.env.PORT as string, 10);

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

if (!PORT) {
    process.exit(1);
}

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}

app.post("/encode", (req, res) => {
    res.send("Hi!");
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
