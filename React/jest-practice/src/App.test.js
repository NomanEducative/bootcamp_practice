import { render, screen } from '@testing-library/react';
import Login from './App';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter()})

describe('Matching Snapshots',()=>{
  it('Matches Snapshot',()=>{
    const tree=renderer.create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('App',()=>{
  it('Renders Without Crashing and All Labels Check',()=>{
    const wrapper=shallow(<Login/>);
    const login=wrapper.find('h2.firstHeading').text();
    expect(login).toEqual("Login Form");
    const email=wrapper.find('input#email').text();
    expect(email).toEqual("");
    const password=wrapper.find('input#password').text();
    expect(password).toEqual("");
  })

  it('Check change in Input Field Value',()=>{
    const wrapper=shallow(<Login/>);
    const firstField=wrapper.find('input#email');
    firstField.simulate('change',{ target: { value: 'Hello' } })
    const emailFromField=firstField.text();
    const stateEmail=wrapper.state().email;
    expect(stateEmail).toEqual(emailFromField)
    const secondField=wrapper.find('input#password');
    secondField.simulate('change')
    const passwordFromField=firstField.text();
    const statePassword=wrapper.state().email;
    expect(statePassword).toEqual(passwordFromField)
  })

  it('Check For Buttons Click',()=>{
    const wrapper=shallow(<Login/>);
    const button=wrapper.find('button');
    button.simulate('click');
    expect(wrapper.state().loginMessage).toEqual("You're now logged into the account " + wrapper.state().email + "!")
    
  })
})


