import { all } from 'redux-saga/effects';
import{ watchersaga} from './TestFile/OurSaga'

export default function* rootsaga(){
    yield all( [...watchersaga] )
}