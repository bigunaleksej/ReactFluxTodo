import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import TodoList from '../../src/Components/TodoListComponent';

function setup(customProps) {
    const props = Object.assign({
        todo: [{}],
        actions: {
            toggleCompleteAll: expect.createSpy()
        }
    }, customProps);

    const { TestUtils } = React.addons;
    const renderer = TestUtils.createRenderer();
    renderer.render(<TodoList {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props: props,
        output: output,
        renderer: renderer
    };
}

describe('components', () => {
    jsdomReact();

    describe('TodoList', () => {
        it('should render correctly', () => {
            const { output } = setup();
            const [input, list] = output.props.children;
            
            expect(input.type).toBe('input');
            expect(input.props.id).toBe('toggle-all');

            expect(list.type).toBe('ul');
            expect(list.props.id).toBe('todo-list');
        });

        it('should call swich all items complete states correctly', () => {
            const { output, props } = setup({todo: [{completed: true}]});
            const checkbox = output.props.children[0].props;

            expect(checkbox.id).toBe('toggle-all');
            expect(checkbox.type).toBe('checkbox');
            checkbox.onChange();
            expect(props.actions.toggleCompleteAll.calls.length).toBe(1);
        });

    });
});