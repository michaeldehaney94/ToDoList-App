import { render, fireEvent } from '@testing-library/react';
import InputTodo from './InputTodo';

it("RenderAddButton", () => {
    const { queryByTitle } = render(<InputTodo />);
    const btn = queryByTitle("addBtn");
    expect(btn).toBeTruthy();
})

describe("Add Item", () => {
    it("onChange", () => {
        const { queryByTitle } = render(<InputTodos />);
        const btn = queryByTitle("addBtn");
        expect(btn.innerHTML).toBeTruthy();
        fireEvent.change(btn, {target: { value: setDescription(e.target.value) } });
        expect(btn.innerHTML).toBeTruthy(setDescription(e.target.value));
    })

})