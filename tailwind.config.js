tailwind.config = {
    theme:{
        extend:{
            gridTemplateColums:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f',
            },
            boxShadow:{
                'black': '4px_4px_0_#000',
                'white': '4px_4px_0_#fff',
            }
        }
    },
    darkMode: 'selector'
}