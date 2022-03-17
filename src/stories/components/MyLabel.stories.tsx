import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary']},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// Crea las páginas de la historia
// con el .bind crea una copia para no mutar el objeto
export const Basic = Template.bind({});
Basic.args = {
    allCaps: false,
    size: 'normal',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    allCaps: true,
    size: 'normal',
}

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    size: 'normal',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    color: 'tertiary',
    size: 'normal',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor: '#9333ea',
    size: 'h1',
}