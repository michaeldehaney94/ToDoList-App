import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ListTodos from './ListTodos';

it("RenderDeleteButton", () => {
    const { queryByTitle } = render(<ListTodos />);
    const btn = queryByTitle("deleteBtn");
    expect(btn).toBeTruthy();
   
})

describe("Remove Item", () => {
    it("onClick", () => {
        const { queryByTitle } = render(<ListTodos />);
        const btn = queryByTitle("deleteBtn");
        expect(btn.innerHTML).toBeTruthy();
        fireEvent.click(btn);
        expect(btn.innerHTML).toBeTruthy(deleteTodo(todo.id));
    })

})
