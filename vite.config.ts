import react from '@vitejs/plugin-react';
import path from 'path'
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'Feedback fin react wrapper',
            formats: ['es', 'umd'],
            fileName: (format) => `feedback-fin-react.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                }
            },
        },
    },
});
