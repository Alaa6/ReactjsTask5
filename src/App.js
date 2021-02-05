import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import StudentDetails from './containers/studentDetails'
import NotFound from './components/notFound'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
import Header from './containers/header'

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)

const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div className="conatainer">
                    <div className="row">
                    <div className="col">
                      <Header></Header>

                    </div>

                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/student/:id" component={StudentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App

