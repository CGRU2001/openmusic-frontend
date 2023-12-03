import useToggle from "@/hooks/useToggle"
import { ModalComponentContentInterface } from "@/lib/interfaces/miscelaneous.interfaces"
import { Button } from "@nextui-org/react"
import { ChangeEvent, useMemo, useState } from "react"
import { FaSearch } from "react-icons/fa"
import ModalComponent from "./ModalCoponent"

const DEFAULT_SEARCH = {
    search: ""
}

const SearchComponent: React.FC = () => {

    const [search, setSearch] = useState(DEFAULT_SEARCH)
    const [showSearch, { toggle: toggleSearch }] = useToggle()

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setSearch(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const searchContent: ModalComponentContentInterface[] = useMemo(() => ([{
        name: "search",
        type: "text",
        placeholder: "The fat of the land",
        value: search.search,
        label: "Enter a song, album, playlist...",
        required: true
    }]), [search])



    return (
        <>
            <Button
                color="default"
                variant="solid"
                onClick={toggleSearch}
            >
                <FaSearch />
                <span>Search...</span>
            </Button>
            <ModalComponent
                title={<>
                    <FaSearch />
                    <span>Search...</span>
                </>}
                content={searchContent}
                show={showSearch}
                handleClose={toggleSearch}
                onChange={handleChange}
            />
        </>
    )

}


export default SearchComponent