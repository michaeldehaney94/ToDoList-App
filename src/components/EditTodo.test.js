import { render, fireEvent } from '@testing-library/react';
import EditTodo from './EditTodo';

it("RenderEditButton", () => {
    const { queryByTitle } = render(<EditTodo />);
    const btn = queryByTitle("editBtn");
    expect(btn).toBeTruthy();
})

describe("Edit Item", () => {
    it("onChange", () => {
        const { queryByTitle } = render(<InputTodos />);
        const btn = queryByTitle("editBtn");
        expect(btn.innerHTML).toBeTruthy();
        fireEvent.change(btn, {target: { value: setDescription(e.target.value) } });
        expect(btn.innerHTML).toBeTruthy(setDescription(e.target.value));
    })

})