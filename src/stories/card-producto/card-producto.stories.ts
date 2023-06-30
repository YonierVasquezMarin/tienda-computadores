import type { Meta, StoryObj } from '@storybook/angular';
import CardProductoComponent from './card-producto.component';

const meta: Meta<CardProductoComponent> = {
  title: 'Atoms/CardProducto',
  component: CardProductoComponent,
  tags: ['autodocs'],
  argTypes: {
    cantidad: {
      description: 'Cantidad de productos en el carrito',
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
    irAlCarrito: {
      description: 'Clic para ir al carrito',
      action: 'clicked',
  },
  },
};

export default meta;
type Story = StoryObj<CardProductoComponent>;

export const Principal: Story = {
  args: {
    cantidad: 2,
  },
};
