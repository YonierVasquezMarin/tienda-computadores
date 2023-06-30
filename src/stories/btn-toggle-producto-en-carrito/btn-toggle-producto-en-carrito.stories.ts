import type { Meta, StoryObj } from '@storybook/angular';
import BtnToggleProductoEnCarritoComponent from './btn-toggle-producto-en-carrito.component';

const meta: Meta<BtnToggleProductoEnCarritoComponent> = {
  title: 'Atoms/BtnToggleProductoEnCarrito',
  component: BtnToggleProductoEnCarritoComponent,
  tags: ['autodocs'],
  argTypes: {
    productoSinAgregar: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BtnToggleProductoEnCarritoComponent>;

export const Principal: Story = {
  args: {
    productoSinAgregar: true,
  }
};
