import React, { forwardRef } from 'react'
import { ButtonProps } from './Button.types'
import {
    Component,
    ComponentProps,
    PolymorphicRef,
} from '../../types/polymorphic'
import { useTheme } from '../../theme'
import { generateClassName } from '../../utils/generate-class-name'

export const Button: Component = forwardRef(
    <C extends React.ElementType = 'button'>(
        _: ComponentProps<C, ButtonProps>,
        ref?: PolymorphicRef<C>
    ) => {
        // 1. Initialization
        const {
            defaultProps,
            styles: { base, variants, sizes },
        } = useTheme().button
        const props = { ...defaultProps, ..._ }

        // 2. Props
        const {
            as,
            variant,
            size,
            color,
            block,
            disabled,
            loading,
            unstyled,
            children,
            className,
            type = as === 'button' ? as : undefined,
            ...rest
        } = props

        // 3. styles
        const buttonBase = base.initial
        const buttonBlock = block && base.block
        const buttonVariant = variants[variant][color]
        const buttonSize = sizes[size]
        const classes = generateClassName(
            className,
            buttonBase,
            buttonBlock,
            buttonVariant,
            buttonSize
        )(unstyled)

        // 4. Render
        const attrs = { ...rest, disabled, type }
        const Component = as as React.ElementType
        return (
            <Component ref={ref} className={classes} {...attrs}>
                {children}
            </Component>
        )
    }
)
