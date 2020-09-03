import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from '../src/index';

it('App is rendered', () => {
    // Render App in the document
    const appElement: App = TestUtils.renderIntoDocument(
        <App/>
    );

    const appNode = ReactDOM.findDOMNode(appElement);

    // Verify seven movie tab content
     expect(appNode.findDOMNode('div01').findDOMNode('sevenTitle01')).toEqual('Gold Digger');

     expect(appNode.findDOMNode('div02').findDOMNode('sevenTitle02')).toEqual('Liar');

     expect(appNode.findDOMNode('div03').findDOMNode('sevenTitle03')).toEqual('Little Women: LA');

     expect(appNode.findDOMNode('div04').findDOMNode('sevenTitle04')).toEqual('My Kitchen Rules');

     expect(appNode.findDOMNode('div05').findDOMNode('sevenTitle05')).toEqual('Pooch Perfect');

     expect(appNode.findDOMNode('div06').findDOMNode('sevenTitle06')).toEqual('Revolution');

     expect(appNode.findDOMNode('div07').findDOMNode('sevenTitle07')).toEqual('Smallville');

     expect(appNode.findDOMNode('div08').findDOMNode('sevenTitle08')).toEqual('The Good Doctor');

     expect(appNode.findDOMNode('div09').findDOMNode('sevenTitle09')).toEqual('The Resident');

     expect(appNode.findDOMNode('div10').findDOMNode('sevenTitle10')).toEqual('Transformed');

});
