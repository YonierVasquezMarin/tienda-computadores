import type { Meta, StoryObj } from '@storybook/angular';
import CarritoComprasComponent from './carrito-compras.component';

const meta: Meta<CarritoComprasComponent> = {
  title: 'Atoms/CarritoCompras',
  component: CarritoComprasComponent,
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
type Story = StoryObj<CarritoComprasComponent>;

export const Principal: Story = {
  args: {
    cantidad: 2,
  },
};
