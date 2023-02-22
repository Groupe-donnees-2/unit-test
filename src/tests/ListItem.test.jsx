import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ListItem } from "../ListItem";

const mockOnCheck = jest.fn();

describe('ListItem', () => {
    it('display value correctly', () => {
        const { getByText } = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByText('Lorem ipsum dolor sit amet consectetur');
        expect(value).toBeInTheDocument();
    });
    
    it('checkbox is shown', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByTestId('test-list-item-1');
        expect(value).toBeInTheDocument();
    });

    it('checkbox is hidden', () => {
        const { getByTestId, debug } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        expect(node.children).toHaveLength(1);
    });
    
    it('callback is called', () => {
        const { getByTestId } = render(
          <ListItem
            id='list-item-1'
            checkable={true}
            onCheck={mockOnCheck}
            item='Lorem ipsum dolor sit amet consectetur'
          />
        );
    
        const checkbox = getByTestId('test-list-item-1');
        fireEvent.click(checkbox);
        expect(mockOnCheck).toHaveBeenCalled();
      });
    
      it('callback is not called when not checkable', () => {
        const { getByTestId } = render(
          <ListItem
            id='list-item-1'
            checkable={false}
            onCheck={mockOnCheck}
            item='Lorem ipsum dolor sit amet consectetur'
          />
        );
        expect(mockOnCheck).toHaveBeenCalledTimes(1)
      });
    
      it('matches saved snapshot', () => {
        const tree = render(
          <ListItem
            id='list-item-test'
            checkable={true}
            onCheck={mockOnCheck}
            item='Lorem ipsum dolor sit amet consectetur'
          />
        );
        expect(tree).toMatchSnapshot();
      });
});