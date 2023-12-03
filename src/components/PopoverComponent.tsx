import { PopoverComponentInterface } from "@/lib/interfaces/components.interfaces"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"

const PopoverComponent: React.FC<PopoverComponentInterface> = ({ parent, children, placement, variant }) => {

    return (
        <Popover
            showArrow
            {...placement && { placement }}
            {...variant && { color: variant }}
        >
            <PopoverTrigger>
                {parent}
            </PopoverTrigger>
            <PopoverContent>
                {children}
            </PopoverContent>
        </Popover>
    )

}

export default PopoverComponent