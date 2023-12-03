import { ChangeEvent, FormEventHandler, ReactElement, ReactNode } from "react";
import { InputTypes, PopoverPlacementType, VariantType } from "../types/components.types";
import { ModalComponentContentInterface } from "./miscelaneous.interfaces";
import { AlbumEntityInterface, SongEntityInterface } from "./server.interfaces";

export interface LayoutComponentInterface {
    children: ReactElement
}

export interface HeaderComponentInterface {

}

export interface InputComponentInterface {
    label: string
    required?: boolean
    type?: InputTypes
}

export interface ModalComponentInterface {
    show: boolean
    handleClose: () => void
    title: string | ReactElement
    content?: ModalComponentContentInterface[]
    onSubmit?: (evt: FormEventHandler<HTMLFormElement>) => void
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void
}

export interface AlbumCardComponentInterface {
    album: AlbumEntityInterface
    onClick: (evt: { song: SongEntityInterface }) => void
}

export interface SongCardComponentInterface {
    song: SongEntityInterface
    onClick: (evt: { song: SongEntityInterface }) => void
}

export interface PopoverComponentInterface {
    parent: ReactNode
    children: ReactNode;
    variant?: VariantType
    placement?: PopoverPlacementType
}