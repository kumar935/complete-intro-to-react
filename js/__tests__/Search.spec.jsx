import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; // have to remove renderer import ^
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';


/*
test('Search renders correctly', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
*/

// without using enzyme ^
// below with using enzyme

test('Search renders correctly', () => {
  const component = shallow(<Search/>);
  expect(component).toMatchSnapshot();
})


test('Search should render correct amount of shows', () => {
  
  const component = shallow(<Search/>);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  
})


test('Search should render correct amount of shows based on search term', () => {
  
  const searchWord = 'black';
  const component = shallow(<Search/>);
  component.find('input').simulate('change', {target: {value:searchWord}});
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
  
})


/*
GOTTA add this:
  "env": {
    "test": {
      "plugins": [
        "transform-es20150-modules-commonjs"
      ]
    }
  }
  inside babelrc, because node doesn't understand import and jsx

*/