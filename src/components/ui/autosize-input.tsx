// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef, type ChangeEvent, type CSSProperties, type FC } from 'react';

interface AutosizeInputProps {
    className?: string;
    defaultValue?: string;
    extraWidth?: number | string;
    id?: string;
    injectStyles?: boolean;
    inputClassName?: string;
    inputRef?: (el: HTMLInputElement | null) => void;
    inputStyle?: CSSProperties;
    minWidth?: number | string;
    onAutosize?: (newWidth: number) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    placeholderIsMinWidth?: boolean;
    style?: CSSProperties;
    value?: string;
}

const sizerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'hidden',
    height: 0,
    overflow: 'scroll',
    whiteSpace: 'pre',
};

const INPUT_PROPS_BLACKLIST = [
    'extraWidth',
    'injectStyles',
    'inputClassName',
    'inputRef',
    'inputStyle',
    'minWidth',
    'onAutosize',
    'placeholderIsMinWidth',
];

const isIE = (typeof window !== 'undefined')
    ? /MSIE |Trident\/|Edge\//.test(window?.navigator.userAgent)
    : false;

const generateId = (): string | undefined => {
    return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

const AutosizeInput: FC<AutosizeInputProps> = (props) => {
    const [inputWidth, setInputWidth] = useState<number | string>(props.minWidth ?? 1);
    const [inputId, setInputId] = useState<string | undefined>(props.id ?? generateId());

    const inputRef = useRef<HTMLInputElement | null>(null);
    const sizerRef = useRef<HTMLDivElement | null>(null);
    const placeHolderSizerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (props.id !== inputId) {
            setInputId(props.id ?? generateId());
        }
    }, [props.id, inputId]);

    useEffect(() => {
        copyInputStyles();
        updateInputWidth();
    });

    const copyInputStyles = () => {
        if (!window?.getComputedStyle) return;
        const inputStyles = inputRef.current && window?.getComputedStyle(inputRef.current);
        if (!inputStyles) return;

        if (sizerRef.current) {
            copyStyles(inputStyles, sizerRef.current);
        }
        if (placeHolderSizerRef.current) {
            copyStyles(inputStyles, placeHolderSizerRef.current);
        }
    };

    const copyStyles = (styles: CSSStyleDeclaration, node: HTMLElement) => {
        node.style.fontSize = styles.fontSize;
        node.style.fontFamily = styles.fontFamily;
        node.style.fontWeight = styles.fontWeight;
        node.style.fontStyle = styles.fontStyle;
        node.style.letterSpacing = styles.letterSpacing;
        node.style.textTransform = styles.textTransform;
    };

    const updateInputWidth = () => {
        if (!sizerRef.current) return;

        let newInputWidth;
        if (props.placeholder && (!props.value || (props.value && props.placeholderIsMinWidth))) {
            newInputWidth = Math.max(sizerRef.current.scrollWidth, (placeHolderSizerRef.current?.scrollWidth ?? 0)) + 2;
        } else {
            newInputWidth = sizerRef.current.scrollWidth + 2;
        }

        const extraWidth = (props.type === 'number' && props.extraWidth === undefined)
            ? 16
            : parseInt(props.extraWidth as string) || 0;

        newInputWidth += extraWidth;
        if (newInputWidth < (props.minWidth as number)) {
            newInputWidth = props.minWidth as number;
        }

        if (newInputWidth !== inputWidth) {
            setInputWidth(newInputWidth);
            props.onAutosize && props.onAutosize(newInputWidth);
        }
    };

    const renderStyles = () => {
        return isIE && props.injectStyles ? (
            <style dangerouslySetInnerHTML={{
                __html: `input#${inputId}::-ms-clear {display: none;}`,
            }} />
        ) : null;
    };

    const inputProps = { ...props };
    INPUT_PROPS_BLACKLIST.forEach(field => delete inputProps[field]);
    inputProps.className = props.inputClassName;
    inputProps.id = inputId;

    const inputStyle = {
        boxSizing: 'content-box',
        width: `${inputWidth}px`,
        ...props.inputStyle,
    };

    return (
        <div className={props.className} style={props.style}>
            {renderStyles()}
            <input {...inputProps} style={inputStyle} className='bg-transparent outline-none' ref={inputRef} placeholder={props.placeholder} />
            <div ref={sizerRef} style={sizerStyle}>{(props.value ?? props.defaultValue) ?? ''}</div>
            {props.placeholder
                ? <div ref={placeHolderSizerRef} style={sizerStyle}>{props.placeholder}</div>
                : null
            }
        </div>
    );
};

export default AutosizeInput;
