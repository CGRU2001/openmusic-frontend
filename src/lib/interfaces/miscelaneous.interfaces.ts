import { InputTypes } from "../types/components.types";

export interface ModalComponentContentInterface {
    name: string,
    type?: InputTypes,
    placeholder?: string,
    value?: string | number,
    label: string,
    required?: boolean
}