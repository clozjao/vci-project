import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    envPrefix: ['VITE_'],
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: Number(env.PORT || 3000),
    },
    preview: {
      host: '0.0.0.0',
      port: Number(env.PORT || 4173),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        mode === 'production' ? 'production' : 'development'
      ),
    },
  };
});
