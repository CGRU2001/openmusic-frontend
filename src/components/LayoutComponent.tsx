import { LayoutComponentInterface } from "@/lib/interfaces/components.interfaces";
import Head from "next/head";
import HeaderComponent from "./HeaderComponent";

const LayoutComponent: React.FC<LayoutComponentInterface> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Openmusic</title>
            </Head>
            <HeaderComponent />
            <main className="container mx-auto">
                {children}
            </main>
        </>
    )
}

export default LayoutComponent