import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import { Shop } from "../Shop"
import { useState } from "react";


const data = [{
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120
  }
}];
const setData = vi.fn();

const cart = [];
const postCart = [{
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

const setCart = vi.fn();

describe("Shop", () => {
    test("items quantity increments correctly", async () => {
        const user = userEvent.setup()
        
    render(
        <MemoryRouter>
            <Routes>
                <Route
                    element={
                    <Outlet context={[data, setData, cart, setCart]} />
                    }
                >
                    <Route path="/" element={<Shop />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

        await user.click(screen.getByRole("button", {name: /increment/i}))
        expect(screen.getByRole("textbox", {name: ""})).toHaveValue("2");
        
    })

    test("items quantity decrements correctly", async () => {
        const user = userEvent.setup()
        
    render(
        <MemoryRouter>
            <Routes>
                <Route
                    element={
                    <Outlet context={[data, setData, cart, setCart]} />
                    }
                >
                    <Route path="/" element={<Shop />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

        await user.click(screen.getByRole("button", {name: /decrement/i}))
        expect(screen.getByRole("textbox", {name: ""})).toHaveValue("1");
        
    })

    test("cart counts item correctly", async () => {
        const user = userEvent.setup()
        
    render(
        <MemoryRouter>
            <Routes>
                <Route
                    element={
                    <Outlet context={[data, setData, cart, setCart]} />
                    }
                >
                    <Route path="/" element={<Shop />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )
        await user.click(screen.getByRole("button", {name: /addToCartBtn/i}))
        const updater = setCart.mock.calls[0][0];

        expect(updater([])).toEqual([postCart[0]]);
    })
})

