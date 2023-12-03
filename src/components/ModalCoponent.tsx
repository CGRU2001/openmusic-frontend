import { ModalComponentInterface } from "@/lib/interfaces/components.interfaces"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { FaChevronRight } from "react-icons/fa"
import { IoCloseOutline } from "react-icons/io5"

const ModalComponent: React.FC<ModalComponentInterface> = ({ show, handleClose, title, content, onSubmit, onChange }) => {

    const checkRequireds = () => content?.some(input => input.required && !input?.value)

    return (
        <Modal
            isOpen={show}
            onClose={handleClose}
            backdrop="blur"
            closeButton={<div className="m-4"><span className="text-[25px]"><IoCloseOutline /></span></div>}
        >
            <form >
                <ModalContent >
                    <ModalHeader className="flex flex-row items-center gap-2">
                        {title}
                    </ModalHeader>
                    {
                        !!content?.length &&

                        <ModalBody className="px-5">

                            {
                                content.map((input, index) => {

                                    const uuid = crypto.randomUUID()

                                    return (
                                        <div
                                            key={index}
                                        >
                                            <label htmlFor={uuid}>
                                                {input.label}
                                                {!!input?.required && <span className="text-danger">*</span>}
                                            </label>
                                            <Input
                                                className="mt-1"
                                                type={input?.type as string || "text"}
                                                value={input?.value as string}
                                                placeholder={input?.placeholder}
                                                name={input.name}
                                                id={uuid}
                                                onChange={onChange}
                                            />
                                        </div>
                                    )
                                })
                            }

                        </ModalBody>
                    }
                    
                    <ModalFooter>
                        <Button
                            color="primary"
                            type="submit"
                            {...!!content && { isDisabled: checkRequireds() }}
                        >
                            Search
                            <FaChevronRight />
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default ModalComponent