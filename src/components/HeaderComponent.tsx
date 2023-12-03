import { DEFAULT_FRONT_END_URL } from "@/lib/constants";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import { HeaderComponentInterface } from "@/lib/interfaces/components.interfaces";
import LoginComponent from "./LoginComponent";


const HeaderComponent: React.FC<HeaderComponentInterface> = () => {
    return (

        <Navbar
            className="py-4 sticky"
            isBlurred
            shouldHideOnScroll
            isBordered
        >
            <NavbarBrand
            >
                <Link href={DEFAULT_FRONT_END_URL}>
                    <img
                        src={`${DEFAULT_FRONT_END_URL}/openmusic.png`}
                        alt="openmusic"
                        width="125px"
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    <SearchComponent />
                </NavbarItem>
                <NavbarItem>
                    <LoginComponent />
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}


export default HeaderComponent