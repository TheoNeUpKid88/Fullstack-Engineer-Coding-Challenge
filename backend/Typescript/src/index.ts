import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * from './lib/model.js';

const app = express();

const PORT = 23456;

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

if (!PORT) {
    process.exit(1);
}

/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

server.on('error', (err: any) => {
    console.log(JSON.stringify(err, null, 4));
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

app.get('/encode', (req, res) => {
    res.send('simple test!');
});
app.post('/encode', (req, res) => {
    
});
