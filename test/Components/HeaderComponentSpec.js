import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import Header from '../../src/Components/HeaderComponent';
import TodoInput from '../../src/Components/TodoInputComponent';

function setup() {
    const props = {
        addTodo: expect.createSpy()
    };

    const { TestUtils } = React.addons;
    const renderer = TestUtils.createRenderer();
    renderer.render(<Header {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props: props,
        output: output,
        renderer: renderer
    };
}

describe('components', () => {
    jsdomReact();

    describe('Header', () => {
        it('should render correctly', () => {
            const { output } = setup();
            const [h1, input] = output.props.children;

            expect(output.type).toBe('header');
            expect(h1.type).toBe('h1');
            expect(h1.props.children).toBe('todos');
            expect(input.type).toBe(TodoInput);
            expect(input.props.id).toBe('new-todo');
            expect(input.props.placeholder).toBe('What needs to be done?');
        });

        it('should call call addTodo if length of text is greater than 0', () => {
            const { output, props } = setup();
            const input = output.props.children[1];
            input.props.onSave('');
            expect(props.addTodo.calls.length).toBe(0);
            input.props.onSave('Task1');
            expect(props.addTodo.calls.length).toBe(1);
        });
    });
});