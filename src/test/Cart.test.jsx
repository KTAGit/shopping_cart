import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";


const data = [];
const setData = vi.fn();

const initialCart = [{
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  quantity: 1,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120
  }
}]

function TestWrapper() {
  const [cart, setCart] = useState(initialCart);

  return (
    <MemoryRouter initialEntries={["/cart"]}>
      <Routes>
        <Route
          element={<Outlet context={[[], vi.fn(), cart, setCart]} />}
        >
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("test Cart", () => {
    test("items quantity increments correctly", async () => {
        const user = userEvent.setup()

        render(<TestWrapper />);

        await user.click(screen.getByRole("button", { name: /increment/i }));
        expect(screen.getByText("2")).toBeInTheDocument();
    })

    test("items quantity decrements correctly", async () => {
        const user = userEvent.setup()

        render(<TestWrapper />);

        await user.click(screen.getByRole("button", { name: /decrement/i }));
        expect(screen.getByText("1")).toBeInTheDocument();
    })

})