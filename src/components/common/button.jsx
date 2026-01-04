import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { constClassName } from "../../constants/constants"

export const OutlineButton = ({ children, onClick, className = constClassName.outlineButton }) => {
    return (
        <Button
            variant="outline"
            size={'sm'}
            onClick={onClick}
            className={cn("items-center gap-2", className)} >
            {children}
        </Button>

    )
}
export const PrimaryButton = ({ children, onClick, className = constClassName.primaryButton }) => {
    return (
        <Button onClick={onClick} size={'sm'} className={cn("items-center gap-2", className)}>
            {children}
        </Button>

    )
}