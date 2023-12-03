import { Button } from "@nextui-org/react"
import { FaUser } from "react-icons/fa"
import PopoverComponent from "./PopoverComponent"

const LoginComponent: React.FC = () => {
    return (
        <>
            <PopoverComponent
                parent={
                    <Button
                        color="danger"
                        variant="solid"
                    >
                        <FaUser />
                        <span>Log In</span>
                    </Button>
                }
            >
                <div className="mx-5 my-2">
                    
                </div>
            </PopoverComponent>
        </>
    )
}


export default LoginComponent