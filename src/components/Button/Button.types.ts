import { MarkOptional } from 'ts-essentials'
import {
    ComponentProps,
    ComponentStyles,
    ComponentTheme,
    UUIThemeConfig,
} from '../../types'
import type { UUIColor, DefaultProps } from '../../types/base'

export type UUIButtonVariant =
    UUIThemeConfig['components']['button']['variants']

export type UUIButtonSize = UUIThemeConfig['components']['button']['sizes']

export type ButtonBlock = boolean
export type ButtonDisabled = boolean
export type ButtonLoading = boolean

export interface ButtonProps extends DefaultProps {
    variant?: UUIButtonVariant
    size?: UUIButtonSize
    color?: UUIColor
    block?: ButtonBlock
    disabled?: ButtonDisabled
    loading?: ButtonLoading
    leftIcon?: React.ReactElement
    rightIcon?: React.ReactElement
    loader?: React.ReactElement
    loadingText?: string
    loaderPlacement?: 'left' | 'right'
}

export type ButtonStyles = ComponentStyles<UUIButtonSize, UUIButtonVariant> & {
    base?: {
        block?: string
    }
}

export type ButtonTheme = ComponentTheme<
    ButtonProps,
    ButtonStyles,
    UUIButtonSize,
    UUIButtonVariant
>

export type DefaultComponentTheme<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends ComponentTheme<any, any, any, any>,
    O extends keyof Required<T>['defaultProps']
> = {
    defaultProps: MarkOptional<Required<Required<T>['defaultProps']>, O>
    styles: T['styles']
}

export type DefaultButtonTheme = DefaultComponentTheme<
    ButtonTheme,
    'leftIcon' | 'rightIcon' | 'loadingText'
>

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, ButtonProps>
) => React.ReactElement | null
