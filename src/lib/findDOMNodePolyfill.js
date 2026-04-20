import ReactDOM from 'react-dom';

if (typeof ReactDOM.findDOMNode !== 'function') {
  ReactDOM.findDOMNode = (instance) => {
    if (instance == null) return null;
    if (instance instanceof Element) return instance;
    const fiber = instance._reactInternals || instance._reactInternalFiber;
    if (!fiber) return null;
    let node = fiber;
    while (node) {
      if (node.stateNode instanceof Element) return node.stateNode;
      node = node.child;
    }
    return null;
  };
}
