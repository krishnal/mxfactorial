import React from 'react';
import { spy } from 'sinon';
import 'should-sinon';
import { unmountComponentAtNode, findDOMNode } from 'react-dom';
import { Simulate, renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-addons-test-utils';

import ActionsSection from 'components/Transaction/ActionsSection';


describe('ActionsSection component', () => {
  let instance;
  const handleTransact = spy();

  afterEach(() => {
    instance && unmountComponentAtNode(findDOMNode(instance).parentNode);
  });

  it('click on btn__transact should handleTransact', () => {
    instance = renderIntoDocument(<ActionsSection handleTransact={ handleTransact }/>);
    const btnTransact = findRenderedDOMComponentWithClass (instance, 'btn__transact');
    Simulate.click(btnTransact);
    handleTransact.should.be.calledOnce();
  });

});
