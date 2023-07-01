import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import CardProductoComponent from './card-producto.component';
import BtnToggleProductoEnCarritoComponent from '../btn-toggle-producto-en-carrito/btn-toggle-producto-en-carrito.component';

const meta: Meta<CardProductoComponent> = {
  title: 'Atoms/CardProducto',
  component: CardProductoComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [BtnToggleProductoEnCarritoComponent]
    })
  ],
  argTypes: {
    nombre: {
      description: 'nombre producto',
      defaultValue: 'Asus',
      control: {
        type: 'text'
      }
    },
    precio: {
      description: 'precio',
      defaultValue: 0,
      control: {
        type: 'number'
      }
    },
    productoSinAgregar: {
      description: 'el producto no esta agregado',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  },
};

export default meta;
type Story = StoryObj<CardProductoComponent>;

export const Principal: Story = {
  args: {
    nombre: 'Asus',
    precio: 3500000,
    productoSinAgregar: false
  },
};
