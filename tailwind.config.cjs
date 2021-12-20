module.exports = {
    mode: 'jit',
    theme: {

        extend: {
          fontFamily: {
            'body': ['Press\\ Start\\ 2P', 'sans-serif'],
          },
          animation: {
            wiggle: 'wiggle 4s ease-in-out infinite',
          },
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-5deg)' },
              '50%': { transform: 'rotate(5deg)' },
            },
          },
        },
      },
    purge: ['./src/**/*.svelte'],
  }