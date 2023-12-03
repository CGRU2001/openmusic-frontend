import useToggle from "@/hooks/useToggle"
import { Image } from "@nextui-org/react"
import PopoverComponent from "./PopoverComponent"
import { AlbumCardComponentInterface } from "@/lib/interfaces/components.interfaces"

const AlbumCardComponent: React.FC<AlbumCardComponentInterface> = ({
    onClick,
    album
}) => {


    const [showModal, { toggle: toggleModal }] = useToggle()


    return (
        <PopoverComponent

            parent={
                <div
                    className="flex flex-col w-[200px] cursor-pointer"
                    onClick={toggleModal}
                >
                    <Image
                        className="w-100"
                        src={album.image}
                        height={200}
                        isBlurred
                        shadow="lg"
                    />
                    <h3 className="font-bold text-xl mt-3">{album.name}</h3>
                    <p className="text-gray-600">{album.artist.map(artist => artist.name).join(", ")}</p>
                </div>
            }
        >
            Demo
        </PopoverComponent>
    )

}


export default AlbumCardComponent