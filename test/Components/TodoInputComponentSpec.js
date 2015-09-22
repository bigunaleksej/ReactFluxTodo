import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import TodoInput from '../../src/Components/TodoInputComponent';

function setup() {
    const props = {
        onSave: expect.createSpy(),
        id: 'new-todo',
        placeholder: 'What needs to be done?',
    };

    const { TestUtils } = React.addons;
    const renderer = TestUtils.createRenderer();
    renderer.render(<TodoInput {...props} />);
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
            expect(output.props.placeholder).toEqual('What needs to be done?');
            expect(output.props.id).toEqual('new-todo');
        });

        it('should update value on change', () => {
            const { output, renderer } = setup();
            output.props.onChange({target: {value: 'test2'}});
            const updatedOutput = renderer.getRenderOutput();
            expect(updatedOutput.props.value).toEqual('test2');
        });

        it('should save value on press Enter', () => {
            const ENTER_KEY_CODE = 13;
            const NOT_ENTER_KEY_CODE = 14;
            const { output, props } = setup();

            output.props.onKeyDown({keyCode: NOT_ENTER_KEY_CODE});
            expect(props.onSave.calls.length).toBe(0);
            output.props.onKeyDown({keyCode: ENTER_KEY_CODE});
            expect(props.onSave.calls.length).toBe(1);
        });

        it('should reset value after save', () => {
            const { output, renderer } = setup();
            output.props.onBlur();
            const updatedOutput = renderer.getRenderOutput();
            expect(updatedOutput.props.value).toEqual('');
        });

    });
});