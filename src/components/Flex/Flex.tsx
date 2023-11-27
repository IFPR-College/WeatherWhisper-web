import { Content } from './Flex.Style'
import { FlexProps } from './Flex.Types'

export function Flex({ children, ...props }: FlexProps) {
    return <Content {...props}>{children}</Content>
}
