import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: '#f9fafb' },
          100: { value: '#f3f4f6' },
          200: { value: '#e5e7eb' },
          300: { value: '#d1d5db' },
          400: { value: '#9ca3af' },
          500: { value: '#6b7280' },
          600: { value: '#4b5563' },
          700: { value: '#374151' },
          800: { value: '#1f2937' },
          900: { value: '#111827' },
          950: { value: '#030712' },
        },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          value: {
            _light: 'white',
            _dark: 'gray.900',
          },
        },
        'background.subtle': {
          value: {
            _light: 'gray.50',
            _dark: 'gray.800',
          },
        },
        'background.muted': {
          value: {
            _light: 'gray.100',
            _dark: 'gray.700',
          },
        },
        border: {
          value: {
            _light: 'gray.200',
            _dark: 'gray.700',
          },
        },
        'border.muted': {
          value: {
            _light: 'gray.100',
            _dark: 'gray.800',
          },
        },
        text: {
          value: {
            _light: 'gray.900',
            _dark: 'gray.50',
          },
        },
        'text.muted': {
          value: {
            _light: 'gray.600',
            _dark: 'gray.400',
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
