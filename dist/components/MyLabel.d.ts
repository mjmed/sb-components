/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Mensaje a monstrar en la etiqueta
     */
    label: string;
    /**
     * Tamaños permitidos para la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitaliza todo el texto
     */
    allCaps?: boolean;
    /**
     * Colores básicos para el texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado para el texto
     */
    fontColor?: string;
    /**
     * Color personalizado para el fondo de la etiqueta
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
