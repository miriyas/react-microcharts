import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Microcharts } from '../src/Microcharts';

describe('Microcharts', () => {
    it('does not throw without any parameters', () => {
        expect(() => <Microcharts />).to.not.throw;
    });

    it('renders nothing when passed no data', () => {
        const wrapper = shallow(<Microcharts />);
        expect(wrapper.find('svg')).to.have.length(0);
    });

    it('is rendered as svg', () => {
        const wrapper = shallow(<Microcharts data={[1]} />);
        expect(wrapper.find('svg')).to.have.length(1);
    });
});
