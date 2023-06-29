import Greet from "./Greet";
import { render, screen } from "@testing-library/react";


describe('Greet', () => {

    it('Render Component Text', () => {
        render(<Greet />);
    
        const getText = screen.getByText('Greet')
        expect(getText).toBeInTheDocument()
    });

})
