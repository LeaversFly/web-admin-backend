import { Express } from 'express'
import routes from '../routes';
import requestHandle from './request'

const bootstrap = (app: Express) => {
    requestHandle(app)

    app.listen(8000, () => {
        console.log('App is running at http://localhost:8000');
        routes(app)
    })
}

export default bootstrap