import { hashHistory } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

const routingStore = new RouterStore();
syncHistoryWithStore(hashHistory, routingStore);

class RootStore {
  routing = routingStore
}

export default RootStore;
