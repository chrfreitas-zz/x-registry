import React from 'react';
import Label from './Label';
//import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('Label basic test', () => {

    const component = renderer.create(
        <Label name="Hi!" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
