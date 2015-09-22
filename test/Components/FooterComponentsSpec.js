import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import Footer from '../../src/Components/FooterComponent';

function setup(customProps) {
    const props = Object.assign({
        todo: [{}],
        actions: {
            destroyCompleted: expect.createSpy()
        }
    }, customProps);

    const { TestUtils } = React.addons;
    const renderer = TestUtils.createRenderer();
    renderer.render(<Footer {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props: props,
        output: output,
        renderer: renderer
    };
}

describe('components', () => {
    jsdomReact();

    describe('Footer', () => {
        it('should render correctly', () => {
            const { output } = setup();

            expect(output.type).toBe('footer');
        });

        it('should render correctly for 1 item', () => {
            const { output } = setup();

            expect(output.props.
                    children[0].props.
                    children.props.
                    children[1]).toBe('1 item left');
        });

        it('should render correctly for 1 item', () => {
            const { output } = setup({
                todo: [{}, {}, {}]
            });

            expect(output.props.
                children[0].props.
                children.props.
                children[1]).toBe('3 items left');
        });

        it('should render clearCompletedButton correctly', () => {
            const { output } = setup({
                todo: [{completed: true}, {completed: false}]
            });
            const [span, button] = output.props.children;

            expect(button.type).toBe('button');
        });
        it('should call call destroyCompleted on click', () => {
            const { output, props } = setup({todo: [{completed: true}]});
            const button = output.props.children[1];

            button.props.onClick();
            expect(props.actions.destroyCompleted.calls.length).toBe(1);
        });
    });
});