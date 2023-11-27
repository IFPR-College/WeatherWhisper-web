import styled from 'styled-components'

const Content = styled.div`
    display: ${(props: any) => props.display ?? 'flex'};
    justify-content: ${(props: any) => props.justifyContent ?? 'unset'};
    align-items: ${(props: any) => props.alignItems ?? 'unset'};
    align-content: ${(props: any) => props.alignContent ?? 'unset'};
    align-self: ${(props: any) => props.alignSelf ?? 'unset'};
    flex-direction: ${(props: any) => props.direction ?? 'unset'};
    flex-wrap: ${(props: any) => props.wrap ?? 'unset'};
    flex-grow: ${(props: any) => props.grow ?? 'unset'};
    flex-shrink: ${(props: any) => props.shrink ?? 'unset'};
    flex-basis: ${(props: any) => props.basis ?? 'unset'};
    width: ${(props: any) => props.width ?? 'unset'};
    min-width: ${(props: any) => props.minWidth ?? 'unset'};
    max-width: ${(props: any) => props.maxWidth ?? 'unset'};
    height: ${(props: any) => props.height ?? 'unset'};
    min-height: ${(props: any) => props.minHeight ?? 'unset'};
    max-height: ${(props: any) => props.maxHeight ?? 'unset'};
    padding: ${(props: any) => props.padding ?? 'unset'};
    margin: ${(props: any) => props.margin ?? 'unset'};
    overflow: ${(props: any) => props.overflow ?? 'unset'};
    background-color: ${(props: any) => props.color ?? 'unset'};
    position: ${(props: any) => props.position ?? 'unset'};
`

export { Content }
