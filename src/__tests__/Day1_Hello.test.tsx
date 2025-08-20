/**
 * Day1_Hello.test.tsx
 * Purpose: Teach testing from absolute scratch.
 * We test that Day1_Hello renders text based on props.
 *
 * -------------------- JEST SECTION --------------------
 * - describe(...) groups related test cases.
 * - test(...) (aka it(...)) defines one test case.
 * - expect(...) is the assertion API to verify results.
 *
 * -------------------- REACT TESTING LIBRARY (RTL) SECTION --------------------
 * - render(...) mounts a React component into a virtual DOM (jsdom) so we can query it.
 * - screen is the primary way to query the rendered output (getByText, getByRole, getByLabelText, etc.).
 * - The matchers like toBeInTheDocument come from '@testing-library/jest-dom'.
 */

// ---------- RTL imports (NOT Jest core) ----------
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // adds helpful matchers like toBeInTheDocument
// ---------- Component under test ----------
import Day1_Hello from '../components/Day1_Hello';


// -------------------- JEST: test suite --------------------
describe("Day1_Hello Component",()=>{
    test("enders greeting with name and age when age is provided",()=>{
        // -------------------- RTL: render component with props --------------------
        render(<Day1_Hello name="Ashok" age={60}/>);

        // -------------------- RTL: query by exact text --------------------
        // getByText throws if not found (good for strict tests)
        const text = screen.getByText("Hello, Ashok! (Age: 60)");

        // -------------------- JEST + RTL: assert using jest-dom matcher --------------------
        expect(text).toBeInTheDocument();
    })

    test("renders greeting with name only when age is not provided",()=>{
        render(<Day1_Hello name="Binodini"/>)

        // Using a more resilient query pattern with regex (case-insensitive)
        const text = screen.getByText(/Hello, Binodini!/i);
        expect(text).toBeInTheDocument();
    })

    test("allows querying by accessible name via aria-label",()=>{
        render(<Day1_Hello name="Tester"/>);

        // getByLabelText searches elements by their accessible label
        const headingByAreal = screen.getByLabelText("greeting");
        // console.log(prettyDOM(headingByAreal));
        expect(headingByAreal).toBeInTheDocument();
    })
})