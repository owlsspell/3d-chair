import { createContext } from "react";

export const defaultColors = {
    arm: null,
    apron: null,
    seat: null,
    legs: null,
    pillow: null,
}
export const ColorContext = createContext(defaultColors);