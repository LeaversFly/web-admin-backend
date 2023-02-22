import { Express } from 'express'
import routes from '../routes';

const bootstrap = (app: Express) => {
    app.listen(8000, () => {
        console.log('App is running at http://localhost:8000');
        routes(app)
    })
}

export default bootstrap